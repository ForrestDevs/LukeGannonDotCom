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
import generateRss from "@/lib/generate-rss";
import * as fs from "node:fs";
import { Suspense } from "react";

import { Container } from "@/components/standard/Container";
// import Server from "./Server";
import Articles from "./Articles";
import { allArticles } from "contentlayer/generated";
import Educations from "./Educations";
import TechStack from "./TechStack";

function HeroPlaceholder() {
  return (
    <Container className="mt-9">
      <div className="max-w-3xl pt-[15px] animate-pulse">
        <div className="sm:h-[35px] bg-gray-300 rounded-full dark:bg-gray-600 sm:w-[400px] mb-4 h-[20px] w-[250px]" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-4"></div>

        <div className="space-y-5 max-w-3lg mt-10">
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[200px]"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[150px]"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[400px]"></div>
          </div>
          <div className="flex items-center w-full space-x-2">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[240px]"></div>
          </div>
          <div className="flex items-center w-2/3 space-x-2">
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[300px]"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>

          <div className="flex items-center w-full space-x-2">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[240px]"></div>
          </div>
          <div className="flex items-center space-x-2 w-full">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[200px]"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-[400px]"></div>
          </div>
          <div className="flex items-center w-3/4 space-x-2">
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[500px]"></div>
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          </div>
        </div>
        <div className="mt-9 flex gap-6">
          <div className="group p-1 h-6 w-6 bg-gray-200 dark:bg-gray-700"></div>
          <div className="group p-1 h-6 w-6 bg-gray-200 dark:bg-gray-700"></div>
          <div className="group p-1 h-6 w-6 bg-gray-200 dark:bg-gray-700"></div>
          <div className="group p-1 h-6 w-6 bg-gray-200 dark:bg-gray-700"></div>
          <div className="group p-1 h-6 w-6 bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </Container>
  );
}

export default async function Home(): Promise<JSX.Element> {
  // if (fs.existsSync("public")) {
  //   await generateRss();
  // }
  async function getSortedArticles(): Promise<any> {
    let articles = await allArticles;
    articles = articles.filter(
      (article: any) => article.status === "published"
    );
    return articles.sort((a: any, b: any) => {
      if (a.publishedAt && b.publishedAt) {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      }
      return 0;
    });
  }
  return (
    <>
      <Suspense fallback={<HeroPlaceholder />}>
        <ParticlesCanvas />
      </Suspense>
      <Suspense fallback={<HeroPlaceholder />}>
        <Section1 />
      </Suspense>
      <Suspense fallback={<HeroPlaceholder />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<HeroPlaceholder />}>
        <Educations />
      </Suspense>
      <Suspense fallback={<HeroPlaceholder />}>
        <Articles articles={await getSortedArticles()} />
      </Suspense>

      {/* <Suspense fallback={<HeroPlaceholder />}>
        <Server component="Educations" />
      </Suspense>

      <Suspense fallback={<HeroPlaceholder />}>
        <Server component="Educations" />
      </Suspense>

      <Suspense fallback={<HeroPlaceholder />}>
        <Server component="Educations" />
      </Suspense>

      <Suspense fallback={<HeroPlaceholder />}>
        <Server component="Educations" />
      </Suspense> */}
    </>
    // <main className="min-h-screen w-full bg-gradient-to-br from-black via-slate-950 to-slate-800">

    // </main>
  );
}

function ParticlesCanvas() {
  return (
    <div className="fixed inset-0 flex justify-center sm:px-8">
      <section className="flex w-full max-w-7xl lg:px-8">
        <Particles />
      </section>
    </div>
  );
}

