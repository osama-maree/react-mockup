import React from "react";
import { BsArrowLeft, BsThreeDots } from "react-icons/bs";
import { MdOutlineNotificationAdd } from "react-icons/md";
function ReactLogo() {
  return (
    <div className="reactLogo">
      <BsArrowLeft />
      <div>
        <h3 className="logo">React</h3>
        <small>2,611 posts</small>
      </div>
    </div>
  );
}
function Profile() {
  return (
    <div>
      <div className="imgBox">
        <img
          className="coverPic"
          src="/assets/reactPic.jpeg"
          style={{ width: "100%" }}
          alt=""
        />
        <div className="bottomIcon">
          <img className="profileImg" src="/assets/reactLogo.png" alt="" />
          <div className="icons">
            <BsThreeDots className="border" />
            <MdOutlineNotificationAdd className="border"/>
            <h4 className="following">Following</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
const HomePage = () => {
  return (
    <div className="homePage">
      <ReactLogo />
      <Profile />
    </div>
  );
};

export default HomePage;
