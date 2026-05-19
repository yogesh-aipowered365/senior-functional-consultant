import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "D365 Finance Modules",
    color: "indigo",
    skills: [
      { name: "General Ledger (GL)", level: 95 },
      { name: "Accounts Payable / Receivable (AP/AR)", level: 94 },
      { name: "Fixed Assets, Cash and Bank", level: 92 },
      { name: "Budgeting and Project Accounting", level: 90 },
      { name: "Tax and Regulatory Reporting", level: 91 },
    ],
  },
  {
    category: "D365 SCM Modules",
    color: "purple",
    skills: [
      { name: "WMS and Inventory Management", level: 95 },
      { name: "Procurement and Sourcing", level: 93 },
      { name: "Product Information Management (PIM)", level: 91 },
      { name: "Sales and Marketing", level: 89 },
      { name: "Master Planning / Planning Optimisation", level: 92 },
    ],
  },
  {
    category: "Delivery, Migration and ALM",
    color: "blue",
    skills: [
      { name: "Full-Cycle D365 Implementations", level: 96 },
      { name: "FDDs, Workshops and Process Mapping", level: 93 },
      { name: "DMF and Data Task Automation Framework", level: 94 },
      { name: "UAT, Cutover and Hypercare", level: 92 },
      { name: "LCS, Azure DevOps, One Version", level: 91 },
    ],
  },
  {
    category: "Integration, Reporting and Compliance",
    color: "emerald",
    skills: [
      { name: "AutoStore, Sana, TecDoc/TecCom Integrations", level: 92 },
      { name: "Lasernet and ExFlow/Axtension", level: 90 },
      { name: "SSRS, Power BI, Microsoft Fabric", level: 89 },
      { name: "UK MTD VAT, Spain SII, Greece myDATA", level: 93 },
      { name: "Security Roles and Segregation of Duties", level: 90 },
    ],
  },
];

const colorMap: Record<string, { bar: string; badge: string; glow: string }> = {
  indigo: {
    bar: "from-indigo-600 to-indigo-400",
    badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    glow: "shadow-indigo-500/20",
  },
  purple: {
    bar: "from-purple-600 to-purple-400",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    glow: "shadow-purple-500/20",
  },
  blue: {
    bar: "from-blue-600 to-cyan-400",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    glow: "shadow-blue-500/20",
  },
  emerald: {
    bar: "from-emerald-600 to-teal-400",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    glow: "shadow-emerald-500/20",
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/3 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Technical Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Skills &amp;{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Technologies
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => {
            const colors = colorMap[group.color];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.15 }}
                className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors shadow-xl ${colors.glow}`}
              >
                <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-6 ${colors.badge}`}>
                  {group.category}
                </span>
                <div className="space-y-5">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: gi * 0.15 + si * 0.08, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${colors.bar} rounded-full`}
                        />
                      </div>
                    </div>
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
