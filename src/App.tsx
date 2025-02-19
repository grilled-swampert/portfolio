import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hackathons from "./components/Hackathons";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Warfare from "./components/Warfare";

function App() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className='fixed top-[7rem]'>
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
