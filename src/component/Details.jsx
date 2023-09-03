import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
export default function Details() {
  return (
    <div className="details">
      <div className="reactComp">
        <h3 className="m-0 text-white">React</h3>
        <small>@reactjs</small>
      </div>
      <p className="text-white">
        The library for web and native user interfaces
      </p>
      <div className="link">
        <AiOutlineLink className="text-secondary" />
        <a href="https://legacy.reactjs.org/" className="blueColor">
          react.dev
        </a>
        <BsCalendar3 className="text-secondary" />
        <small>Joined July 2013</small>
      </div>
      <div className="numberFollow">
        <h5 className="m-0 me text-white">267 </h5> <small> Following</small>
        <h5 className="m-0 ms-2 me text-white">708.1K </h5>{" "}
        <small> Followers</small>
      </div>
      <div className="footer">
        <div className="imgBox">
          <img className="img1" src="/assets/osama.jpg" alt="" />
          <img className="img2" src="/assets/osama2.jpg" alt="" />
        </div>
        <small>
          Followed By Osama Maree,Osama Mahmoud &#128171;.and 14 Others you
          follow
        </small>
      </div>
    </div>
  );
}
