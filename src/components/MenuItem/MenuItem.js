import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ titles }) => {
  return (
    <div className="menuItem">
      {titles?.map((title) => (
        <h4>{title}</h4>
      ))}
    </div>
  );
};

export default MenuItem;
