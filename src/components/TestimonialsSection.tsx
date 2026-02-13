import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Somasri Bose", location: "North 24 Parganas", text: "Recently, I met astrologer Sanjeev da for my personal problems, and I'm truly grateful that he helped me find solutions. His guidance gave me a lot of peace and hope. Thank you so much, Sanjeev da." },
  { name: "Tanusree Bhuiya", location: "Kolkata", text: "I consulted Astrologer Sanjeev for my daughter's career and relationship issues. His guidance gave us hope, clarity, and peace. Truly grateful from a mother's heart." },
  { name: "Beena Vohra", location: "Delhi", text: "Very accurate reading. He listened patiently and gave practical advice. The gemstone suggestion has genuinely helped with my health issues." },
  { name: "Kaushik Gupta", location: "Nepal", text: "Sanjeev da's Vastu guidance and remedies brought positive changes to our family life. The issues we were facing at home started resolving gradually. Very genuine person." },
  { name: "Baibhab Vyas", location: "Madhya Pradesh", text: "Sree Sanjeev is approachable and honest. He doesn't exaggerate or scare you — he simply guides. Been consulting for three years now." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding bg-mystic-pattern relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide">
            What People <span className="gradient-gold-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className={`card-spiritual flex flex-col ${i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""}`}
            >
              <Quote size={24} className="text-gold/40 mb-3" />
              <p className="font-body text-foreground/80 leading-relaxed italic flex-1 mb-4">"{t.text}"</p>
              <div>
                <p className="font-display text-sm tracking-wide">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
