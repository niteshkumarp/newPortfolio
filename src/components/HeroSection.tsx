import { useEffect, useState, useMemo } from "react";
import { Github, Linkedin, Download, ArrowDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const titles = [
  "Machine Learning Engineer",
  "Backend Developer",
  "DSA Problem Solver",
];

const FloatingOrb = ({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, hsl(var(--glow-primary) / 0.15), transparent 70%)`,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const orbs = useMemo(() => [
    { delay: 0, size: 300, x: "10%", y: "20%" },
    { delay: 2, size: 200, x: "70%", y: "60%" },
    { delay: 4, size: 150, x: "80%", y: "10%" },
    { delay: 1, size: 250, x: "30%", y: "70%" },
  ], []);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = deleting ? 35 : 70;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2200);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((c) => c + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} {...orb} />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(222 47% 6% / 0.4) 100%)"
      }} />

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-mono text-primary/80">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-6 whitespace-nowrap text-gradient"
            >
              Nitesh Kumar Pandit
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-10 mb-4"
            >
              <span className="text-xl md:text-2xl font-mono text-primary/90">
                {titles[titleIndex].slice(0, charIndex)}
              </span>
              <span className="animate-blink text-accent font-mono">_</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-8"
            >
              <MapPin size={14} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Punjab, India</span>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-xl font-medium transition-all duration-300 text-sm"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                View Projects
                <ArrowDown size={14} className="inline ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1n88gSOlqYqMKVrvuPg5c877ZjEVttokw/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm text-sm"
              >
                <Download className="inline mr-2" size={14} />
                Resume
              </a>
              <a
                href="https://github.com/niteshkumarp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/nitesh-p/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile photo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              />
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 relative z-10"
                style={{ 
                  boxShadow: "0 0 60px hsl(var(--primary) / 0.15)",
                  background: "linear-gradient(135deg, hsl(221 50% 16%), hsl(222 47% 11%))"
                }}
              >
                <img src={profilePhoto} alt="Nitesh Kumar Pandit" className="w-full h-full object-cover object-top" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse-glow" />
              <div className="absolute -inset-8 rounded-full border border-primary/5" />
            </div>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
