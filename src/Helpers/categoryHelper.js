// import React from "react";

const Categories = (categories)=> {
   let cats = categories.map(cats=>{
      return {key:cats.id, text: cats.name, value:cats.name.replace(" ","").toLowerCase(), id: cats.id}
       })

   return cats
}



export default Categories;
