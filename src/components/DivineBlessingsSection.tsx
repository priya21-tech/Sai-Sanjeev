import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Sparkles, Heart, Sun, Shield, BookOpen } from "lucide-react";

const blessingPoints = [
  {
    icon: Heart,
    title: "Daily Divine Communion",
    description: "Through dedicated worship and rituals, connecting with Maa Aparajita's protective energy daily"
  },
  {
    icon: Sparkles,
    title: "Channeled Blessings",
    description: "Every consultation is infused with the goddess's unconquerable strength and wisdom"
  },
  {
    icon: Shield,
    title: "Victory Over Challenges",
    description: "Just as Aparajita symbolizes victory, helping clients overcome life's obstacles"
  },
  {
    icon: BookOpen,
    title: "Sacred Knowledge",
    description: "Ancient Vedic wisdom passed down through devotion to the goddess"
  },
  {
    icon: Sun,
    title: "Divine Guidance",
    description: "Lighting the path forward with spiritual insights and astrological clarity"
  }
];

const DivineBlessingsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-br from-gold/5 via-transparent to-amber-50/20 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-4">
            <Flower2 size={36} className="text-gold" />
          </div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Divine Connection</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide mb-6">
            How <span className="gradient-gold-text">Maa Aparajita</span> Guides My Practice
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every aspect of my astrological practice is rooted in devotion to Maa Aparajita, the unconquerable goddess who embodies victory over all obstacles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blessingPoints.map((blessing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="card-spiritual text-center p-6 hover:border-gold-subtle/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
                <blessing.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg mb-3 tracking-wide">{blessing.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{blessing.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="card-spiritual p-8 border-2 border-gold-subtle">
            <Flower2 size={28} className="text-gold mx-auto mb-4" />
            <blockquote className="font-body text-lg italic text-foreground/90 mb-4">
              "Just as Maa Aparajita remains unconquered by any force, I channel her divine strength to help you overcome life's challenges through the ancient wisdom of astrology and spiritual guidance."
            </blockquote>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-gold">
              — Sree Sanjeev
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DivineBlessingsSection;