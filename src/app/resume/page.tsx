"use client";

import { useReactToPrint } from "react-to-print";
import {
  ArrowLeft,
  Calendar,
  CalendarRange,
  Download,
  Github,
  Globe,
  LinkIcon,
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
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-center">Luke Gannon</h1>
            <h2 className="text-lg font-medium">Software Engineer</h2>
          </div>


          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
              <div className="flex flex-row items-center gap-1">
                <MapPin size={15}/> <p className="text-sm font-semibold leading-6">Toronto, Canada</p>
              </div>

              <div className="flex flex-row items-center gap-1">
                <Mail size={15}/> <p className="text-sm font-semibold leading-6">Luke.gannon@me.com</p>
              </div>

              <div className="flex flex-row items-center gap-1">
                <Smartphone size={15}/> <p className="text-sm font-semibold leading-6">+1 (647)-963-7477</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
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

        <div className="flex flex-col w-full bg-white px-[5vw] mt-8">
          <RowContainer title={"Summary"}>
            <p className="text-sm leading-6 font-light text-left">
              I am an undergraduate software engineer pursuing a Bachelor
              (Honours) of Computer Science at Queen's University in Kingston,
              Canada. With experience building and maintaining cross platform
              applications, I use React/React Native to build beautiful and
              responsive user interfaces. I am always looking to for new
              challenges and opportunities to learn. In addition to my front-end
              experience, I have experience with backend development using
              Node.js, Express, and MongoDB.
            </p>
          </RowContainer>

          <RowContainer title={"Education"}>
            <EducationRow
              title={"Bachelor of Computer Science (Honours) - Software Design"}
              location={"Queen's University, Kingston, Canada"}
              date={"Sept. 2022 - May 2026"}
              gpa={"CGPA 3.5"}
            />
          </RowContainer>

          <RowContainer title={"Experience"}>
            <div className="flex flex-col w-full gap-4">
              <ExperienceRow
                company={"QUANTT"}
                title={"Education Executive/Project Manager"}
                date={"Sept. 2022 - Present"}
                bullets={[
                  "Worked along side the director of education to help add to and provide an intriguing/ informative quant curriculum.",
                  "Managed multiple teams of 5 members to build an algorithm via Quant-Connect and pitch it to the board of directors for judging.",
                  "Built a time-series day trading algorithm in Python on the Quant-Connect platform. The algorithm was designed to make decisions based on session opening ranges, volatility and market impacting news.",
                ]}
              />

              <ExperienceRow
                company={"QMIND"}
                title={"Team Developer"}
                date={"Dec. 2022 - April 2023"}
                bullets={[
                  "Fine-tuned a LLM transformer ALBERT to preform sentiment analysis on text.",
                  "Utilized a dataset of dataset of comments mapping to 1 of 27 emotions produced by Google.",
                  "Used a variety of NLP techniques to tokenize and preprocess the sentences to feed into our model.",
                ]}
              />

              <ExperienceRow
                company={"Forrest Devs"}
                title={"Freelance Software Engineer"}
                date={"Sept. 2022 - Present"}
                bullets={[
                  "Promoted design and development skills via twitter / X.",
                  "Developed websites and cross platform applications for clients.",
                  "Worked with clients to develop and implement new features.",
                ]}
              />

              <ExperienceRow
                company={"BonaVista Leisurescapes"}
                title={"Project Manager"}
                date={"June 2016 - Sept. 2022"}
                bullets={[
                  "Managed customer relations in a professional time sensitive manner.",
                  "Produced creative problem solving solutions to navigate tricky installation situations.",
                  "Advised owner on technology and software solutions to improve business efficiency.",
                ]}
              />
            </div>
          </RowContainer>

          <RowContainer title={"Projects"}>
            <div className="flex flex-col w-full gap-2">
              <ProjectRow
                title="Gear Shed"
                link="gearshed.app"
                tags={[
                  "React",
                  "React Native",
                  "Tailwind CSS",
                  "Next.js",
                  "Atlas",
                  "MongoDB",
                ]}
                bullets={[
                  "Developed a multiplatform application to allow users to track, manage, and plan their outdoor gear and adventures",
                  "Intergated with the Atlas MongoDB API to store user data and authentication",
                  "Published to the App Store and Google Play Store and hosted with Vercel for the web.",
                ]}
              />

              <ProjectRow
                title="Bid Dropper"
                link="biddropper.com"
                tags={[
                  "React",
                  "Tailwind CSS",
                  "Next.js",
                  "PlanetScale",
                  "NextAuth.js",
                ]}
                bullets={[
                  "Colaborated on a web application to create a bidding platform for contractor work",
                  "Developed the dashboard that glued all the backend services together",
                ]}
              />

              <ProjectRow
                title="Supreme Auto Care"
                link="supremeautocare.ca"
                tags={["React", "Tailwind CSS", "Next.js", "Stripe", "Cal.com"]}
                bullets={[
                  "Developed a website for a local auto detailing company",
                  "Integrated with Stripe and Cal.com to allow users to book and pay online for services",
                  "Optimized SEO via Google Search Console to increase organic traffic and search ranking",
                ]}
              />
            </div>
          </RowContainer>

          <RowContainer title={"Skills & Tools"}>
            <div className="flex flex-col w-full gap-2">
              <SkillRow
                title={"Languages"}
                tags={[
                  "JavaScript",
                  "Typescript",
                  "Swift",
                  "Python",
                  "Java",
                  "C",
                ]}
              />
              <SkillRow
                title={"Tools & Technologies"}
                tags={[
                  "Git",
                  "GitHub",
                  "Vercel",
                  "MongoDB",
                  "Node.js",
                  "Express",
                  "Next.js",
                  "React",
                  "React Native",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Open CV",
                  "Numpy",
                  "CoreData",
                ]}
              />
            </div>
          </RowContainer>

          <div className="flex w-full h-20"></div>
        </div>
      </div>
    </>
  );
}

