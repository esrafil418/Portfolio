import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

export default function Footer() {
  return (
    <footer
      className={cn(
        "py-12 px-4 bg-card relative border-t border-border",
        "mt-12 pt-8 flex flex-wrap justify-between items-center",
      )}
    >
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Esrafil.co. All rights reseved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20}/>
      </a>
    </footer>
  );
}
