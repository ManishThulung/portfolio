import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Manish Rai. All rights reserved.
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#projects" className="hover:text-foreground">
            Projects
          </a>
          <a href="#experience" className="hover:text-foreground">
            Experience
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        {/* <div className="flex items-center gap-3">
          {[FaGithub, FaLinkedin, FaXTwitter, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-muted-foreground transition-colors"
              aria-label="social link"
            >
              <Icon size={16} />
            </a>
          ))}
        </div> */}
      </div>
      {/* <div className="mt-6 text-center text-xs text-muted-foreground">
        Built with React & Tailwind CSS
      </div> */}
    </footer>
  );
}
