import {Component} from "nest.js";

@Component()
export class FlowService {
  private token = { value: ''};
  private flow = { value: '483602685'};
  private status = [
    {
      "executionId": "483603087",
      "branchId": null,
      "startTime": 1471954251633,
      "endTime": 1471954251974,
      "status": "COMPLETED",
      "resultStatusType": "RESOLVED",
      "resultStatusName": "No Maintenance",
      "pauseReason": null,
      "owner": "adminwithjm",
      "ownerDomain": "rabobank",
      "triggeredBy": "rabobank\\adminwithjm",
      "flowUuid": "9764ab05-b245-4606-941c-d33e69d0f96f",
      "flowPath": "Library/Flows/ITN/CI/IS/Infrashop/Common/Maintenance/Check Infrashop Maintenance.xml",
      "executionName": "Curl Test v2API",
      "triggeringSource": "central",
      "roi": 0.0
    }
  ];
  private results = {
    "executionSummary": {
      "executionId": "483603087",
      "branchId": null,
      "startTime": 1471954251633,
      "endTime": 1471954251974,
      "status": "COMPLETED",
      "resultStatusType": "RESOLVED",
      "resultStatusName": "NoMaintenance",
      "pauseReason": null,
      "owner": "adminwithjm",
      "ownerDomain": "rabobank",
      "triggeredBy": "rabobank\\adminwithjm",
      "flowUuid": "9764ab05-b245-4606-941c-d33e69d0f96f",
      "flowPath": "Library/Flows/ITN/CI/IS/Infrashop/Common/Maintenance/Check Infrashop Maintenance.xml",
      "executionName": "Curl Test v2API",
      "triggeringSource": "central",
      "roi": 0.0
    },
    "flowVars": [
      {
        "name": "OrderTypesToCheck",
        "termName": null,
        "value": "inputvalue"
      }
    ],
    "flowOutput": {
      "ResultMessage": "No components in maintenance.",
      "Result": "No components inmaintenance."
    },
    "executionLogLevel": "STANDARD"
  };

  getToken() {
    return Promise.resolve(this.token);
  }

  startFlow() {
    return Promise.resolve(this.flow.value);
  }

  getRunStatus(executionId) {
    return Promise.resolve(this.status);
  }

  getFlowResults(executionId) {
    return Promise.resolve(this.results);
  }

}
