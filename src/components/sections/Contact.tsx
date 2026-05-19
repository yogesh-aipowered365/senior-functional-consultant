import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "netrang_yog_patel@yahoo.com",
    href: "mailto:netrang_yog_patel@yahoo.com",
    color: "indigo",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "07446 893391",
    href: "tel:07446893391",
    color: "purple",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "yogeshkumar-patel-568365127",
    href: "https://www.linkedin.com/in/yogeshkumar-patel-568365127",
    color: "blue",
  },
  {
    icon: Globe,
    label: "Thought Leadership",
    value: "aipowered365.com",
    href: "https://aipowered365.com",
    color: "emerald",
  },
  {
    icon: Globe,
    label: "GitHub",
    value: "yogesh-aipowered365",
    href: "https://github.com/yogesh-aipowered365",
    color: "indigo",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Luton, UK · Open to Hybrid/Remote",
    href: "#",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; valueHover: string }> = {
  indigo: { bg: "from-indigo-600 to-indigo-400", icon: "text-indigo-400", border: "hover:border-indigo-500/40", valueHover: "group-hover:text-indigo-400" },
  purple: { bg: "from-purple-600 to-purple-400", icon: "text-purple-400", border: "hover:border-purple-500/40", valueHover: "group-hover:text-purple-400" },
  blue: { bg: "from-blue-600 to-cyan-400", icon: "text-blue-400", border: "hover:border-blue-500/40", valueHover: "group-hover:text-blue-400" },
  emerald: { bg: "from-emerald-600 to-teal-400", icon: "text-emerald-400", border: "hover:border-emerald-500/40", valueHover: "group-hover:text-emerald-400" },
  pink: { bg: "from-pink-600 to-rose-400", icon: "text-pink-400", border: "hover:border-pink-500/40", valueHover: "group-hover:text-pink-400" },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(99,102,241,0.1),transparent)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-t from-indigo-500/50 to-transparent" />

      <div ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Let's{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Connect
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open to senior D365 F&O Functional Consultant and Solution Architect roles across Finance and
            Supply Chain programmes in the UK and Europe.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {contactLinks.map((item, i) => {
            const styles = colorMap[item.color] || colorMap.indigo;
            const isLocation = item.href === "#";
            const Wrapper = isLocation ? "div" : "a";
            const props = isLocation
              ? {}
              : { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" };

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  {...props}
                  className={`group flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5 transition-all hover:-translate-y-1 ${styles.border} ${!isLocation ? "cursor-pointer" : ""}`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${styles.bg} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon size={18} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className={`text-sm font-semibold truncate transition-colors ${styles.valueHover} ${isLocation ? "text-slate-300" : "text-white"}`}>
                      {item.value}
                    </div>
                  </div>
                  {!isLocation && (
                    <Send size={14} className={`ml-auto flex-shrink-0 ${styles.icon} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 border border-indigo-500/20 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
              Notice Period: <span className="text-indigo-400">3 Months</span>
            </h3>
            <p className="text-slate-400 mb-6">
              British Citizen · UK Resident · Right to Work: UK · Open to Hybrid/Remote
            </p>
            <a
              href="mailto:netrang_yog_patel@yahoo.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 text-lg"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-slate-600 text-sm mt-12"
        >
          © {new Date().getFullYear()} Yogeshkumar Patel · D365 F&O Senior Functional Consultant · Built with React, Framer Motion &amp; Tailwind CSS
        </motion.p>
      </div>
    </section>
  );
}
