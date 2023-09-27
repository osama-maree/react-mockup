import { BsThreeDots } from "react-icons/bs";
import { MdOutlineNotificationAdd } from "react-icons/md";
export default function Profile() {
  return (
    <div>
      <div>
        <img
          className="coverPic"
          src="/assets/reactPic.jpeg"
          style={{ width: "100%" }}
          alt=""
        />
        <div className="bottomIcon">
          <img className="profileImg" src="/assets/reactLogo.png" alt="" />
          <div className="icons">
            <BsThreeDots className="border text-white" />
            <MdOutlineNotificationAdd className="border text-white" />
            <h4 className="following text-white">Following</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
