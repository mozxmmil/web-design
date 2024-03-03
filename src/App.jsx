import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import SecondLandingpage from "./components/SecondLandingpage";
import About from "./components/About";
import Eye from "./components/Eye";
import FeaturedSection from "./components/FeaturedSection";
import CardSession from "./components/CardSession";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-full text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <SecondLandingpage />
        <About/>
        <Eye/>
        <FeaturedSection/>
        <CardSession/>
      </div>
    </>
  );
}

export default App;
