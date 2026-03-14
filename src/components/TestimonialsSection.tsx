import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James",
    role: "Wedding Clients",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "Our wedding film was absolutely breathtaking. Every emotion, every detail was captured with such artistry. We've watched it a hundred times and still cry happy tears.",
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director, TechNova",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "The promotional video exceeded all expectations. Our launch campaign saw a 300% increase in engagement. The cinematic quality made our product feel premium.",
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Documentary Producer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Working on our Amazon documentary was a complex challenge, but the editing brought such nuance to the storytelling. It earned us two festival selections.",
  },
  {
    name: "Aisha Patel",
    role: "Fashion Brand Owner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    text: "Our Instagram reels went viral after the collaboration. The pacing, transitions, and music sync were perfect. Our followers doubled in just two months.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Client <span className="text-gradient">Reviews</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative">
            <Quote size={40} className="text-primary/20 absolute top-6 left-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="font-body text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full mx-auto mb-3 object-cover border-2 border-primary/30"
                />
                <div className="font-display text-lg font-semibold">{testimonials[current].name}</div>
                <div className="text-sm font-body text-muted-foreground">{testimonials[current].role}</div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
