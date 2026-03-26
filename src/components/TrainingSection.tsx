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
    <section
      id="training"
      className="section-padding bg-transparent relative"
      ref={ref}
    >
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="gradient-line mx-auto mb-4" />
          <h2 className="section-title">
            <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Structured learning focused on core data structures and algorithmic problem solving.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card-hover p-8 md:p-10 rounded-2xl border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Title Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <BookOpen className="text-primary" size={22} />
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-foreground">
                DSA Training
              </h3>
              <p className="text-sm text-muted-foreground font-mono">
                Lovely Professional University
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-border/50 mb-6" />

          {/* Topics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {topics.map((t, i) => (
              <motion.div
                key={t}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                className="text-center p-4 rounded-xl bg-secondary/40 border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {t}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;