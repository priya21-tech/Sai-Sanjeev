import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IndianRupee } from "lucide-react";

const PricingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Contribution</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide mb-8">
            Consultation <span className="gradient-gold-text">Contribution</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-spiritual glow-gold max-w-md mx-auto text-center"
        >
          <p className="font-body text-foreground/80 leading-relaxed italic">
            "I do not charge a fixed fee, but I request you to offer a respectful amount for the time, effort, and guidance."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
