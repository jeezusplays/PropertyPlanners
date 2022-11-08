const $ = require("jquery");

export class AgentData {
  constructor(agentReg) {
    this.url = "https://data.gov.sg/api/action/datastore_search";
    this.profile_resource_id = "a41ce851-728e-4d65-8dc5-e0515a01ff31";
    this.sales_resource_id = "8a087b7c-a11b-4da8-bbb6-ac933f465acd";
    this.agent_reg_id = agentReg;
  }

  async getProfile() {
    var limit = 100;
    var q = `q={"registration_no":"${this.agent_reg_id}"}`;
    var url = `${this.url}?resource_id=${this.profile_resource_id}&limit=${limit}&${q}`;
    try {
      var r = await $.ajax({
        url: url,
        contentType: "application/json",
      });

      return r["result"]["records"][0];
    } catch (error) {
      return error;
    }
  }

  async getSales() {
    var limit = 1000;
    var q = `q={"salesperson_reg_num":"${this.agent_reg_id}"}`;
    var url = `${this.url}?resource_id=${this.sales_resource_id}&limit=${limit}&${q}`;
    var r;
    try {
      r = await $.ajax({
        url: url,
        contentType: "application/json",
        error: (ts) => {
          console.log(ts);
        },
      });
      return r["result"]["records"];
    } catch (error) {
      return error;
    }
  }
}
