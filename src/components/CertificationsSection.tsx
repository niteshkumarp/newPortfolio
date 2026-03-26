import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [certs, setCerts] = useState<any[]>([]);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    const { data, error } = await supabase
      .from("certifications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching certifications:", error);
    } else {
      setCerts(data || []);
    }
  };

  return (
    <section id="certifications" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-5xl">

        {/* HEADER */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
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

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {certs.map((c, i) => (
             <motion.a
                key={c.id}
                href={c.certificate_link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 40, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 group"
                        >

              {/* IMAGE */}
              <div className="relative w-full h-44 overflow-hidden">

                <img
                  src={c.image_url}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: "top " // 🔥 shows header/logo part
                  }}
                />

                {/* LIGHT FADE (matches your UI) */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
              </div>

              {/* TEXT (NON-TRANSPARENT CLEAN UI) */}
              <div className="p-4 bg-white/80 backdrop-blur-sm">

                <h3 className="text-[15px] font-semibold text-gray-800 tracking-tight">
                  {c.title}
                </h3>

                <p className="text-[13px] text-gray-500 mt-1">
                  {c.issuer}
                </p>

              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;