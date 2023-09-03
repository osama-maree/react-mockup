import React from "react";
const SideBarBox = (props) => {
  return (
    <div className="ms-2 sidebarbox text-white">
     {props.item.icon}
      <p className="text">{props.item.title}</p>
    </div>
  );
};

export default SideBarBox;
