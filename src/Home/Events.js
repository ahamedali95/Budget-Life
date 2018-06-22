import React from "react";

const Events = (props) => {
  console.log("inside events", props)
  return (
    <ul>
      {
        props.events.map((eventObj) => {
          return <li>{eventObj.name}</li>
        })
      }
    </ul>
  );
}

export default Events;
