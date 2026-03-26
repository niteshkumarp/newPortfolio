import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layout, Server, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "C", level: 75 },
      { name: "SQL", level: 70 },
      { name: "PHP", level: 60 },
      { name: "Perl", level: 55 },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "accent",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "primary",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "JWT Auth", level: 75 },
      { name: "Middleware", level: 70 },
    ],
  },
  {
    title: "Tools / Platforms",
    icon: Wrench,
    color: "accent",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Netlify", level: 70 },
      { name: "Streamlit", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    icon: Brain,
    color: "primary",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Player", level: 85 },
      { name: "Adaptability", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) => (
  <div className="mb-3.5">
    <div className="flex justify-between mb-1.5">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs font-mono text-primary/70">{level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.2, delay: delay * 0.08, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build robust applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card-hover p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl ${cat.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                  <cat.icon className={cat.color === 'accent' ? 'text-accent' : 'text-primary'} size={20} />
                </div>
                <h3 className="font-display font-bold text-foreground">{cat.title}</h3>
              </div>
              {cat.skills.map((s, j) => (
                <SkillBar key={s.name} name={s.name} level={s.level} delay={j} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
