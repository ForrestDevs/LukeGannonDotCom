"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  let { scrollY } = useScroll();
//   let o = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [bgClass, setBgClass] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setBgClass("bg-opacity-40 backdrop-filter backdrop-blur-sm");
    } else {
      setBgClass("bg-black bg-opacity-0");
    }
  });


  return (
    <motion.header
    //   style={{ backgroundColor: o }}
      className={`fixed top-0 left-0 px-10 w-full flex justify-between p-5 text-white z-50 bg-black bg-opacity-0 ${bgClass}`}
    >
      <div className="font-bold text-xl">Luke Gannon</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
