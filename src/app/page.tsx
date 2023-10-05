"use client";

import Particles from "@/components/custom/Particles";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/custom/Button";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-black via-slate-950 to-slate-800">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}

function Section1() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 150], ["0%", "150%"]);
  let scale = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <>
      <section className="relative w-full h-screen">
        <Header />
        {/* <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-transparent blur-3xl"></div> */}
        <Particles />
        <div className="flex flex-row absolute bottom-[30vh] mx-32">
          <div>
            <div className="flex flex-col gap-2 max-w-2xl h-fit  text-white">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Luke Gannon
              </h1>
              <h2 className="text-3xl md:text-4xl text-gray-200">
                Undergraduate, Software Engineer
              </h2>
              <p className="text-md md:text-xl text-gray-300">
                Specializing in front-end development and committed to enhancing
                user experience. My strong background in project management,
                coupled with my exceptional skill in translating complex
                technical topics into understandable terms, ensures client
                satisfaction.
              </p>
              <div></div>
            </div>
            <Link href="/resume">
              <Button className="text-white font-medium text-lg bg-white/30 border border-white hover:bg-white/40" size={"lg"}>
                Resume
              </Button>
            </Link>
          </div>

          <div>
            <Image
              src="/headshot.jpg"
              alt="Picture of the author"
              width={400}
              height={600}
              className="rounded-full"
            />
          </div>
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
        {/* <Footer /> */}
      </section>
    </>
  );
}

function Section2() {
  return (
    <section id="about" className="w-full h-[calc(90vh+10px)] bg-transparent">
      <div className="w-full h-full text-white">
        <div className="flex flex-col items-center justify-between text-center p-[5%] w-full h-full ">
          <h2 className="text-2xl md:text-4xl">About Me</h2>
          <p className="text-lg">
            I am an undergraduate Computer Science student at Queen's University
            with a passion for front-end development.
          </p>
          <h2>Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>Next.js</div>
            <div>React</div>
            <div>React Native</div>
            <div>TailwindCSS</div>
          </div>
          <h2>Interests</h2>
          <p>
            Outside of coding and development, I lead the QUANTT group, enjoy
            going to the gym, snowboarding, and outback hiking.
          </p>
          <p>
            Know more about me <Link href="/about">here</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section
      id="projects"
      className="w-full h-[calc(90vh+10px)] bg-transparent"
    >
      <div className="w-full h-full text-white">
        <div className="flex flex-col items-center justify-between text-center p-[5%] w-full h-full ">
          <h2 className="text-2xl md:text-4xl">Projects</h2>
          <h3 className="text-lg">Applications</h3>
          <p>
            Gear Shed - A multiplatform application with synced databases,
            offline first on mobile, serverless function for fetching and
            pushing data, and authentication.
          </p>
          <h3 className="text-lg">Websites</h3>
          <p>Supreme Auto Care - A website built for an auto care business.</p>
          <h3 className="text-lg">Demos</h3>
          <p>
            Various fun effects I've created for myself. Check out my{" "}
            <Link href="/blog">blog</Link> for more details on how I made them.
          </p>
        </div>
      </div>
    </section>
  );
}
