import { MessageCircle, Mail } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-gold-subtle bg-secondary/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-display text-xl tracking-widest text-gold mb-2">Sree Sanjeev</h3>
          <p className="sanskrit-quote text-sm mb-3">अनुगच्चतु प्रवाहम्</p>
          <a href="mailto:maaaparajitamarg@gmail.com" className="font-body text-sm text-muted-foreground hover:text-gold transition-colors flex items-center gap-2 justify-center md:justify-start">
            <Mail size={14} /> maaaparajitamarg@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <a
            href="https://wa.me/919831304267?text=Hello%20Sree%20Sanjeev%2C%20I%20would%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <MessageCircle size={18} />
            WhatsApp Booking
          </a>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gold-subtle text-center">
        <p className="font-body text-xs text-muted-foreground mb-2">
          Astrology is a spiritual guidance tool. Results may vary from person to person.
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sree Sanjeev. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
