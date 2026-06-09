import { Briefcase, Code, User } from "lucide-react";
import { cn } from "../lib/utils";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              A Self-Taught Web Developer
            </h3>
            <p className="text-muted-foreground">
              Right now, I'm learning and growing step by step in the world of
              web development — from mastering the fundamentals to exploring
              modern frameworks.
            </p>

            <p className="text-muted-foreground">
              Currently learning JavaScript, TypeScript, React, and diving into
              Next.js & Node.js.
              <br />
              Exploring UI frameworks like Tailwind CSS and Bootstrap to create
              clean, responsive designs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/10 transition-colors duration-300",
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern framworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Build Fast</h4>
                  <p className="text-muted-foreground">
                    I build fast, responsive websites with [React / Next /
                    TypeScript / Tailwind] Clean code. On-time delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
