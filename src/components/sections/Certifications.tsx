import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, BookOpen, Trophy } from "lucide-react";

const certs = [
  { name: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft Certified", level: "Associate", color: "indigo" },
  { name: "D365 Finance & Operations Solution Architect Expert (MB-700)", issuer: "Microsoft Certified", level: "Expert", color: "violet" },
  { name: "Power Platform Solution Architect Expert (PL-600)", issuer: "Microsoft Certified", level: "Expert", color: "purple" },
  { name: "Information Security Administrator Associate (SC-401)", issuer: "Microsoft Certified", level: "Associate", color: "blue" },
  { name: "Microsoft Fabric Analyst (Partner Certified)", issuer: "Partner Certified", level: "Partner", color: "amber" },
  { name: "D365 Finance Functional Consultant Associate (MB-300)", issuer: "Microsoft Certified", level: "Associate", color: "cyan" },
  { name: "Power Platform Functional Consultant Associate (PL-200)", issuer: "Microsoft Certified", level: "Associate", color: "teal" },
  { name: "AI Engineering & Agentic Systems", issuer: "Professional Certification", level: "Professional", color: "orange" },
  { name: "Generative AI Mastermind", issuer: "Outskill Certified", level: "Professional", color: "pink" },
];

const education = [
  {
    degree: "Master's in Computer Science",
    institution: "University of Bedfordshire, UK",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Veer Narmad South Gujarat University, India",
    icon: GraduationCap,
  },
];

const levelColorMap: Record<string, string> = {
  Expert: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Associate: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  Fundamental: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Professional: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  Specialization: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  Partner: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

const cardColorMap: Record<string, string> = {
  indigo: "hover:border-indigo-500/40 group-hover:from-indigo-500/10",
  purple: "hover:border-purple-500/40 group-hover:from-purple-500/10",
  pink: "hover:border-pink-500/40 group-hover:from-pink-500/10",
  violet: "hover:border-violet-500/40 group-hover:from-violet-500/10",
  blue: "hover:border-blue-500/40 group-hover:from-blue-500/10",
  cyan: "hover:border-cyan-500/40 group-hover:from-cyan-500/10",
  teal: "hover:border-teal-500/40 group-hover:from-teal-500/10",
  emerald: "hover:border-emerald-500/40 group-hover:from-emerald-500/10",
  green: "hover:border-green-500/40 group-hover:from-green-500/10",
  amber: "hover:border-amber-500/40 group-hover:from-amber-500/10",
  orange: "hover:border-orange-500/40 group-hover:from-orange-500/10",
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Credentials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Certifications &amp;{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Education
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Microsoft Learn Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <div className="flex items-center gap-3 bg-slate-900/60 border border-indigo-500/20 rounded-xl px-6 py-4">
            <Trophy size={24} className="text-amber-400" />
            <div>
              <div className="text-white font-bold text-lg">140+ Badges</div>
              <div className="text-slate-500 text-sm">Microsoft Learn</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/60 border border-purple-500/20 rounded-xl px-6 py-4">
            <Award size={24} className="text-purple-400" />
            <div>
              <div className="text-white font-bold text-lg">20+ Trophies</div>
              <div className="text-slate-500 text-sm">Microsoft Learn</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-900/60 border border-blue-500/20 rounded-xl px-6 py-4">
            <BookOpen size={24} className="text-blue-400" />
            <div>
              <div className="text-white font-bold text-lg">150+ Articles</div>
              <div className="text-slate-500 text-sm">AIpowered365.com</div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
              className={`group bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 transition-all hover:-translate-y-1 ${cardColorMap[cert.color] || ""}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award size={18} className="text-indigo-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm leading-snug mb-1.5">{cert.name}</p>
                  <p className="text-slate-500 text-xs mb-2">{cert.issuer}</p>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border ${levelColorMap[cert.level] || ""}`}>
                    {cert.level}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-2xl font-bold text-white text-center mb-8"
        >
          Education
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 + i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                <edu.icon size={26} className="text-white" />
              </div>
              <h4 className="text-white font-bold text-base mb-1">{edu.degree}</h4>
              <p className="text-slate-400 text-sm">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
