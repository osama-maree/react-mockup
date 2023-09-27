import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SingleFollowing from "./SingleFollowing.jsx";
import Pages from "./Pages.jsx";
import { mockData } from "../mockData/mockData.js";


const RightSideBar = () => {
  return (
    <div className="w-75">
      <div className="search mb-4">
        <AiOutlineSearch className="text-secondary" />
        <small>Search</small>
      </div>
      <div className="pages mb-4">
        <h4 className="text-white m-0 title">You might like</h4>
        {mockData.map((e, inx) => (
          <SingleFollowing key={inx} item={e} />
        ))}
        <small className="text-info my-3">Show more</small>
      </div>
      <Pages />
      <div className="card">
        <small className="itemFlex">
          <div>Terms of Services</div> <div>Privacy Policy</div>
          <div> Cookie Policy</div>
        </small>
        <small className="itemFlex">
          <div>Accessibility</div> <div>Ads info</div>
          <div>More...</div>
          <div> @2023 X Crop.</div>
        </small>
      </div>
    </div>
  );
};

export default RightSideBar;
