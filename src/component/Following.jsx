import React from "react";
import SingleFollowing from "./SingleFollowing.jsx";
import { homeData } from "../mockData/mockData.js";

const Following = () => {
  return (
    <div>
      <h4 className="text-white m-0 mt-3 ms-2">Who to follow</h4>
      {homeData.map((e, indx) => (
        <SingleFollowing key={indx} item={e} />
      ))}
      <small className="text-info my-5">Show more</small>
    </div>
  );
};

export default Following;
