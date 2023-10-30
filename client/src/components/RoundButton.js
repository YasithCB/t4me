import React from "react";

const RoundButton = ({ text, onClick, isSelected }) => {
  return (
    <button
      className={`btn ${isSelected ? "btn-dark" : ""} round-button my-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RoundButton;
