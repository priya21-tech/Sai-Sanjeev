import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Send, CheckCircle } from "lucide-react";

const categories = [
  "Marriage", "Career", "Education", "Finance", "Health",
  "Kalsarpa Dosha", "Mangalik Dosha", "Business", "Family",
  "Vastu", "Palmistry", "Gemstone", "Puja/Muhurat", "Other",
];

const WHATSAPP_NUMBER = "919831304267";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "", phone: "", email: "", category: "", message: "", mode: "Online",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    if (form.name.length > 100) e.name = "Name too long";
    if (form.phone.length > 15) e.phone = "Invalid phone number";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (form.message.length > 1000) e.message = "Message too long";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    const text = [
      `*New Consultation Request*`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.category ? `Category: ${form.category}` : "",
      `Mode: ${form.mode}`,
      `Message: ${form.message}`,
    ].filter(Boolean).join("\n");

    setTimeout(() => {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }, 1500);
  };

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const inputClass = "w-full bg-secondary border border-gold-subtle rounded-lg px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-colors";

  if (submitted) {
    return (
      <section id="contact" className="section-padding relative" ref={ref}>
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="card-spiritual glow-gold py-12"
          >
            <CheckCircle size={48} className="text-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl mb-2">Thank You!</h3>
            <p className="font-body text-muted-foreground">Redirecting you to WhatsApp…</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide mb-4">
            Get In <span className="gradient-gold-text">Touch</span>
          </h2>
          <p className="font-body text-muted-foreground">Fill in the form below and connect directly via WhatsApp.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="card-spiritual space-y-5"
        >
          {/* Name */}
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Full Name *</label>
            <input type="text" className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
            {errors.name && <p className="text-sm text-destructive mt-1 font-body">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Phone Number *</label>
            <input type="tel" className={inputClass} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            {errors.phone && <p className="text-sm text-destructive mt-1 font-body">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Email</label>
            <input type="email" className={inputClass} placeholder="you@email.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
            {errors.email && <p className="text-sm text-destructive mt-1 font-body">{errors.email}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Problem Category</label>
            <select className={inputClass} value={form.category} onChange={(e) => update("category", e.target.value)}>
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Mode */}
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-2">Preferred Consultation Mode</label>
            <div className="flex gap-4">
              {["Online", "In-person"].map((m) => (
                <label key={m} className="flex items-center gap-2 cursor-pointer font-body">
                  <input
                    type="radio"
                    name="mode"
                    value={m}
                    checked={form.mode === m}
                    onChange={(e) => update("mode", e.target.value)}
                    className="accent-gold"
                  />
                  {m}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Message *</label>
            <textarea className={inputClass} rows={4} placeholder="Describe your concern…" value={form.message} onChange={(e) => update("message", e.target.value)} />
            {errors.message && <p className="text-sm text-destructive mt-1 font-body">{errors.message}</p>}
          </div>

          <button type="submit" className="btn-whatsapp w-full justify-center text-base">
            <MessageCircle size={20} />
            Send to WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
