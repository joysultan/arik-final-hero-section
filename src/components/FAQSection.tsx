import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of video projects do you work on?",
    a: "I specialize in wedding films, social media reels, documentaries, and promotional videos. Each project is approached with a unique creative vision tailored to the client's needs and brand identity.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "Turnaround depends on project scope. Reels are typically delivered within 3-5 business days, while wedding films and documentaries can take 4-8 weeks for a polished final cut.",
  },
  {
    q: "What software do you use for editing?",
    a: "My primary tools include DaVinci Resolve for color grading, Adobe Premiere Pro for editing, and After Effects for motion graphics. I also use Audition for audio post-production.",
  },
  {
    q: "Do you offer revision rounds?",
    a: "Yes! Every project includes two rounds of revisions. Additional revision rounds can be arranged. I work closely with clients to ensure the final product exceeds expectations.",
  },
  {
    q: "How do we get started on a project?",
    a: "Simply reach out through the contact form or email. We'll schedule a discovery call to discuss your vision, timeline, and budget. From there, I'll provide a detailed proposal.",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-display text-base md:text-lg font-semibold pr-4">{faq.q}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 font-body text-muted-foreground leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        {isInView && (
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
