import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeveloperSnapshot from "./components/DeveloperSnapshot";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubActivity from "./components/GithubActivity";
import Hackathons from "./components/Hackathons";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#060814] text-white">
      <Navbar />
      <Hero />
<DeveloperSnapshot />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubActivity />
      <Hackathons />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;