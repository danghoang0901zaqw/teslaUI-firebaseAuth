import React from "react";
import "./ButtonPrimary.scss";

const ButtonPrimary = ({ name, type, onClick }) => {
  return (
    <button className="buttonPrimary" onClick={onClick} type={type}>
      {name}
    </button>
  );
};

export default ButtonPrimary;
