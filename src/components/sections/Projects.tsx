import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, Users, Globe, Mic } from "lucide-react";

const projects = [
  {
    title: "AIpowered365.com",
    subtitle: "Thought Leadership Platform",
    description:
      "Founder and author of a specialist platform with 150+ published articles on D365, Power Platform, enterprise architecture, and AI governance.",
    icon: Globe,
    link: "https://aipowered365.com",
    tags: ["Dynamics 365", "Power Platform", "Architecture", "AI Governance", "Community"],
    color: "indigo",
    stats: [{ label: "Articles", value: "150+" }, { label: "Focus", value: "D365 + AI" }],
  },
  {
    title: "Greece D365 F&SCM Implementation",
    subtitle: "2025-2026 | Active Programme",
    description:
      "Architecting and delivering full D365 F&SCM implementation for the Greece subsidiary across Finance and SCM, including statutory myDATA compliance design.",
    icon: FileText,
    tags: ["GL/AP/AR", "Procurement", "Warehousing", "myDATA"],
    color: "purple",
    stats: [{ label: "Scope", value: "Subsidiary" }, { label: "Status", value: "In Progress" }],
  },
  {
    title: "Spain D365 F&SCM Rollout",
    subtitle: "2020-2022 | International Rollout",
    description:
      "Delivered multi-entity rollout covering full finance and supply chain with Spain SII real-time VAT reporting through Electronic Reporting.",
    icon: Globe,
    tags: ["Finance", "Supply Chain", "SII", "Electronic Reporting"],
    color: "blue",
    stats: [{ label: "Delivery", value: "In-House" }, { label: "Outcome", value: "Go-Live" }],
  },
  {
    title: "UK D365 F&SCM Go-Live",
    subtitle: "2018-2019 | Anchor Implementation",
    description:
      "Established enterprise D365 platform with configured and tested P2P, O2C, I2D, and R2R processes to support core UK operations.",
    icon: Mic,
    tags: ["P2P", "O2C", "I2D", "R2R"],
    color: "emerald",
    stats: [{ label: "Role", value: "Delivery Lead" }, { label: "Outcome", value: "Enterprise Baseline" }],
  },
  {
    title: "AutoStore Warehouse Integration",
    subtitle: "2023 | Real-Time ERP Integration",
    description:
      "Architected real-time integration between D365 WMS and AutoStore automation to improve warehouse fulfilment efficiency by approximately 30%.",
    icon: Users,
    tags: ["AutoStore", "D365 WMS", "Real-Time", "Fulfilment"],
    color: "violet",
    stats: [{ label: "Outcome", value: "+30% Efficiency" }, { label: "Mode", value: "Real-Time" }],
  },
  {
    title: "AI and Copilot Governance Programme",
    subtitle: "2025 | Enterprise Governance",
    description:
      "Designed AI-ready architecture and Microsoft Purview governance model supporting secure Copilot and AI adoption across M365 and D365.",
    icon: Users,
    tags: ["Purview", "Copilot", "AI Governance", "Enterprise Controls"],
    color: "pink",
    stats: [{ label: "Scope", value: "M365 + D365" }, { label: "Status", value: "Implemented" }],
  },
];

const colorStyles: Record<string, { border: string; badge: string; icon: string; stat: string }> = {
  indigo: { border: "hover:border-indigo-500/40", badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", icon: "from-indigo-600 to-indigo-400", stat: "text-indigo-400" },
  purple: { border: "hover:border-purple-500/40", badge: "bg-purple-500/10 text-purple-400 border-purple-500/20", icon: "from-purple-600 to-purple-400", stat: "text-purple-400" },
  blue: { border: "hover:border-blue-500/40", badge: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: "from-blue-600 to-cyan-400", stat: "text-blue-400" },
  emerald: { border: "hover:border-emerald-500/40", badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", icon: "from-emerald-600 to-teal-400", stat: "text-emerald-400" },
  violet: { border: "hover:border-violet-500/40", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", icon: "from-violet-600 to-purple-400", stat: "text-violet-400" },
  pink: { border: "hover:border-pink-500/40", badge: "bg-pink-500/10 text-pink-400 border-pink-500/20", icon: "from-pink-600 to-rose-400", stat: "text-pink-400" },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-[#040d1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Programmes &amp;{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Contributions
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => {
            const styles = colorStyles[proj.color] || colorStyles.indigo;
            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1 ${styles.border}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${styles.icon} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <proj.icon size={20} className="text-white" />
                  </div>
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-white font-bold text-base mb-0.5">{proj.title}</h3>
                <p className={`text-xs font-semibold mb-3 ${styles.stat}`}>{proj.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{proj.description}</p>

                {/* Stats row */}
                <div className="flex gap-4 mb-4">
                  {proj.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <div className={`text-sm font-bold ${styles.stat}`}>{s.value}</div>
                      <div className="text-slate-600 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span key={tag} className={`text-xs border px-2 py-0.5 rounded-full ${styles.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
