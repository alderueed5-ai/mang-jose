import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MessageCircle, Paintbrush, Printer, Shirt, Star, Zap } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const services = [
  {
    title: "Custom Jerseys",
    description: "High-quality, full-sublimation jerseys for basketball, esports, and corporate teams.",
    icon: Shirt,
    color: "bg-orange-500",
  },
  {
    title: "Tarpaulin Printing",
    description: "Vibrant, durable tarpaulins for events, birthdays, and business promotions.",
    icon: Printer,
    color: "bg-blue-500",
  },
  {
    title: "Graphic Design",
    description: "Professional logos, layouts, and branding materials that make you stand out.",
    icon: Paintbrush,
    color: "bg-purple-500",
  },
  {
    title: "Business Materials",
    description: "Flyers, IDs, business cards, and more. Fast turnaround for your business needs.",
    icon: Zap,
    color: "bg-emerald-500",
  },
];

const portfolio = [
  { id: 1, src: "https://picsum.photos/seed/jersey1/600/600", alt: "Custom Basketball Jersey" },
  { id: 2, src: "https://picsum.photos/seed/tarp1/600/600", alt: "Event Tarpaulin" },
  { id: 3, src: "https://picsum.photos/seed/logo1/600/600", alt: "Business Logo Design" },
  { id: 4, src: "https://picsum.photos/seed/id1/600/600", alt: "Corporate ID Cards" },
  { id: 5, src: "https://picsum.photos/seed/flyer1/600/600", alt: "Promotional Flyers" },
  { id: 6, src: "https://picsum.photos/seed/jersey2/600/600", alt: "Esports Team Jersey" },
];

const testimonials = [
  {
    name: "Mark D.",
    role: "Local Basketball Team Captain",
    text: "The jerseys we ordered were top-notch! The colors are vibrant and the fabric is very comfortable. Fast delivery too!",
  },
  {
    name: "Sarah J.",
    role: "Event Organizer",
    text: "Mang Jose Graphics always delivers on time. Their tarpaulins are high quality and the layout service is a lifesaver.",
  },
  {
    name: "Juan P.",
    role: "Small Business Owner",
    text: "Got my business cards and flyers printed here. Very professional and the free layout preview really helped me decide.",
  },
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-32 lg:pt-36 lg:pb-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/printing/1920/1080?blur=4"
            alt="Printing Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 border border-blue-500/30">
                Borongan's #1 Print & Design Shop
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Bring Your Ideas to Life. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Fast & High Quality.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                From custom jerseys to vibrant tarpaulins and professional graphic design. We help students, teams, and businesses in Borongan stand out.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="messenger" className="text-base font-semibold gap-2" asChild>
                  <a href="https://m.me/mangjosegraphics" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Get a Free Quote
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>Free Layout Preview</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything You Need to Stand Out</h2>
            <p className="mt-4 text-lg text-slate-600">
              We offer a wide range of printing and design services tailored for your specific needs.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className={`h-12 w-12 rounded-xl ${service.color} text-white flex items-center justify-center mb-6`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Recent Projects</h2>
              <p className="mt-4 text-lg text-slate-600">
                Take a look at some of our recent work for clients around Borongan.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/portfolio">View Full Gallery</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-lg">{item.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted by Locals</h2>
            <p className="mt-4 text-lg text-slate-400">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl p-8 relative"
              >
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-8 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] bg-cover mix-blend-overlay"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Message us today on Messenger for a free quote and layout preview. We respond fast!
          </p>
          <Button size="lg" variant="secondary" className="text-blue-600 font-bold text-lg h-14 px-8 shadow-xl hover:bg-white hover:scale-105 transition-all" asChild>
            <a href="https://m.me/mangjosegraphics" target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Chat with Mang Jose Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
