import Navbar from "./Components/Navbar";
import PostNavbar from "./Components/PostNavbar";
import ImageRow from "./Components/Mentors";
import Companies from "./Components/Companies";
import RecruitersSection from "./Components/Recruiters";
import HirefromUs from "./Components/HirefromUs";
import HowItWorksSection from "./Components/HowitWorks";
import HiringRequest from "./Components/HiringRequest";
import PreFooter from "./Components/Prefooter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      {/* header section  */}
      <Navbar />
      {/* post header section */}
      <PostNavbar />
      {/* Mentors */}
      <ImageRow />
      {/* companies */}
      <Companies />
      {/* recruiters */}
      <RecruitersSection />
      {/* hire from us */}
      <HirefromUs />
      {/* how it works */}
      <HowItWorksSection />
      {/* hiring request */}
      <HiringRequest />
      {/* pre footer */}
      <PreFooter />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
