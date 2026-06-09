import { ArrowRight, ExternalLink, Link } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    description:
      "A modern, responsive landing page for Codext - a SAAS company. This project is a design with multiple sections.",
    image: "/projects/Landing-page.png",
    tags: ["HTML/CSS", "Responsive", "JavaScript", "Font Awesome Icons"],
    demoUrl: "https://esrafil418.github.io/Css-Landing-Page/",
    githubUrl: "https://github.com/esrafil418/Css-Landing-Page",
  },
  {
    id: 2,
    title: "Cafe Menu",
    description:
      "An interactive and dynamic restaurant/cafe menu application built with React and Bootstrap 5.",
    image: "/projects/Cafe.png",
    tags: ["React", "Bootstrap 5", "Responsive", "React Icons", "Modern UI"],
    demoUrl: "https://github.com/esrafil418",
    githubUrl: "https://github.com/esrafil418/iCafe",
  },
  {
    id: 3,
    title: "Squid Game CMS",
    description:
      "A simple Content Management System (CMS) panel with a design inspired by the Squid Game series. ",
    image: "/projects/CMS.png",
    tags: [
      "React",
      "React Router DOM 7",
      "Material UI ",
      "MUI Icons",
      "Recharts 3 ",
    ],
    demoUrl: "https://github.com/esrafil418",
    githubUrl: "https://github.com/esrafil418/Squid-Game-CMS",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full border",
                        "bg-primary/10 text-secondary-foreground",
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 mt-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            target="_blank"
            href="https://github.com/esrafil418"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
