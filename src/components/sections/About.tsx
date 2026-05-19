import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Brain, Shield, Layers } from "lucide-react";

const capabilities = [
  {
    icon: Layers,
    title: "D365 Finance Functional Leadership",
    description:
      "Delivering GL, AP, AR, Fixed Assets, Cash & Bank, Budgeting, Tax, and Project Accounting across multi-entity and multi-currency operations.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Building2,
    title: "Supply Chain & Warehousing Delivery",
    description:
      "Configuring WMS, inventory, procurement, planning optimisation, and sales processes for high-volume distribution environments.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "End-to-End Implementation & Migration",
    description:
      "Owning full-cycle delivery from workshops and FDDs to DMF migration, UAT, cutover, reconciliation, and hypercare.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Compliance, Integrations & Governance",
    description:
      "Implementing UK MTD VAT, Spain SII, and Greece myDATA compliance with Electronic Reporting and enterprise integration governance.",
    color: "from-emerald-500 to-teal-500",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "150+", label: "Published Articles" },
  { value: "3/3", label: "D365 Go-Lives Delivered" },
  { value: "SC", label: "Clearance Eligible" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[#040d1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 mb-4">
            Executive{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Summary
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="text-slate-300 text-lg leading-relaxed">
            Senior D365 F&O Functional Consultant and Solution Architect with{" "}
            <span className="text-indigo-400 font-semibold">10+ years of experience</span> delivering enterprise
            Finance and Supply Chain programmes across the UK, Spain, and Greece.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mt-4">
            Track record includes full-cycle implementations, in-house international rollouts, data migration,
            statutory compliance, and partner governance. Published 150+ professional articles at{" "}
            <a
              href="https://aipowered365.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
            >
              AIpowered365.com
            </a>
            , focused on D365, Power Platform, enterprise architecture, and AI governance.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-colors group"
            >
              <div className="text-3xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-1 group-hover:from-indigo-300 group-hover:to-purple-300 transition-all">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Capabilities */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold text-white text-center mb-10"
        >
          Core Functional Capabilities
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.12 }}
              className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-indigo-500/30 transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <cap.icon size={22} className="text-white" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">{cap.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
