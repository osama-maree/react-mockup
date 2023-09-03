import ReactLogo from "./ReactLogo.jsx";
import Profile from "./Profile.jsx";
import Details from "./Details.jsx";
import BottomDetails from "./BottomDetails.jsx";
import Following from "./Following.jsx";



const HomePage = () => {
  return (
    <div className="homePage">
      <ReactLogo />
      <Profile />
      <Details />
      <BottomDetails />
      <Following/>
    </div>
  );
};

export default HomePage;
