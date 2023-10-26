import { Container } from "@/components/standard/Container";

const techStack = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Contentlayer",
  "Vercel",
//   "GitHub",
//   "VS Code",
//   "Figma",
//   "Spotify",
//   "Notion",
//   "Google Drive",
//   "Google Chrome",
//   "MacBook Pro",
//   "iPhone",
//   "iPad",
//   "AirPods Pro",
//   "Apple Watch",
];

const color = [
    "#54aeff",
    "#c297ff",
    "#ff80c8",
    "#ff8182",
    "#fb8f44",
    "#4ac26b",
]

export default function TechStack(): JSX.Element {
  return (
    <Container className="mt-9">
      <div className="max-w-3xl">
        {techStack.map((tech, i) => (
          <span
            key={tech}
            className={`bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0 inline-block px-3 py-1 text-xs font-medium rounded-full mr-2 mb-2`}
          >
            {tech}
          </span>
        ))}
      </div>
    </Container>
  );
}
