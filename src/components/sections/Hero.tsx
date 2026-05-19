import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowDown, MapPin, Mail, Phone, Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import profileImg from "@/assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* Sparkles background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#818cf8"
          speed={0.8}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.15),rgba(255,255,255,0))]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-75 animate-pulse" />
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-indigo-500/30">
                <img
                  src={profileImg}
                  alt="Yogeshkumar Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
                SC Clearance Eligible
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
                D365 F&O Senior Functional Consultant
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4"
            >
              Yogeshkumar{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Patel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-400 font-medium mb-6 max-w-2xl"
            >
              Dynamics 365 Finance & Operations · Finance · Supply Chain · Enterprise Delivery
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-slate-500 text-base max-w-xl mb-8 leading-relaxed"
            >
              Senior D365 F&O Functional Consultant and Solution Architect with 10+ years delivering full-cycle
              Finance and Supply Chain implementations across the UK and Europe, including multi-entity,
              multi-country rollouts, data migration, integrations, and statutory compliance.
            </motion.p>

            {/* Contact Info Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-indigo-400" /> Luton, UK
              </span>
              <a href="mailto:netrang_yog_patel@yahoo.com" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                <Mail size={14} className="text-indigo-400" /> netrang_yog_patel@yahoo.com
              </a>
              <a href="tel:07446893391" className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
                <Phone size={14} className="text-indigo-400" /> 07446 893391
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="https://www.linkedin.com/in/yogeshkumar-patel-568365127"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a
                href="https://aipowered365.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 backdrop-blur-sm text-white font-semibold rounded-xl border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-700/60 transition-all hover:-translate-y-0.5"
              >
                <Globe size={18} /> AIpowered365.com
              </a>
              <a
                href="https://github.com/yogesh-aipowered365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 backdrop-blur-sm text-white font-semibold rounded-xl border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-700/60 transition-all hover:-translate-y-0.5"
              >
                <Globe size={18} /> GitHub
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/60 backdrop-blur-sm text-white font-semibold rounded-xl border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-700/60 transition-all hover:-translate-y-0.5"
              >
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-indigo-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
