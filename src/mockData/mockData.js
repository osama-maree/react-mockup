import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiNotification4Line } from "react-icons/ri";
import { BsCardList, BsBookmark } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import { FaCertificate, FaRegComment } from "react-icons/fa";
import { BiSolidUser, BiBarChart, BiRepost } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { GoShare } from "react-icons/go";

export const data = [
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
export const mockData = [
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

export const homeData = [
  {
    title: "Node.js and 9 others follow",
    name: "freeCodeCamp.org",
    icon: <FaCertificate className="text-info" />,
    type: "@freeCodeCamp",
    text: "We're a community of millions of people who are building new skills and getting new jobs togethe. A 501(v)(3) public charity. Tweets by",
    img: "/assets/rf.png",
    user: <BiSolidUser className="text-secondary" />,
  },
  {
    title: "Node.js and 9 others follow",
    name: "TypeScript",
    type: "@typescript",
    text: "TypeScript is a language for application-scale javaScript devlopment. it's a typed superset of javascript that compiles to plain JavaScript.",
    img: "/assets/ts.png",
    icon: null,
    user: <BiSolidUser className="text-secondary" />,
  },
  {
    title: "Yazeed Obaid and 3 others follow",
    name: `Tailwind css`,
    type: "@tailwindcss",
    text: "The utility-first CSS frawork. Rapidly build modern websites, without ever leaving your HTML.",
    img: "/assets/tw.jpeg",
    icon: <FaCertificate className="text-info" />,
    user: <BiSolidUser className="text-secondary" />,
  },
];
export const rightSideData = [
  { icon: <FaRegComment className="text-secondary" />, numbers: 46 },
  { icon: <BiRepost className="text-secondary" />, numbers: 675 },
  {
    icon: <GiSelfLove className="text-secondary" />,
    numbers: 3.701,
  },
  { icon: <BiBarChart className="text-secondary" />, numbers: "1.1M" },
  { icon: <GoShare className="text-secondary" />, numbers: null },
];
