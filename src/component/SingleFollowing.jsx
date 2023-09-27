import React from "react";
const SingleFollowing = (props) => {
  return (
    <div className="ms-2" style={{ marginBottom: "1rem" }}>
      <div className="topItem">
   {props.item.user}
        <small>{props.item.title}</small>
      </div>
      <div className="person">
        <div className="bottom ms-2">
          <img className="img-profile" src={props.item.img} alt="" />
          <div className="detailBox">
            <h4 className="text-white m-0 box">
              <span className="me-1">{props.item.name} </span>
              {props.item.icon}
            </h4>
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
