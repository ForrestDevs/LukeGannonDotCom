"use client";

import Particles from "@/components/custom/Particles";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";
import Image from "next/image";
import Link from "next/link";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-black via-slate-950 to-slate-800">
      <Section1 />

      <section className="w-full h-[calc(90vh+10px)] bg-transparent">
        <div className="w-full h-full text-white">
          <div className="flex flex-col items-center justify-between text-center p-[5%] w-full h-full ">
            <h2>About Me</h2>
            <p data-aos="fade" className="text-sobre">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptate
              exercitationem quod quas voluptatibus quidem doloribus. Quisquam
              voluptatum, quibusdam, quia, quos voluptates voluptate
              exercitationem quod quas voluptatibus quidem doloribus.
            </p>
            <p>
              Know more about me{" "} <Link href="/about">here</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section1() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 150], ["0%", "150%"]);
  let scale = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative w-full h-screen">
      {/* <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-transparent blur-3xl"></div> */}
      <Particles />
      <div className="flex flex-col gap-2 max-w-2xl h-fit absolute bottom-[30vh] mx-32 text-white">
        <p className="text-md md:text-xl text-gray-300">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Luke Gannon
        </h1>
        <h2 className="text-3xl md:text-4xl text-gray-200">
          Undergraduate, Software Developer
        </h2>
        <p className="text-md md:text-xl text-gray-300">
          Specializing in front-end development. Experienced with all stages of
          the development cycle for dynamic web projects. Strong background in
          project management and customer relations.
        </p>
      </div>

      <motion.div
        style={{ y, scale }}
        className="absolute left-10 bottom-0 flex flex-col items-center space-y-4"
      >
        <Link
          href={"https://github.com/ForrestDevs"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <Github />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/luke-gannon02/"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          <LinkedIn />
        </Link>
        <Link
          href={"https://twitter.com/ForrestDevs"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 pb-1"
        >
          <Twitter />
        </Link>
        <span className="border-l-2 border-white/60 h-[29vh] m-auto" />
      </motion.div>
    </section>
  );
}
