import { motion } from "framer-motion";
import { Mail, Instagram, Youtube } from "lucide-react";

const FooterSection = () => (
  <footer className="relative py-16 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's Create Something <span className="text-gradient">Amazing</span>
        </h2>
        <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
          Ready to bring your vision to life? Let's talk about your next project.
        </p>
        <a
          href="mailto:hello@framecut.studio"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-primary"
        >
          <Mail size={18} /> Get In Touch
        </a>

        <div className="flex items-center justify-center gap-6 mt-10">
          {[Instagram, Youtube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="mt-10 text-xs font-body text-muted-foreground">
          © 2026 FRAMECUT Studio. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default FooterSection;
