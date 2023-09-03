import ReactLogo from "./ReactLogo.jsx";
import Profile from "./Profile.jsx";
import Details from "./Details.jsx";
import BottomDetails from "./BottomDetails.jsx";



const HomePage = () => {
  return (
    <div className="homePage">
      <ReactLogo />
      <Profile />
      <Details />
      <BottomDetails />
    </div>
  );
};

export default HomePage;
