import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, User, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="section-subtitle">
            A driven CS student building expertise in ML, backend systems, and algorithmic problem-solving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10">
                <User className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              Computer Science Engineering student with a strong interest in Machine Learning, Backend Development, and scalable systems. Skilled in Python, Java, and C++ with experience building RESTful APIs using Node.js and Express.js. Passionate about solving complex problems using Data Structures, Algorithms, and data-driven approaches.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Python", "Java", "C++", "Node.js", "ML"].map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card-hover p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-accent/10">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                <h4 className="font-semibold text-foreground text-[15px]">B.Tech Computer Science & Engineering</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                  <MapPin size={12} />
                  Lovely Professional University, Punjab
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="tag-pill">CGPA: 7.07</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={11} /> 2024 – Present
                  </span>
                </div>
              </div>
              <div className="relative pl-6 border-l-2 border-accent/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />
                <h4 className="font-semibold text-foreground text-[15px]">Diploma Computer Science & Engineering</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                  <MapPin size={12} />
                  Lovely Professional University
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent">CGPA: 8.43</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={11} /> 2022 – 2024
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
