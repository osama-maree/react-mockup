import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SingleFollowing from "./SingleFollowing.jsx";
import { FaCertificate } from "react-icons/fa";
const data = [
  {
    title: null,
    name: `Tailwind css`,
    type: "@tailwindcss",
    img: "/assets/tw.jpeg",
    icon: <FaCertificate className="text-info" />,
    text: null,
    user: null,
  },
  {
    title: null,
    name: "TypeScript",
    type: "@typescript",
    img: "/assets/ts.png",
    icon: null,
    text: null,
    user: null,
  },
  {
    title: null,
    name: "freeCodeCamp.org",
    icon: <FaCertificate className="text-info" />,
    type: "@freeCodeCamp",
    img: "/assets/rf.png",
    text: null,
    user: null,
  },
];
const RightSideBar = () => {
  return (
    <div className="w-75">
      <div className="search mb-4">
        <AiOutlineSearch className="text-secondary" />
        <small>Search</small>
      </div>
      <div className="pages">
        <h4 className="text-white m-0 title">You might like</h4>
        {data.map((e, inx) => (
          <SingleFollowing key={inx} item={e} />
        ))}
        <small className="text-info my-3">Show more</small>
      </div>
    </div>
  );
};

export default RightSideBar;
