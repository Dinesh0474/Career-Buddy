import React from 'react'

const Hyref = (props) => {
    // const link = "https://youtu.be/XkBWJQdAnKY?si=UhNnql-oun0zlYhQ";
  return (
    <div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.label}
    </a>
  </div>
);
};

export default Hyref