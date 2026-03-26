import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { title: "Build Generative AI Apps and Solutions with No-Code Tool", issuer: "Infosys", color: "primary" as const },
  { title: "Cloud Computing", issuer: "NPTEL", color: "accent" as const },
  { title: "Amazon Web Services", issuer: "Infosys", color: "primary" as const },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications validating my expertise.
          </p>
        </motion.div>

        <div className="space-y-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ x: -40, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card-hover p-6 flex items-center gap-5"
            >
              <div className={`p-3 rounded-xl shrink-0 ${c.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'}`}>
                <Award className={c.color === 'accent' ? 'text-accent' : 'text-primary'} size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-[15px]">{c.title}</h3>
                <p className="text-sm text-muted-foreground font-mono mt-0.5">{c.issuer}</p>
              </div>
              <div className="shrink-0">
                <span className={`tag-pill ${c.color === 'accent' ? 'border-accent/20 bg-accent/5 text-accent' : ''}`}>
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
