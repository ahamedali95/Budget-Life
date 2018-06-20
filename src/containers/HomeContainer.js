import React from "react";
import BillContainer from "./BillContainer.js";
import EventContainer from "./EventContainer.js";

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <BillContainer />
        <EventContainer />
      </div>
    );
  }
}

export default HomeContainer;
