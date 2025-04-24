// packages/common/campaign/nodes/callCampaignNode.ts
import AbstractCampaignNode from "./abstractCampaignNode";
import { CampaignNodeKind } from "../types";

/**
 * Represents an outbound call node in a campaign
 */
class CallCampaignNode extends AbstractCampaignNode {
  kind = CampaignNodeKind.OutboundCall;
  #callScriptId?: string;
  #schedulingType?: string;
  #callerId?: string;
  
  private constructor() {
    super();
  }

  static new() {
    return new CallCampaignNode();
  }

  toString() {
    return `Call: ${this.name || this.id}`;
  }

  setCallScriptId(value?: string) {
    this.#callScriptId = value;
    return this;
  }

  getCallScriptId() {
    return this.#callScriptId;
  }

  setSchedulingType(value?: string) {
    this.#schedulingType = value;
    return this;
  }

  getSchedulingType() {
    return this.#schedulingType;
  }

  setCallerId(value?: string) {
    this.#callerId = value;
    return this;
  }

  getCallerId() {
    return this.#callerId;
  }
}

export default CallCampaignNode;
