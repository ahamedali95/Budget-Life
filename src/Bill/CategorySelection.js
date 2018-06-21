import React from "react";

const CategorySelection = (props) => {
  console.log(props)
  return (
    <div>
      <select onChange={props.getOption}>
        {
          props.categories.map((categoryObj) => {
            return <option key={categoryObj.id}>{categoryObj.name}</option>;
          })
        }
      </select>
    </div>
  );
}

export default CategorySelection;
