import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import pujaPhoto from "@/assets/puja-photo.jpeg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 bg-mystic-pattern star-field" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-subtle opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold-subtle opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text content */}
          <div className="text-center lg:text-left flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="sanskrit-quote text-lg sm:text-xl mb-6"
            >
              अनुगच्चतु प्रवाहम्
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl leading-tight tracking-wide mb-6"
            >
              Divine Guidance Through{" "}
              <span className="gradient-gold-text">Maa Aparajita</span>{"'s"} Blessings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              With over 21 years of devotion to Maa Aparajita, Sree Sanjeev channels divine blessings to provide trusted astrological guidance and spiritual remedies for life's challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://wa.me/919831304267?text=Hello%20Sree%20Sanjeev%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <MessageCircle size={20} />
                Book on WhatsApp
              </a>
              <button onClick={scrollToServices} className="btn-outline-gold text-base">
                View Services
                <ArrowDown size={18} />
              </button>
            </motion.div>
          </div>

          {/* Puja photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-gold-subtle glow-gold shadow-2xl">
              <img
                src={pujaPhoto}
                alt="Sree Sanjeev performing sacred puja ceremony"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
