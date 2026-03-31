import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Play, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(false);
  const introLetters = "FRAMECUT".split("");

  useEffect(() => {
    setShowIntro(true);
    const timer = window.setTimeout(() => setShowIntro(false), 2800);
    return () => window.clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 pointer-events-none"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="px-6 text-center">
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gradient text-3d-cinematic"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                  exit: {
                    opacity: 0,
                    y: -46,
                    transition: { duration: 0.45, ease: "easeInOut" },
                  },
                }}
                style={{ transformPerspective: 1200 }}
              >
                {introLetters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 70, rotateX: -85, filter: "blur(6px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h2>

              <motion.p
                className="mt-4 font-body text-xs md:text-sm tracking-[0.45em] uppercase text-foreground/80"
                initial={{ opacity: 0, y: 16, letterSpacing: "0.8em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.45em" }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              >
                Cinematic Motion Design
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated immersive background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animated-gradient-bg opacity-95" />
        <div className="absolute inset-0 bg-background/35" />
        <motion.div
          className="absolute inset-0 hero-grid-overlay"
          animate={{ opacity: [0.2, 0.36, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${220 + i * 110}px`,
              height: `${220 + i * 110}px`,
              top: `${10 + i * 18}%`,
              left: `${i % 2 === 0 ? 8 + i * 8 : 58 - i * 6}%`,
              background:
                i % 2 === 0
                  ? "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, hsl(var(--primary) / 0) 70%)"
                  : "radial-gradient(circle, hsl(var(--accent) / 0.22) 0%, hsl(var(--accent) / 0) 72%)",
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -28, 22, 0],
              scale: [1, 1.12, 0.94, 1],
            }}
            transition={{
              duration: 14 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          />
        ))}
      </div>

      {/* Floating particles/bokeh */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/35"
          style={{
            width: `${4 + (i % 4) * 2}px`,
            height: `${4 + (i % 4) * 2}px`,
            top: `${10 + i * 8}%`,
            left: `${5 + i * 9}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 12, -8, 0],
            opacity: [0.15, 0.65, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.25,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base font-body tracking-[0.35em] uppercase text-primary mb-6"
        >
          Cinematic Video Editor
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Shadows. Rhythm.
          <br />
          <span className="text-gradient">Stories That Pulse.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          I sculpt motion into emotion — high-impact wedding films, reels,
          documentaries, and brand promotions with bold pacing and premium polish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold text-base hover:opacity-90 transition-all duration-300 glow-primary hover:scale-105"
          >
            <Play size={18} /> View My Work
          </button>
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 rounded-full glass px-8 py-4 text-foreground font-semibold text-base hover:border-primary/50 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
