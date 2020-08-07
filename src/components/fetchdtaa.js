import React, { Component } from "react";

class Fetchdata extends Component {
  constructor() {
    super();
    this.state = {};
  }

  //Access Key: QACfo5WHhhR8Dx0zqAqZjoNXfVeTdcE_VU7vHdbNjno
  // Secret key: DkuTcidtCgvfrk2PmkC_07IcCrNrBAK3D6M0M0Ezess
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>Code</div>;
  }
}
export default Fetchdata;