const about = {
  name: "Luke Forrest Gannon",
  designation: "Software Engineer",
  company: {
    name: "Queen's University",
    url: "https://queensu.ca /",
  },
  description:
    "Specializing in front-end development and committed to enhancing user experience. My strong background in project management, coupled with my exceptional skill in translating complex technical topics into understandable terms, ensures client satisfaction.",
  socialLinks: [
    {
      name: "google-scholar",
      url: "https://scholar.google.com/citations?user=HriPgEQAAAAJ",
    },
    {
      name: "semantic-scholar",
      url: "https://www.semanticscholar.org/author/Mir-Sazzat-Hossain/2220031205",
    },
    {
      name: "dblp",
      url: "https://dblp.org/pid/349/0737.html",
    },
    {
      name: "github",
      url: "https://github.com/forrestdevs",
    },
    {
      name: "linkedin",
      url: "https://linkedin.com/in/forrestdevs",
    },
    {
      name: "twitter",
      url: "https://twitter.com/forrestdevs",
    },
  ],
  resume: "files/mirsazzathossain-cv.pdf",
  note: "Seeking Full-Stack Software Engineering Opportunities",
};

function sendTweet() {
  const req = fetch("/api/tweet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function Section1() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 150], ["0%", "150%"]);
  let scale = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section>
      <Container className="mt-9">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {about.name}
          </h1>
          <button onClick={sendTweet}>Click ME</button>
          <h2 className="text-gray-600 dark:text-gray-400 tracking-tighter mb-4">
            {about.designation} at{" "}
            <Link
              className="font-semibold"
              href={about.company.url}
              target={"_blank"}
            >
              {about.company.name}
            </Link>
          </h2>
          <p
            className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
            style={{ whiteSpace: "pre-line" }}
          >
            {about.description}
          </p>

          {about.note && (
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              <b>*Note:</b> {about.note}
            </p>
          )}

          {/* <div className="mt-6 flex gap-6">
            {about.socialLinks.map((socialLink: any, index: any) => (
              <SocialLink
                key={index}
                href={socialLink.url}
                icon={
                  socialLink.name === "github"
                    ? GitHubIcon
                    : socialLink.name === "linkedin"
                    ? LinkedInIcon
                    : socialLink.name === "twitter"
                    ? TwitterIcon
                    : socialLink.name === "google-scholar"
                    ? GoogleScholarIcon
                    : socialLink.name === "semantic-scholar"
                    ? SementicScholarIcon
                    : socialLink.name === "dblp"
                    ? DBLPIcon
                    : null
                }
                title={
                  socialLink.name === "github"
                    ? "GitHub Profile"
                    : socialLink.name === "linkedin"
                    ? "LinkedIn Profile"
                    : socialLink.name === "twitter"
                    ? "Twitter Profile"
                    : socialLink.name === "google-scholar"
                    ? "Google Scholar Profile"
                    : socialLink.name === "semantic-scholar"
                    ? "Semantic Scholar Profile"
                    : socialLink.name === "dblp"
                    ? "DBLP Profile"
                    : null
                }
              />
            ))}
            <SocialLink
              href={about.resume}
              title="Download Resume"
              icon={DownloadFileIcon}
              download
            />
          </div> */}
        </div>

        {/* <div className="flex flex-row">
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
              <Button
                className="text-white font-medium text-lg bg-white/30 border border-white hover:bg-white/40"
                size={"lg"}
              >
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
        </div> */}
      </Container>
      {/* <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-transparent blur-3xl"></div> */}

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

function Section2() {
  return (
    <section id="about" className="w-full h-[calc(90vh+10px)] bg-transparent">
      <div className="w-full h-full text-white">
        <div className="flex flex-col items-center justify-between text-center p-[5%] w-full h-full ">
          <h2 className="text-2xl md:text-4xl">About Me</h2>
          <p className="text-lg">
            I am an undergraduate Computer Science student at Queen`&apos;`s
            University with a passion for front-end development.
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
            Various fun effects I`&apos;`ve created for myself. Check out my
            <Link href="/blog">blog</Link> for more details on how I made them.
          </p>
        </div>
      </div>
    </section>
  );
}
