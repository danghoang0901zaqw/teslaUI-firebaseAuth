import React from "react";
import MenuItem from "../MenuItem";
import "./Menu.scss";

const Menu = () => {
  const titles = [
    "existing inventory",
    "used inventory",
    "trade-in",
    "cybertruck",
    "roadster",
    "semi",
    "charging",
    "powerwall",
    "commercial solar",
    "test drive",
    "find us",
    "support",
    "united states",
  ];
  return (
    <div className="menu">
      <MenuItem titles={titles} />
    </div>
  );
};

export default Menu;
