export const useVapiApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Get available assistants
  const { 
    data: assistantsData, 
    loading: loadingAssistants, 
    error: assistantsError,
    refetch: refetchAssistants
  } = useQuery(GET_ASSISTANTS);
  
  // Get available phone numbers
  const {
    data: phoneNumbersData,
    loading: loadingPhoneNumbers,
    error: phoneNumbersError,
    refetch: refetchPhoneNumbers
  } = useQuery(GET_PHONE_NUMBERS);

  // Create assistant mutation
  const [createAssistant, { 
    loading: creatingAssistant, 
    error: createAssistantError 
  }] = useMutation(CREATE_ASSISTANT, {
    onCompleted: () => {
      refetchAssistants();
    }
  });

  // Create call mutation
  const [createCall, { 
    loading: creatingCall, 
    error: createCallError 
  }] = useMutation(CREATE_CALL);

  // Handle assistant creation
  const handleCreateAssistant = async (assistantData: {
    name: string;
    instructions: string;
    firstMessage: string;
    voice?: {
      provider: string;
      voiceId: string;
    };
    llm?: {
      provider: string;
      model: string;
    };
  }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await createAssistant({
        variables: { input: assistantData }
      });
      
      setIsLoading(false);
      return response.data.createAssistant;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create assistant');
      setIsLoading(false);
      return null;
    }
  };

  // Handle call creation
  const handleCreateCall = async (callData: {
    assistantId: string;
    phoneNumberId: string;
    customer: {
      phoneNumber: string;
    };
  }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await createCall({
        variables: { input: callData }
      });
      
      setIsLoading(false);
      return response.data.createCall;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create call');
      setIsLoading(false);
      return null;
    }
  };

  return {
    // Data
    assistants: assistantsData?.assistants || [],
    phoneNumbers: phoneNumbersData?.phoneNumbers || [],
    
    // Loading states
    isLoading,
    loadingAssistants,
    loadingPhoneNumbers,
    creatingAssistant,
    creatingCall,
    
    // Errors
    error,
    assistantsError: assistantsError?.message,
    phoneNumbersError: phoneNumbersError?.message,
    createAssistantError: createAssistantError?.message,
    createCallError: createCallError?.message,
    
    // Methods
    createAssistant: handleCreateAssistant,
    createCall: handleCreateCall,
    refetchAssistants,
    refetchPhoneNumbers
  };
};
