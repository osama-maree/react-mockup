import React from "react";
import SideBarBox from "./SideBarBox.jsx";
import { data } from "../mockData/mockData.js";


const SideBar = () => {
  return (
    <div className="sideBar">
      <img src="/assets/logo.jpg" className="imgLogo" alt="" />
      {data.map((e, indx) => (
        <SideBarBox item={e} key={indx} />
      ))}
      <div className="btn">Post</div>
    </div>
  );
};

export default SideBar;
