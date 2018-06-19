import React from "react";

const CategorySelection = (props) => {
  console.log(props)
  return (
    <div>
      <select onChange={props.getOption}>
        <option>None</option>
        {
          props.categories.map((categoryObj) => {
            return <option>{categoryObj.name}</option>
          })
        }
      </select>
    </div>
  );
}

export default CategorySelection;
