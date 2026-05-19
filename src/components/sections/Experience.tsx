import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Enterprise Solutions Manager & Architect",
    company: "Comline Auto Parts Ltd (UK, Spain and Greece)",
    period: "May 2025 – Present",
    type: "current",
    highlights: [
      "Acting as design authority across Finance and Supply Chain for enterprise D365 F&SCM programmes, including solution architecture, governance, and partner oversight.",
      "Leading full-cycle implementation delivery for the Greece subsidiary covering GL, AP, AR, procurement, inventory, and warehousing with planned go-live in 2026.",
      "Owning myDATA statutory compliance design using Electronic Reporting for audit-ready tax submission to AADE.",
      "Managing Azure DevOps ALM, release governance, Tier 1-5 environment strategy, and One Version readiness.",
      "Delivering senior stakeholder alignment, training readiness, and go-live adoption documentation across finance and operations teams.",
    ],
    tags: ["D365 F&SCM", "Solution Architecture", "myDATA", "ALM Governance", "Programme Leadership"],
  },
  {
    title: "ERP Systems Manager & Solution Architect",
    company: "Comline Auto Parts Ltd (UK & Europe)",
    period: "Oct 2017 – Apr 2025",
    type: "past",
    highlights: [
      "Delivered 3 full-cycle D365 F&SCM go-lives, including UK anchor implementation and two international rollouts delivered fully in-house.",
      "Configured core Finance and SCM capabilities including chart of accounts, AP/AR workflows, WMS, inventory, procurement, and planning optimisation.",
      "Owned DMF and Data Task Automation Framework migration activities: cleansing, mapping, trial loads, reconciliation, and cutover.",
      "Implemented UK MTD VAT and Spain SII compliance via Electronic Reporting and localisation configuration.",
      "Architected integrations with AutoStore, Sana Commerce, TecDoc/TecCom, Lasernet, and ExFlow/Axtension with measurable warehouse efficiency improvements.",
    ],
    tags: ["D365 F&SCM", "DMF Migration", "AutoStore", "Electronic Reporting", "In-House Delivery"],
  },
  {
    title: "Product Development Manager",
    company: "Comline Auto Parts Ltd",
    period: "Feb 2014 – Sep 2017",
    type: "past",
    highlights: [
      "Owned product data governance for large-scale automotive catalogues, improving classification consistency, quality, and catalogue integrity.",
      "Aligned product data operations with TecDoc European standards for robust cross-platform interoperability.",
      "Built strong foundations in data stewardship, operations leadership, and platform administration.",
    ],
    tags: ["Product Data Governance", "Catalogue Integrity", "TecDoc Standards", "Operations Leadership"],
  },
];

const featuredProjects = [
  {
    title: "Greece D365 F&SCM Implementation",
    year: "2025–2026",
    desc: "Full in-house implementation covering GL, AP, AR, procurement, inventory, warehousing, and Greece myDATA statutory compliance.",
    tags: ["Finance", "SCM", "myDATA", "Go-Live 2026"],
    color: "indigo",
  },
  {
    title: "Spain D365 F&SCM Rollout",
    year: "2020–2022",
    desc: "Multi-entity rollout across finance and supply chain with Spain SII VAT compliance through Electronic Reporting.",
    tags: ["Multi-Entity", "SII", "Electronic Reporting", "In-House"],
    color: "purple",
  },
  {
    title: "UK D365 F&SCM Go-Live",
    year: "2018–2019",
    desc: "Anchor implementation establishing enterprise D365 platform with configured and tested P2P, O2C, I2D, and R2R processes.",
    tags: ["P2P", "O2C", "I2D", "R2R"],
    color: "blue",
  },
  {
    title: "AutoStore WMS Integration",
    year: "2023",
    desc: "Architected real-time D365 WMS integration with AutoStore material handling, improving warehouse fulfilment efficiency by approximately 30%.",
    tags: ["AutoStore", "WMS", "Real-Time Integration", "+30% Efficiency"],
    color: "emerald",
  },
];

const colorMap: Record<string, string> = {
  indigo: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400",
  purple: "border-purple-500/30 bg-purple-500/5 text-purple-400",
  blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  emerald: "border-emerald-500/30 bg-emerald-500/5 text-emerald-400",
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-[#040d1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Career Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Experience
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-20">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full hidden md:flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full border-2 ${exp.type === "current" ? "bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/50" : "bg-slate-700 border-slate-600"}`} />
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={16} className="text-indigo-400 flex-shrink-0" />
                        <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                        {exp.type === "current" && (
                          <span className="text-xs bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-400 font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm whitespace-nowrap">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2 text-slate-400 text-sm">
                        <ChevronRight size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-800 text-slate-400 border border-slate-700/50 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Strategic Programmes */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-2xl font-bold text-white text-center mb-10"
        >
          Key Programmes & Implementations
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.12 }}
              className={`border rounded-2xl p-6 transition-all hover:-translate-y-1 ${colorMap[proj.color]}`}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-bold text-base leading-tight max-w-[80%]">{proj.title}</h4>
                <span className="text-xs font-semibold opacity-75 whitespace-nowrap ml-2">{proj.year}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-800/60 text-slate-400 border border-slate-700/50 px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
