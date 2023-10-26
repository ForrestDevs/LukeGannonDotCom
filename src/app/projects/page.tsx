import ProjectsPlaceholder from "@/components/skeleton/ProjectsPlaceholder";
import { Container } from "@/components/standard/Container";
import SimpleLayout from "@/layouts/SimpleLayout";
import { Suspense } from "react";
import ListProjects from "./ListProjects";
export default function Projects() {
  return (
    <SimpleLayout
      title="Things I made trying to put my dent in the universe."
      intro="I worked on tons of little projects over the years but these are the ones that I am most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <Container>
        <Suspense fallback={<ProjectsPlaceholder />}>
          <ListProjects />
        </Suspense>
      </Container>
    </SimpleLayout>
  );
}
