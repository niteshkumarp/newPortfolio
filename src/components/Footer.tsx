import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border/50 bg-background">
    <div className="container mx-auto text-center">
      <a href="#" className="font-mono text-lg font-semibold text-gradient inline-block mb-6">
        {"<NKP />"}
      </a>
      <div className="flex justify-center gap-3 mb-6">
        <a
          href="https://github.com/niteshkumarp"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/nitesh-p/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          <Linkedin size={18} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground/60 font-mono">
        © 2025 Nitesh Kumar Pandit — Built with <Heart size={12} className="inline text-accent" /> and code.
      </p>
    </div>
  </footer>
);

export default Footer;
