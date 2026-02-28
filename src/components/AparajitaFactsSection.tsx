import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flower2, Crown, Trophy, Shield, Sword, Leaf } from "lucide-react";

const aparajitaFacts = [
  {
    number: "01",
    title: "The Unconquered Name",
    content: "Aparajita means \"unconquered\" or \"invincible\" - representing victory over all evil forces and obstacles that seek to diminish spiritual growth."
  },
  {
    number: "02", 
    title: "Divine Form of Shakti",
    content: "As a manifestation of Goddess Durga/Parvati, Aparajita embodies the protective power that upholds dharma and destroys adharma throughout the universe."
  },
  {
    number: "03",
    title: "Vijayadashami Worship",
    content: "Especially revered in Bengal and Eastern India during Durga Puja, with special rituals performed before the goddess idol's immersion."
  },
  {
    number: "04", 
    title: "Symbol of Ultimate Victory",
    content: "Historically worshipped by kings and warriors before battles, devotees seek her blessings for success in all life's challenges and protection from negative forces."
  },
  {
    number: "05",
    title: "Ramayana Connection",
    content: "Lord Rama worshipped Aparajita before battle, tying her sacred creeper on his wrist as a symbol of divine strength and assured victory."
  }
];

const AparajitaFactsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-to-br from-rose-50/40 via-orange-50/30 to-amber-50/40 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full border-2 border-gold/20 opacity-30" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-2 border-gold/10 opacity-20" />
      
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Flower2 size={28} className="text-gold" />
            <div className="h-px w-16 bg-gold/30" />
            <Leaf size={24} className="text-gold" />
            <div className="h-px w-16 bg-gold/30" />
            <Flower2 size={28} className="text-gold" />
          </div>
          
          <p className="font-body text-sm uppercase tracking-[0.4em] text-gold mb-4">Sacred Knowledge</p>
          <h2 className="font-display text-3xl sm:text-5xl tracking-wide mb-6">
            <span className="gradient-gold-text">Key Facts</span> About<br />
            <span className="text-foreground">Goddess Aparajita</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {aparajitaFacts.slice(0, 3).map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="card-spiritual p-6 border-l-4 border-gold hover:border-gold-subtle transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                        <span className="font-display text-lg font-bold text-primary-foreground">{fact.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl mb-3 tracking-wide text-foreground">{fact.title}</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">{fact.content}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {aparajitaFacts.slice(3).map((fact, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="card-spiritual p-6 border-r-4 border-gold hover:border-gold-subtle transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 text-right">
                      <h3 className="font-display text-xl mb-3 tracking-wide text-foreground">{fact.title}</h3>
                      <p className="font-body text-muted-foreground leading-relaxed">{fact.content}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                        <span className="font-display text-lg font-bold text-primary-foreground">{fact.number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Central blessing card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card-spiritual p-8 text-center border-2 border-gold-subtle bg-gradient-to-br from-gold/5 to-amber-50/20"
            >
              <Crown size={32} className="text-gold mx-auto mb-4" />
              <h3 className="font-display text-2xl mb-4 tracking-wide">Divine Blessing</h3>
              <p className="font-body italic text-foreground/90 leading-relaxed">
                "Those who worship Aparajita with devotion receive her unconquerable strength to overcome all obstacles and achieve victory in their spiritual journey."
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gold/10 rounded-full border border-gold/30">
            <Sword size={20} className="text-gold" />
            <span className="font-body text-sm uppercase tracking-[0.2em] text-gold">Victory Through Devotion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AparajitaFactsSection;