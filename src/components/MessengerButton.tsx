import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function MessengerButton() {
  return (
    <motion.a
      href="https://m.me/mangjosegraphics"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2 sm:bottom-8 sm:right-8"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className="sr-only">Chat with us on Messenger</span>
      <MessageCircle className="h-7 w-7" />
      
      {/* Notification dot */}
      <span className="absolute right-0 top-0 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
      </span>
    </motion.a>
  );
}
