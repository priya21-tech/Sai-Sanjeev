import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Trophy, Shield, Crown, Sword, Leaf } from "lucide-react";

const facts = [
  {
    icon: Flower2,
    title: "Meaning of the Name",
    content: "Aparajita means \"unconquered\" or \"invincible.\" She symbolizes victory over evil, obstacles, and negative forces."
  },
  {
    icon: Crown,
    title: "Form of Goddess Durga / Shakti",
    content: "Aparajita is considered one of the many forms of Goddess Durga (Parvati/Shakti). She represents divine power that protects dharma and destroys adharma."
  },
  {
    icon: Trophy,
    title: "Worship on Vijayadashami (Dussehra)",
    content: "She is specially worshipped on Vijaya Dashami, especially in Bengal and Eastern India. Aparajita Puja is performed after Durga Puja rituals, before the immersion of the idol."
  },
  {
    icon: Shield,
    title: "Symbol of Victory and Success",
    content: "Traditionally, kings and warriors worshipped her before going to war to ensure victory. Devotees pray to her for success in life's battles and for protection."
  },
  {
    icon: Sword,
    title: "Association with the Ramayana Tradition",
    content: "Lord Rama is believed to have worshipped Aparajita before the battle and tied the Aparajita creeper on his wrist for victory."
  }
];

const AparajitaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="aparajita" className="section-padding bg-gradient-to-br from-amber-50/30 to-orange-50/30 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Flower2 size={32} className="text-gold" />
          </div>
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Divine Wisdom</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide">
            Key Facts About <span className="gradient-gold-text">Goddess Aparajita</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="card-spiritual border-l-4 border-gold pl-6 py-5"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-gold flex items-center justify-center mt-1">
                  <fact.icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2 tracking-wide text-foreground">{fact.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{fact.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full border border-gold/20">
            <Leaf size={16} className="text-gold" />
            <span className="font-body text-sm text-gold">Divine Blessings for All Seekers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AparajitaSection;