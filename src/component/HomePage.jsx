import React from "react";
import { BsArrowLeft } from "react-icons/bs";
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
const HomePage = () => {
  return (
    <div className="homePage">
      <ReactLogo />
    </div>
  );
};

export default HomePage;
