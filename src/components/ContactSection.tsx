import { supabase } from "@/integrations/supabase/client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Mail, label: "niteshkumarp523@gmail.com", href: "mailto:niteshkumarp523@gmail.com" },
  { icon: Phone, label: "+91-6006367473", href: "tel:+916006367473" },
  { icon: Github, label: "github.com/niteshkumarp", href: "https://github.com/niteshkumarp" },
  { icon: Linkedin, label: "linkedin.com/in/nitesh-p", href: "https://www.linkedin.com/in/nitesh-p/" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase.from("messages").insert([
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
  ]);

  if (error) {
    alert("❌ Failed to send message");
    console.log(error);
  } else {
    alert("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  }
};

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" />
          <h2 className="section-title">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-3"
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-6">Get In Touch</h3>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <s.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">{s.label}</span>
                <ArrowUpRight size={14} className="text-muted-foreground/0 group-hover:text-muted-foreground transition-all" />
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 40, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none text-sm"
            />
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                color: "hsl(var(--primary-foreground))",
              }}
            >
              <Send size={14} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
