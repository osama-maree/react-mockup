import React from "react";
import SideBar from "../component/SideBar.jsx";
import HomePage from "../component/HomeSide.jsx";
import RightSideBar from "../component/RightSideBar.jsx";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <HomePage />
      <RightSideBar />
    </div>
  );
};

export default Home;
