import React from "react";
import BillContainer from "./BillContainer.js";
import EventContainer from "./EventContainer.js";

import Graphs from "../components/Graphs.js";
import MoneyAnalyzer from "../components/MoneyAnalyzer.js";

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Graphs />
        <BillContainer />
        <EventContainer />
        <MoneyAnalyzer />
      </div>
    );
  }
}

export default HomeContainer;
