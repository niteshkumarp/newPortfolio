import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const topics = [
  "Arrays", "Linked Lists", "Stacks", "Queues",
  "Trees", "Graphs", "Sorting Algorithms", "Dynamic Programming",
];

const TrainingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="section-padding bg-secondary/20" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Structured learning in core computer science fundamentals.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card-hover p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <BookOpen className="text-primary" size={20} />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">
              DSA Training
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-8 ml-[52px] font-mono">Lovely Professional University</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((t, i) => (
              <motion.div
                key={t}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group cursor-default"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{t}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
