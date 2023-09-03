import React from "react";
import SideBarBox from "./SideBarBox.jsx";
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiNotification4Line } from "react-icons/ri";
import { BsCardList, BsBookmark } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
const data = [
  { icon: <AiOutlineHome />, title: "Home" },
  { icon: <AiOutlineSearch />, title: "Explore" },
  { icon: <RiNotification4Line />, title: "Notifications" },
  { icon: <HiOutlineMail />, title: "Messages" },
  { icon: <BsCardList />, title: "Lists" },
  { icon: <BsBookmark />, title: "Bookmarks" },
  { icon: <AiOutlineUsergroupDelete />, title: "Communities" },
  { icon: <HiOutlineUser />, title: "Profile" },
  { icon: <CiCircleMore />, title: "More" },
];
const SideBar = () => {
  return (
    <div>
      <img src="/assets/logo.jpg" className="imgLogo" alt="" />
      {data.map((e, indx) => (
        <SideBarBox item={e} key={indx} />
      ))}
      <div className="btn">Post</div>
    </div>
  );
};

export default SideBar;
