import React from "react";
import { BiSolidUser } from "react-icons/bi";
const SingleFollowing = (props) => {
  return (
    <div className="ms-2" style={{ marginBottom: "1rem" }}>
      <div className="topItem">
        <BiSolidUser className="text-secondary" />
        <small className="box">
          <span className="me-1">{props.item.title}</span> {props.item.icon}
        </small>
      </div>
      <div className="person">
        <div className="bottom ms-2">
          <img className="img-profile" src={props.item.img} alt="" />
          <div className="detailBox">
            <h4 className="text-white m-0 ">{props.item.name}</h4>
            <small>{props.item.type}</small>
          </div>
        </div>
        <h4 className="follow m-0 me-5">Follow</h4>
      </div>
      <p className="text-white m-0 textBottom">{props.item.text}</p>
    </div>
  );
};

export default SingleFollowing;
