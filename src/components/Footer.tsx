import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone, Printer } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white">
              <Printer className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight">
                Mang Jose <span className="text-blue-500">Graphics</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Your trusted local partner for high-quality printing and graphic design in Borongan, Eastern Samar. Fast turnaround, premium quality.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-blue-400">Custom Jerseys</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">Tarpaulin Printing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">Graphic Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">Business Materials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/portfolio" className="hover:text-blue-400">Our Work</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-500" />
                <span>Real St., Brgy. Songco, Borongan City, Eastern Samar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                <span>+63 912 345 6789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                <span>hello@mangjosegraphics.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Mang Jose Graphics Borongan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
