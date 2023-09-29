import React from "react";
import { useSearchParams } from "react-router-dom";

const View = () => {
  const searchParams = useSearchParams();
  // console.log(searchParams);
  let val = "";
  for (let [key, value] of searchParams[0].entries()) {
    val = value;
  }
  return <div>{val}</div>;
};

export default View;
