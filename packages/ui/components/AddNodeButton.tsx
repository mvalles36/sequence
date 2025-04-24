import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, GitBranch, Phone } from 'lucide-react';

interface AddNodeButtonProps {
  onAddNode: (nodeType: string) => void;
}

const AddNodeButton: React.FC<AddNodeButtonProps> = ({ onAddNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const nodeTypes = [
    { type: 'EMAIL', icon: <Mail size={16} />, label: 'Email' },
    { type: 'SMS', icon: <MessageCircle size={16} />, label: 'SMS' },
    { type: 'DELAY', icon: <Clock size={16} />, label: 'Delay' },
    { type: 'CONDITION', icon: <GitBranch size={16} />, label: 'Condition' },
    { type: 'CALL_CAMPAIGN', icon: <Phone size={16} />, label: 'Call Campaign' }
  ];
  
  const handleAddNode = (nodeType: string) => {
    onAddNode(nodeType);
    setIsMenuOpen(false);
  };
  
  return (
    <div className="add-node-container">
      <button 
        className="add-node-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        + Add Node
      </button>
      
      {isMenuOpen && (
        <div className="node-type-menu">
          {nodeTypes.map((node) => (
            <button
              key={node.type}
              className="node-type-option"
              onClick={() => handleAddNode(node.type)}
            >
              <span className="node-icon">{node.icon}</span>
              {node.label}
            </button>
          ))}
        </div>
      )}
      
      <style jsx>{`
        .add-node-container {
          position: relative;
          margin: 16px 0;
        }
        
        .add-node-button {
          background-color: #f3f4f6;
          border: 1px dashed #d1d5db;
          border-radius: 6px;
          padding: 10px 16px;
          color: #6b7280;
          font-size: 14px;
          cursor: pointer;
          width: 100%;
          text-align: center;
          transition: all 0.2s;
        }
        
        .add-node-button:hover {
          background-color: #e5e7eb;
          color: #4b5563;
        }
        
        .node-type-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          z-index: 10;
          margin-top: 4px;
          overflow: hidden;
        }
        
        .node-type-option {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          border-bottom: 1px solid #e5e7eb;
          text-align: left;
          cursor: pointer;
          transition: background-color 0.1s;
        }
        
        .node-type-option:last-child {
          border-bottom: none;
        }
        
        .node-type-option:hover {
          background-color: #f9fafb;
        }
        
        .node-icon {
          display: flex;
          align-items: center;
          margin-right: 12px;
          color: #6b7280;
        }
      `}</style>
    </div>
  );
};

export default AddNodeButton;
