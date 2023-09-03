import { BiRepost, BiBarChart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { GoShare } from "react-icons/go";
const options = ["Replies", "Media", "Likes"];
const data = [
  { icon: <FaRegComment className="text-secondary" />, numbers: 46 },
  { icon: <BiRepost className="text-secondary" />, numbers: 675 },
  {
    icon: <GiSelfLove className="text-secondary" />,
    numbers: 3.701,
  },
  { icon: <BiBarChart className="text-secondary" />, numbers: "1.1M" },
  { icon: <GoShare className="text-secondary" />, numbers: null },
];
export default function BottomDetails() {
  return (
    <div>
      <ul className="list">
        <li className="text-white"> Posts</li>
        {options.map((option) => (
          <li>
            <small> {option}</small>{" "}
          </li>
        ))}
      </ul>
      <div className="top">
        <BiRepost /> <sub> React Reposted</sub>
      </div>
      <div className="space-between">
        <div className="bottom ms-2">
          <img className="img-profile" src="/assets/osama.jpg" alt="" />
          <div className="detailBox">
            <div className="row">
              <h4 className="text-white m-0 ">danabramov.bsky.social</h4>
              <small>@dan_abramov May 29</small>
            </div>
            <div className="row">
              <h4 className="m-0 text-white">happy10th birthday to </h4>
              <small className="text-info">@reactjs!</small>
            </div>
          </div>
        </div>
        <BsThreeDots className="text-white me-5" />
      </div>
      <div className="iconList">
        {data.map((e, indx) => (
          <div key={indx} className="item">
            {e.icon}
            <small>{e.numbers}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
