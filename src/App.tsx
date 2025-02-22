import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hackathons from "./components/hackathons/Hackathons";
import Landing from "./components/Landing";
import Navbar from "./components/header/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills";
import Warfare from "./components/Warfare";

function App() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="fixed top-[7rem]">
        <Navbar />
      </div>
      <Landing />
      <Projects />
      <Experience />
      <Hackathons />
      {/* <Skills /> */}
      {/* <Warfare /> */}
      <Footer />
    </div>
  );
}

export default App;
