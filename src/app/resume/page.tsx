"use client";

import { useReactToPrint } from "react-to-print";
import {
  ArrowLeft,
  Calendar,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Smartphone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/custom/Button";

export default function Resume() {
  let componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Luke Gannon's Resume`,
    onPrintError: () => alert("there is an error when printing"),
  });

  return (
    <>
      <div className="flex flex-row w-full justify-between absolute z-2 top-0 left-0 p-6">
        <Link href={"/"}>
          <Button
            variant={"outline"}
            size={"sm"}
            className="bg-slate-500 bg-opacity-30"
          >
            <ArrowLeft size={15} />
          </Button>
        </Link>

        <Button
          onClick={handlePrint}
          variant={"outline"}
          size={"sm"}
          className="bg-slate-500 bg-opacity-30"
        >
          <Download size={15} />
        </Button>
      </div>
      <div
        className="w-full h-[100vh] flex flex-col text-gray-700 bg-white"
        ref={componentRef}
      >
        <div className="shadow-[inset_0_-46px_36px_rgba(255,255,255,0.8)] dashed-grid-paper flex flex-col gap-6 w-full items-center justify-center border-b border-slate-400 py-16">
          <div>
            <h1 className="text-4xl font-extrabold text-center">Luke Gannon</h1>
            <h2 className="text-lg font-medium">
              Undergraduate, Software Engineer
            </h2>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1">
                <MapPin /> Toronto, Canada
              </div>
              <div className="flex flex-row gap-1">
                <Mail /> Luke.gannon@me.com
              </div>
              <div className="flex flex-row gap-1">
                <Smartphone /> +1 (647)-963-7477
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <Link
                href={""}
                className="flex flex-row gap-1 px-2 py-1 border rounded-2xl bg-blue-200 border-blue-500"
              >
                <Linkedin /> /lukegannon
              </Link>
              <Link
                href={""}
                className="flex flex-row gap-1 px-2 py-1 border rounded-2xl bg-gray-200 border-gray-500"
              >
                <Github /> /forrestdevs
              </Link>
              <Link
                href={""}
                className="flex flex-row gap-1 px-2 py-1 border rounded-2xl bg-purple-200 border-purple-500"
              >
                <Globe /> lukegannon.com
              </Link>
              <Link
                href={""}
                className="flex flex-row gap-1 px-2 py-1 border rounded-2xl bg-slate-200 border-black"
              >
                <Twitter /> /forrestdevs
              </Link>
            </div>
             
          </div>
        </div>
        <div className="flex flex-col w-full bg-white px-64 py-8">
          <div className="flex flex-row w-full items-start border-b border-slate-400 my-6">
            <p className="text-lg font-semibold mr-16">Summary</p>
            <p className="text-md font-light text-left">
              I am an undergraduate software engineer pursuing a Bachelor
              (Honours) of Computer Science at Queen's University in Kingston,
              Canada. With experience building and maintaining cross platform
              applications, I use React/React Native to build beautiful and
              responsive user interfaces. I am always looking to for new
              challenges and opportunities to learn. In addition to my front-end
              experience, I have experience with backend development using
              Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="flex flex-row w-full items-start justify-between border-b border-slate-400">
            <p className="text-lg font-semibold mr-16">Education</p>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col items-start">
                <p className="font-bold">
                  Bachelor (Honours) of Computer Science - Software Design
                </p>
                <p>Queen's University, Kingston, Canada</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex flex-row">
                  <Calendar /> Sept. 2022 - Apr. 2026
                </div>
                <p>CGPA 3.5</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full items-start border-b border-slate-400 my-6">
            <p className="text-lg font-semibold mr-16">Experience</p>
            <p className="text-md font-light text-left">
              I am an undergraduate software engineer pursuing a Bachelor
              (Honours) of Computer Science at Queen's University in Kingston,
              Canada. With experience building and maintaining cross platform
              applications, I use React/React Native to build beautiful and
              responsive user interfaces. I am always looking to for new
              challenges and opportunities to learn. In addition to my front-end
              experience, I have experience with backend development using
              Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="flex flex-row w-full items-start border-b border-slate-400 my-6">
            <p className="text-lg font-semibold mr-16">Projects</p>
            <p className="text-md font-light text-left">
              I am an undergraduate software engineer pursuing a Bachelor
              (Honours) of Computer Science at Queen's University in Kingston,
              Canada. With experience building and maintaining cross platform
              applications, I use React/React Native to build beautiful and
              responsive user interfaces. I am always looking to for new
              challenges and opportunities to learn. In addition to my front-end
              experience, I have experience with backend development using
              Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="flex flex-row w-full items-start justify-between border-b border-slate-400">
            <p className="text-lg font-semibold mr-16">Skills & Tools</p>
            <div className="flex flex-col max-w-xl">
              <div className="flex flex-col">
                <p className="font-bold">Languages</p>
                <div className="flex flex-row gap-4">
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    JavaScript
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    TypeScript
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Swift
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Python
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Java
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    C
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="font-bold">Tools & Technologies</p>
                <div className="flex flex-row flex-wrap gap-4">
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Next.js
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    React
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    React Native
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    TailwindCSS
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    MongoDB
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    CoreData
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Framer Motion
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Node.js
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    NextAuth.js
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    Numpy
                  </p>
                  <p className="text-sm font-light px-2 rounded-2xl text-white bg-gray-700 p-1">
                    OpenCV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
