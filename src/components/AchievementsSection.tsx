import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, ExternalLink, Target, Zap } from "lucide-react";

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones that reflect my dedication to continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card-hover p-10 md:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
          />

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))" }}
              >
                <Trophy className="text-accent" size={40} />
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-3xl font-display font-bold text-foreground mb-2">
                100+ DSA Problems
              </h3>
              <p className="text-lg text-muted-foreground mb-1">
                Solved on LeetCode
              </p>
              <p className="text-sm text-muted-foreground/70 mb-6">
                Consistently sharpening problem-solving skills across arrays, trees, graphs, and dynamic programming.
              </p>
              <a
                href="https://leetcode.com/u/niteshkumarp523/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:gap-3"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                View LeetCode Profile <ExternalLink size={14} />
              </a>
            </div>

            <div className="hidden md:flex flex-col gap-4">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 border border-border/50">
                <Target className="text-primary" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Focus</p>
                  <p className="text-sm font-semibold text-foreground">DSA & Algorithms</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-secondary/50 border border-border/50">
                <Zap className="text-accent" size={18} />
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Languages</p>
                  <p className="text-sm font-semibold text-foreground">C++, Python, Java</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
