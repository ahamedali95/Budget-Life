import React from "react";

const Bills = (props) => {
  console.log("inside bills", props)
  return (
    <ul>
      {
        props.bills.map((billObj) => {
          return <li>{billObj.description}</li>
        })
      }
    </ul>
  );
}

export default Bills;
