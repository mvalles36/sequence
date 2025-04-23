import AbstractCampaignNode from "./nodes/abstractCampaignNode";
import { CampaignNodeKind } from "./types";

const connectable = (node: AbstractCampaignNode) =>
  node.kind === CampaignNodeKind.Email ||
  node.kind === CampaignNodeKind.Wait ||
  node.kind === CampaignNodeKind.Filter ||
  node.kind === CampaignNodeKind.OutboundCall; // Added OutboundCall to connectable nodes

export const canConnect = (
  from: AbstractCampaignNode,
  to: AbstractCampaignNode
) => {
  switch (from.kind) {
    case CampaignNodeKind.Audience:
    case CampaignNodeKind.Trigger:
    case CampaignNodeKind.Filter:
    case CampaignNodeKind.Email:
    case CampaignNodeKind.Wait:
    case CampaignNodeKind.OutboundCall: // Added OutboundCall as a valid source node
      return connectable(to);
  }
};