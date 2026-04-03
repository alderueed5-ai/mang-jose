import { motion } from "motion/react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Contact() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get in touch for quotes, inquiries, or to start your next project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Let's Talk!</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The fastest way to reach us is through Facebook Messenger. We're online and ready to help you with your printing and design needs.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shrink-0">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Messenger</h3>
                    <p className="text-slate-600 mb-4">Fastest response time.</p>
                    <Button variant="messenger" asChild>
                      <a href="https://m.me/mangjosegraphics" target="_blank" rel="noreferrer">
                        Chat on Messenger
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shrink-0">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Our Shop</h3>
                    <p className="text-slate-600">
                      Real St., Brgy. Songco<br />
                      Borongan City, Eastern Samar<br />
                      6800 Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shrink-0">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Call or Text</h3>
                    <p className="text-slate-600">+63 912 345 6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 shrink-0">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                    <p className="text-slate-600">hello@mangjosegraphics.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      placeholder="0912 345 6789"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Needed</label>
                  <select
                    id="service"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="jerseys">Custom Jerseys</option>
                    <option value="tarpaulin">Tarpaulin Printing</option>
                    <option value="design">Graphic Design</option>
                    <option value="business">Business Materials</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message Details</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell us about your project, quantity, and deadline..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold">
                  Send Message
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  Or for faster response, <a href="https://m.me/mangjosegraphics" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">message us on Facebook</a>.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
