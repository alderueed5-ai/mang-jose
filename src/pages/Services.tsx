import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, Paintbrush, Printer, Shirt, Zap } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const services = [
  {
    id: "jerseys",
    title: "Custom Jerseys",
    description: "High-quality, full-sublimation jerseys for basketball, esports, and corporate teams. We use premium fabrics that are breathable and durable.",
    icon: Shirt,
    color: "bg-orange-500",
    features: ["Full Sublimation", "Premium Fabric", "Custom Names & Numbers", "Free Layout Preview"],
    image: "https://picsum.photos/seed/jersey3/800/600",
  },
  {
    id: "tarpaulin",
    title: "Tarpaulin Printing",
    description: "Vibrant, durable tarpaulins for events, birthdays, and business promotions. Printed with high-resolution machines for crisp details.",
    icon: Printer,
    color: "bg-blue-500",
    features: ["High-Resolution Print", "Durable Material", "Fast Turnaround", "Any Size Available"],
    image: "https://picsum.photos/seed/tarp2/800/600",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Professional logos, layouts, and branding materials that make you stand out. Our designers work closely with you to bring your vision to life.",
    icon: Paintbrush,
    color: "bg-purple-500",
    features: ["Logo Design", "Social Media Graphics", "Brand Identity", "Unlimited Revisions (within reason)"],
    image: "https://picsum.photos/seed/design1/800/600",
  },
  {
    id: "business-materials",
    title: "Business Materials",
    description: "Flyers, IDs, business cards, and more. Fast turnaround for your business needs to keep your operations running smoothly.",
    icon: Zap,
    color: "bg-emerald-500",
    features: ["PVC ID Cards", "Business Cards", "Flyers & Brochures", "Stickers & Labels"],
    image: "https://picsum.photos/seed/business1/800/600",
  },
];

export function Services() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive printing and design solutions for Borongan City and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.color} text-white shadow-sm`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-8">
                    <Button size="lg" variant="messenger" className="gap-2" asChild>
                      <a href={`https://m.me/mangjosegraphics?text=Hi! I'm interested in your ${service.title} service.`} target="_blank" rel="noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        Inquire about {service.title}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
