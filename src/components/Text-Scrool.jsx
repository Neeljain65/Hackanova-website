import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

;
function wrap(min, max, value) {
    const range = max - min;
    return ((value - min) % range + range) % range + min;
  }
  

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="scroller flex whitespace-nowrap font-bold uppercase text-4xl"
        style={{ x }}
      >
        <span className="mr-1">{children}</span>
        <span className="mr-1">{children}</span>
        <span className="mr-1">{children}</span>
        <span className="mr-1">{children}</span>
      </motion.div>
    </div>
  );
}

export default function Textscroll() {
  return (
    <div className="bg-purple text-white">
      
      <section className="relative  ">
        <ParallaxText baseVelocity={-5}>Sponsors Sponsors</ParallaxText>
        <ParallaxText baseVelocity={5}>Sponsors Sponsors</ParallaxText>
      </section>
      
    </div>
  );
}
