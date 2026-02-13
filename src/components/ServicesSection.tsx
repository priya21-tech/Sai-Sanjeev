import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Eye, Hand, FileText, Compass, Home, Flame,
  Heart, Briefcase, Activity, Shield, Gem, Calendar,
} from "lucide-react";

const primaryServices = [
  { icon: Eye, title: "Face Reading", desc: "Uncover personality traits and life patterns through facial analysis." },
  { icon: Hand, title: "Palmistry", desc: "Read life lines, fate lines and more through traditional palm analysis." },
  { icon: FileText, title: "Horoscope Chart Analysis", desc: "Comprehensive birth chart reading based on Vedic astrology." },
  { icon: Compass, title: "KP Astrology", desc: "Krishnamurti Paddhati system for precise event predictions." },
  { icon: Home, title: "Vastu Consultation", desc: "Harmonize your living and working spaces for positive energy flow." },
  { icon: Flame, title: "Tantra Guidance", desc: "Spiritual tantric remedies for deep-rooted life challenges." },
];

const additionalServices = [
  { icon: Heart, title: "Marriage Problems", desc: "Compatibility analysis and remedies for marital harmony." },
  { icon: Briefcase, title: "Career & Business Growth", desc: "Astrological insights for professional advancement." },
  { icon: Activity, title: "Health & Family Issues", desc: "Planetary analysis for health concerns and family well-being." },
  { icon: Shield, title: "Dosha Analysis", desc: "Mangalik and Kalsarpa dosha identification and remedies." },
  { icon: Gem, title: "Gemstone Suggestions", desc: "Personalized gemstone recommendations based on your chart." },
  { icon: Calendar, title: "Puja & Muhurat Dates", desc: "Auspicious timing for ceremonies, events and new beginnings." },
];

const ServiceCard = ({ icon: Icon, title, desc, i, inView }: { icon: any; title: string; desc: string; i: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
    className="card-spiritual group hover:border-gold-subtle/40 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon size={22} className="text-primary-foreground" />
    </div>
    <h3 className="font-display text-lg mb-2 tracking-wide">{title}</h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Services</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide">
            What <span className="gradient-gold-text">Sree Sanjeev</span> Offers
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {primaryServices.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center font-body text-sm uppercase tracking-[0.3em] text-gold mb-8"
        >
          Specialized Consultations
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {additionalServices.map((s, i) => (
            <ServiceCard key={s.title} {...s} i={i + 6} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
