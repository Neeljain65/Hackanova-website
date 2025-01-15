import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
  import { motion } from "framer-motion";
import AnimatedTitle, { SAnimatedTitle } from "./AnimatedTitle";
import Timer from "./Timer";
import Droid from "./3d/droid";
import SpaceCraft from "./3d/spaceCraft";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Rotate the rings
    gsap.to(".planet-rings", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* <div className="relative bg-[radial-gradient(circle,#f15400,transparent_70%)]"> */}
        {/* <div className="planet-rings absolute inset-0 flex items-center justify-center">
          <div className="ring ring-1"></div>
          
        </div> */}
        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
          {/* <Timer /> */}
          {/* <motion.div 
        className="absolute bottom-30 left-20 lg:w-56 lg:h-56  "
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      >
        <img
          src="/img/pngegg.png" 
          alt="Space Shuttle" 
          layout="fill"
          objectFit="contain"
        />
      </motion.div> */}
      
    
      <SAnimatedTitle
            title="18-19th J<b>A</b>NUARY 2025"
            containerClass="mt-5 !text-white   text-center"
          />
          <AnimatedTitle
            title="Hack<b>a</b>Nova 4.0"
            containerClass="mt-5 !text-orange-800  text-center"
          />


          {/* <div className="about-subtext">
            <p>The Game of Games begins—your life, now an epic MMORPG</p>
            <p className="text-gray-500">
              Zentry unites every player from countless games and platforms, both
              digital and physical, into a unified Play Economy
            </p>
          </div> */}
        </div>

        {/* <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default About;
