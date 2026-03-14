import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

const categories = ["All", "Weddings", "Reels", "Documentaries", "Promotions"];

const projects = [
  {
    title: "A Love Story in Tuscany",
    category: "Weddings",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Cinematic wedding film shot across Italian countryside",
  },
  {
    title: "Urban Flow",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Fast-paced social media reel for a fashion brand",
  },
  {
    title: "Voices of the Amazon",
    category: "Documentaries",
    thumbnail: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Award-winning documentary about indigenous communities",
  },
  {
    title: "TechNova Launch",
    category: "Promotions",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Product launch video for a tech startup",
  },
  {
    title: "Forever Begins",
    category: "Weddings",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Intimate beach wedding ceremony highlight",
  },
  {
    title: "Street Culture",
    category: "Reels",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    description: "Viral reel for a streetwear brand launch",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.2em] uppercase text-primary mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Selected <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-body font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setPlayingVideo(project.video)}
                    className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <Play size={22} />
                  </button>
                </div>
                <span className="absolute top-3 left-3 text-xs font-body font-medium bg-primary/80 text-primary-foreground px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {playingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-6"
          onClick={() => setPlayingVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
            >
              <X size={28} />
            </button>
            <video
              src={playingVideo}
              controls
              autoPlay
              className="w-full rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
