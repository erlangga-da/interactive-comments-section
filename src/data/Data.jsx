import React, { useState } from "react";
import { CommentContainer } from "../containers/CommentContainer";
import data from "../data.json";

// export let comments = data;
export const Data = () => {
  const [items, setItems] = useState(data.comments);
  function getItems() {
    console.log('items');
  }
  return(
    <CommentContainer getItems={getItems}/>
  ) ;
};

// export let setComments = (value) => {
//   setItems([...items, value]);
// };