interface EducationProps {
  title: string;
  location: string;
  date: string;
  gpa: string;
}

function EducationRow({ title, location, date, gpa }: EducationProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between w-full">
        <p className="text-md font-semibold leading-6">{title}</p>
        <div className="flex flex-row items-center gap-2">
          <CalendarRange size={20} />
          <p className="text-sm leading-6">{date}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <p className="text-sm font-light leading-6">{location}</p>
        <p className="text-sm font-light leading-6">{gpa}</p>
      </div>
    </div>
  );
}

interface ExperienceProps {
  company: string;
  title: string;
  date: string;
  bullets: string[];
}

function ExperienceRow({ company, title, date, bullets }: ExperienceProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-2">
          <p className="text-md font-semibold leading-6">{company}</p>
          <p className="text-sm leading-6">({title})</p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <CalendarRange size={20} />
          <p className="text-sm leading-6">{date}</p>
        </div>
      </div>

      <ul className="list-disc list-inside font-light text-sm leading-6">
        {bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectProps {
  title: string;
  link: string;
  tags: string[];
  bullets: string[];
}

function ProjectRow({ title, link, tags, bullets }: ProjectProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <Link href={link} className="flex flex-row gap-2 items-center">
        <LinkIcon size={15} />
        <p className="text-md font-semibold leading-6">{title}</p>
      </Link>

      <div className="flex flex-row flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>

      <ul className="list-disc list-inside font-light text-sm leading-6">
        {bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

interface SkillProps {
  title: string;
  tags: string[];
}

function SkillRow({ title, tags }: SkillProps) {
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="text-md font-semibold leading-6">{title}</p>
      <div className="flex flex-row flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>
    </div>
  );
}

interface RowProps {
  title: string;
  children: React.ReactNode;
}

function RowContainer({ title, children }: RowProps) {
  return (
    <div className="flex flex-col md:flex-row w-full py-4 border-b border-slate-300">
      <div className="md:h-full md:min-w-[130px] md:w-[15%]">
        <p className="text-lg leading-6 font-bold underline md:no-underline mb-2 md:mb-0">
          {title}
        </p>
      </div>
      <div className="md:h-full md:w-[85%]">{children}</div>
    </div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <p className="text-xs leading-3 font-light p-1 rounded-md text-white bg-gray-700">
      {text}
    </p>
  );
}
