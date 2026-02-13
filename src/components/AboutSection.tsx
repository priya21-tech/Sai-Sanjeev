import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Eye, Heart, Sparkles } from "lucide-react";
import sanjeevPhoto from "@/assets/sanjeev-photo-new.jpeg";

const highlights = [
  { icon: Star, text: "21+ years of dedicated astrological practice" },
  { icon: Heart, text: "Spiritual guidance rooted in Vedic traditions" },
  { icon: Eye, text: "Covers all life areas — marriage, career, health, finance & more" },
  { icon: Sparkles, text: "Provides actionable remedies, gemstone advice & muhurat guidance" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-mystic-pattern relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide mb-6">
            A Journey of <span className="gradient-gold-text">21 Years</span> in Spiritual Guidance
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-gold-subtle glow-gold">
                <img
                  src={sanjeevPhoto}
                  alt="Sree Sanjeev - Professional Astrologer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <Sparkles size={20} className="text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-lg text-muted-foreground leading-relaxed text-center lg:text-left"
          >
            Sree Sanjeev is a professional astrologer with over two decades of experience helping individuals find clarity amidst life's uncertainties. His approach blends traditional Vedic wisdom with practical remedies, ensuring every consultation leads to meaningful direction and peace of mind.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="card-spiritual flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                <h.icon size={18} className="text-primary-foreground" />
              </div>
              <p className="font-body text-foreground/90 leading-relaxed">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
