import Trigger from "./triggerCampaignNode";
import Audience from "./audienceCampaignNode";
import Email from "./emailCampaignNode";
import Filter from "./filterCampaignNode";
import Wait from "./waitCampaignNode";
export * from "./abstractCampaignNode";
export * from "./baseAudienceCampaignNode";
import Edge from "./campaignNodeEdge";
import Call from "./callCampaignNode";

export const Campaign = {
  Trigger,
  Audience,
  Email,
  Filter,
  Wait,
  Call,
};

export { Edge };
