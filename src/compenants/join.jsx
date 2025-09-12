"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../compenants/ui/aurora-background";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="font-[serif] text-3xl md:text-7xl font-bold dark:text-white text-center">
          Be part of something <span className="text-blue-500">bigger</span>
        </div>
        <div
          className="font-[serif] font-extralight text-center text-base md:text-4xl dark:text-neutral-200 py-4">
          Join our club now ! A place to connect, grow, and enjoy every moment together
        </div>
        
<button className="font-[serif] px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
  Sign Up
</button>
      </motion.div>
    </AuroraBackground>
  );
}


