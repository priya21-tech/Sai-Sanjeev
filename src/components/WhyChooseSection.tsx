import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "21+ years of devotion to Maa Aparajita",
  "Daily puja and havan rituals at home temple",
  "Divine blessings channeled through astrology",
  "Spiritual remedies guided by goddess's wisdom",
  "Accurate horoscope & dosha analysis",
  "Personalized guidance with compassionate care",
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-choose-me" className="section-padding bg-mystic-pattern relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Why Choose</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide">
            Your Trusted Guide in <span className="gradient-gold-text">Vedic Astrology</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="flex items-center gap-4 card-spiritual"
            >
              <CheckCircle2 size={20} className="text-gold flex-shrink-0" />
              <span className="font-body text-foreground/90">{r}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
