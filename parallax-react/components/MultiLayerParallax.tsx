//https://www.youtube.com/watch?v=29UWA-GdA7k&list=WL&index=58&t=567s

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const MultiLayerParallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <>
      <div
        ref={ref}
        className="w-full h-screen overflow-hidden relative grid place-items-center"
      >
        <motion.h1 className="font-bold text-white text-7xl md:text-9xl relative z-10">
          PARALLAX
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/image-full.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        ></motion.div>
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: `url(/image-bottom.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </>
  );
};

export default MultiLayerParallax;
