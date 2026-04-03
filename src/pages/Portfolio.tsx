import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";

const categories = ["All", "Jerseys", "Tarpaulins", "Logos", "Business"];

const portfolioItems = [
  { id: 1, category: "Jerseys", src: "https://picsum.photos/seed/jersey1/800/800", alt: "Basketball Team Uniforms" },
  { id: 2, category: "Jerseys", src: "https://picsum.photos/seed/jersey2/800/800", alt: "Esports Gaming Jersey" },
  { id: 3, category: "Tarpaulins", src: "https://picsum.photos/seed/tarp1/800/800", alt: "Birthday Tarpaulin" },
  { id: 4, category: "Tarpaulins", src: "https://picsum.photos/seed/tarp2/800/800", alt: "Event Backdrop" },
  { id: 5, category: "Logos", src: "https://picsum.photos/seed/logo1/800/800", alt: "Cafe Logo Design" },
  { id: 6, category: "Logos", src: "https://picsum.photos/seed/logo2/800/800", alt: "Tech Startup Branding" },
  { id: 7, category: "Business", src: "https://picsum.photos/seed/id1/800/800", alt: "Corporate ID Cards" },
  { id: 8, category: "Business", src: "https://picsum.photos/seed/flyer1/800/800", alt: "Promotional Flyers" },
  { id: 9, category: "Jerseys", src: "https://picsum.photos/seed/jersey3/800/800", alt: "Volleyball Uniforms" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Our Portfolio</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A showcase of our recent printing and design projects in Borongan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-6"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <p className="text-white font-medium text-lg">{item.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
