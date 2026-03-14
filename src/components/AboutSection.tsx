import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Award, Clock, Users } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { icon: Film, label: "Projects", value: "200+" },
  { icon: Award, label: "Awards", value: "15" },
  { icon: Clock, label: "Years Exp.", value: "8+" },
  { icon: Users, label: "Clients", value: "120+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img
                src={profileImg}
                alt="Video Editor Portrait"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border border-primary/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-3">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passion Meets <span className="text-gradient">Precision</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              I'm a professional video editor with over 8 years of experience crafting
              visual stories that captivate and inspire. From cinematic wedding films to
              high-energy promotional videos, I bring a meticulous eye for detail and a
              deep understanding of storytelling.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              My workflow combines technical expertise in DaVinci Resolve, Premiere Pro,
              and After Effects with an artistic vision that ensures every frame serves
              the narrative. I believe great editing is invisible — it simply feels right.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon size={20} className="mx-auto mb-2 text-primary" />
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs font-body text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
