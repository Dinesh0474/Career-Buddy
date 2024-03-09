import React from "react";
import Flow from "./Flow";
import "./index.css";

function Browser(props) {
  let title = "";

  // Convert props.index to a number before comparison
  const index = parseInt(props.index);

  if (index === 0) {
    title = "Chartered Accountant";
  } else if (index === 1) {
    title = "Certified Managemnt Accountant";
  } else if (index === 2){
    title = "IRS Officer"
  } else if (index === 3){
    title = "Medicine"
  } else if (index === 4){
    title = "Management Consultant"
  }

  return (
    <div className="App">
      {title && <h1>{title}</h1>}
      <Flow index={index} />
    </div>
  );
}

export default Browser;
