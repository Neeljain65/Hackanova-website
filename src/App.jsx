import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TimelineDemo } from "./components/TimeLine";
import { CanvasRevealEffectDemo } from "./components/Prizes";
import Textscroll from "./components/Text-Scrool";
import HorizontalScroll from "./components/Horizontal/HorizontalScroll";
import Slider from "./components/Slider/Slider";
import { BackgroundGradientAnimationDemo } from "./components/radientBg/BackGround";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import CardGallery from "./components/Bento";
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <NavBar />
      
      <About />
      {/* <CardGallery /> */}
      <TimelineDemo/>
      <CanvasRevealEffectDemo/>
      
      <Features />
      
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}

export default App;
