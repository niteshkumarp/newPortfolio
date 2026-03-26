import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Train, Home, ArrowUpRight } from "lucide-react";
import railwayImg from "@/assets/project-railway.jpg";
import realestateImg from "@/assets/project-realestate.jpg";

const projects = [
  {
    title: "Railway Maintenance Coach Profile Dashboard",
    subtitle: "ML-Powered Analytics",
    period: "Mar 2025 – May 2025",
    icon: Train,
    image: railwayImg,
    link: "https://github.com/niteshkumarp/railway_maintenance_coach_dashboard",
    tech: ["Streamlit", "Python", "Numpy", "Pandas"],
    features: [
      "Implemented an ML-powered Streamlit application to predict railway coach condition scores using Linear Regression and classify coaches via K-Means clustering.",
      "Validated ML models on multi-parameter maintenance datasets, achieving ~85% prediction accuracy for 100+ railway coaches.",
      "Integrated real-time data visualizations including trend graphs, cluster plots, and condition score dashboards for coach performance insights.",
    ],
  },
  {
    title: "Apna Ghar Real Estate Website",
    subtitle: "Frontend Development",
    period: "Jun 2023 – Jul 2023",
    icon: Home,
    image: realestateImg,
    link: "https://github.com/niteshkumarp",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Developed a responsive real estate website with 15+ property listings, enabling structured presentation of housing details.",
      "Implemented HTML5 and CSS3 to build 10+ semantic web pages with clean layout and cross-browser rendering.",
      "Utilized Bootstrap framework to create mobile-first layouts, achieving responsiveness across 5+ screen resolutions.",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Hands-on projects showcasing my skills in ML, backend, and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass-card-hover group relative overflow-hidden"
            >
              {/* Project Snapshot */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} snapshot`}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
                {/* Floating link button on image */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="p-6">
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
                />

                <div className="flex items-start gap-3 mb-1">
                  <div className="p-2 rounded-xl bg-primary/10 shrink-0 mt-0.5">
                    <p.icon className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground leading-snug">{p.title}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{p.subtitle}</span>
                  </div>
                </div>
                <p className="text-xs text-accent font-mono mb-4 ml-[44px]">{p.period}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
