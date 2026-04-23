import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github, Mail, Linkedin, Cloud, ExternalLink, ChevronDown,
  Server, Brain, Code2, Rocket, ArrowRight, Container,
  GitBranch, Shield, Activity, MessageSquare, BarChart3,
  Download, MapPin, BadgeCheck, Terminal, Layers
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const projects = [
  // DEVOPS
  {
    title: 'AKS E-Commerce Platform',
    description: 'Production-grade e-commerce platform on Azure Kubernetes Service with multi-container architecture, Helm charts, and full CI/CD via Azure DevOps. Praised by mentor as a reference project for other engineers.',
    github: 'https://github.com/amna-hashim-tech/aks-ecommerce-platform',
    tech: ['Kubernetes', 'AKS', 'Docker', 'Helm', 'Azure DevOps', 'CI/CD'],
    category: 'DevOps',
    icon: Container,
    highlight: true,
  },
  {
    title: 'Terraform Secure Multi-Tier Web App',
    description: 'Infrastructure-as-Code project provisioning a secure multi-tier Azure environment using Terraform modules, remote state, workspaces, and for_each loops.',
    github: 'https://github.com/amna-hashim-tech/terraform-secure-web-app',
    tech: ['Terraform', 'Azure', 'IaC', 'Remote State', 'Modules'],
    category: 'DevOps',
    icon: Shield,
  },
  {
    title: 'Jenkins CI/CD Pipeline Demo',
    description: 'End-to-end CI/CD pipeline on DigitalOcean with Jenkins, featuring automated build, test, and deployment stages with GitHub webhook triggers.',
    github: 'https://github.com/amna-hashim-tech/jenkins-cicd-demo',
    tech: ['Jenkins', 'CI/CD', 'DigitalOcean', 'Docker', 'GitHub Webhooks'],
    category: 'DevOps',
    icon: GitBranch,
  },
  {
    title: 'E-Commerce Status Dashboard',
    description: 'Real-time service health dashboard monitoring API uptime, database health, and infrastructure metrics across a multi-service e-commerce platform on Azure.',
    github: 'https://github.com/amna-hashim-tech/ecommerce-status-dashboard',
    tech: ['Azure', 'Node.js', 'Monitoring', 'REST APIs', 'DevOps'],
    category: 'DevOps',
    icon: BarChart3,
  },
  // AI
  {
    title: 'Smart Infrastructure Advisor',
    description: 'AI-powered infrastructure recommendation engine built with FastAPI and the Claude API. Analyses cloud workloads and suggests optimal Azure architecture. Deployed live on Vercel.',
    github: 'https://github.com/amna-hashim-tech/smart-infrastructure-advisor',
    demo: 'https://smart-infrastructure-advisor.vercel.app',
    tech: ['FastAPI', 'Claude API', 'Python', 'Vercel', 'Azure'],
    category: 'AI',
    icon: Brain,
    highlight: true,
  },
  {
    title: 'Real-Time Azure Infrastructure Monitor',
    description: 'Live monitoring dashboard built with Streamlit visualising Azure resource metrics, alerts, and health using Azure Monitor APIs.',
    github: 'https://github.com/amna-hashim-tech/azure-infrastructure-monitor',
    tech: ['Streamlit', 'Python', 'Azure Monitor', 'Azure SDK'],
    category: 'AI',
    icon: Activity,
  },
  {
    title: 'AI Customer Support Chatbot',
    description: 'Context-aware customer support chatbot powered by Azure OpenAI with Node.js backend, conversation history, and intelligent escalation logic.',
    github: 'https://github.com/amna-hashim-tech/ai-customer-support-chatbot',
    tech: ['Azure OpenAI', 'Node.js', 'AI', 'REST API'],
    category: 'AI',
    icon: MessageSquare,
  },
  {
    title: 'Smart Email Reply Assistant',
    description: 'AI-powered email response generator using Azure OpenAI and Flask — drafts contextual replies in seconds.',
    github: 'https://github.com/amna-hashim-tech/smart-email-reply-assistant',
    tech: ['Azure OpenAI', 'Flask', 'Python', 'AI Automation'],
    category: 'AI',
    icon: Mail,
  },
  // CLOUD
  {
    title: 'TechGear Plus – Azure Migration',
    description: 'Full migration of a production e-commerce store to Azure infrastructure with optimised CI/CD pipelines, load balancing, and zero-downtime deployment.',
    github: 'https://github.com/amna-hashim-tech/techgear-plus-azure-migration',
    tech: ['Azure', 'DevOps', 'CI/CD', 'Load Balancing', 'eCommerce'],
    category: 'Cloud',
    icon: Rocket,
  },
  {
    title: 'Cloud Resume – Azure',
    description: 'Full-stack cloud resume with Azure Static Web Apps, serverless API via Azure Functions, Cosmos DB visitor counter, and GitHub Actions CI/CD.',
    github: 'https://github.com/amna-hashim-tech/cloud-resume-azure',
    tech: ['Azure', 'Serverless', 'Cosmos DB', 'GitHub Actions'],
    category: 'Cloud',
    icon: Server,
  },
  {
    title: 'Azure Weather App',
    description: 'Real-time weather dashboard built with React and Azure Functions, deployed on Azure Static Web Apps with live weather API integration.',
    github: 'https://github.com/amna-hashim-tech/azure-weather-app',
    demo: 'https://amnaweatherstore123.z13.web.core.windows.net/',
    tech: ['React', 'Azure Functions', 'Weather API', 'Static Web Apps'],
    category: 'Cloud',
    icon: Cloud,
  },
];

const skills = [
  {
    name: 'DevOps & IaC',
    icon: Terminal,
    color: 'from-emerald-500/15 to-teal-500/5',
    border: 'border-emerald-500/20',
    items: ['Kubernetes (AKS)', 'Docker', 'Terraform', 'Jenkins', 'Helm', 'GitHub Actions', 'Azure DevOps', 'Linux'],
  },
  {
    name: 'Azure Cloud',
    icon: Cloud,
    color: 'from-sky-500/15 to-blue-500/5',
    border: 'border-sky-500/20',
    items: ['AKS', 'Azure Functions', 'App Service', 'Static Web Apps', 'Cosmos DB', 'Blob Storage', 'Azure Monitor', 'Azure OpenAI'],
  },
  {
    name: 'AI & Automation',
    icon: Brain,
    color: 'from-violet-500/15 to-purple-500/5',
    border: 'border-violet-500/20',
    items: ['Claude API', 'Azure OpenAI', 'FastAPI', 'Streamlit', 'Cognitive Services', 'AI Chatbots'],
  },
  {
    name: 'Development',
    icon: Code2,
    color: 'from-amber-500/15 to-orange-500/5',
    border: 'border-amber-500/20',
    items: ['Python', 'Node.js', 'React', 'JavaScript', 'Flask', 'REST APIs', 'Tailwind CSS'],
  },
];

const certs = [
  { name: 'AZ-104', label: 'Azure Administrator', color: 'text-sky-400 border-sky-400/30 bg-sky-400/5' },
  { name: 'AZ-305', label: 'Azure Solutions Architect', color: 'text-blue-400 border-blue-400/30 bg-blue-400/5' },
  { name: 'AI-900', label: 'Azure AI Fundamentals', color: 'text-violet-400 border-violet-400/30 bg-violet-400/5' },
];

const filters = ['All', 'DevOps', 'Cloud', 'AI'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const handleEmail = () => { window.location.href = 'mailto:amnahashim.contact@gmail.com'; };
  const handleCV = () => { window.location.href = 'mailto:amnahashim.contact@gmail.com?subject=CV Request - Amna Hashim'; };

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b12]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
            <span className="text-emerald-400">amna</span><span className="text-slate-600">@cloud:~$</span>
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-slate-500">
            {['About', 'Skills', 'Projects', 'Contact'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`}
                className="hover:text-white transition-colors duration-200 tracking-wide">{s}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-sky-400 transition-colors duration-200">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/amna-hashim-tech" target="_blank" rel="noopener noreferrer"
              className="text-slate-600 hover:text-white transition-colors duration-200">
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" className="relative min-h-screen flex items-center pt-20 pb-16">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-1/4 -left-48 h-[700px] w-[700px] bg-emerald-600/6 blur-[160px] rounded-full" />
          <div className="absolute bottom-0 -right-48 h-[600px] w-[600px] bg-sky-600/6 blur-[160px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="h-3 w-3" /> Dubai, UAE
              </span>
              <span className="text-slate-700">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1}
              className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.04] mb-5">
              <span className="text-white">Amna Hashim</span>
            </motion.h1>

            <motion.h2 variants={fadeUp} custom={2}
              className="text-2xl sm:text-3xl font-semibold text-slate-400 mb-6">
              Azure Cloud & DevOps Engineer
            </motion.h2>

            <motion.p variants={fadeUp} custom={3}
              className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
              Cloud Solutions Lead with 5+ years managing enterprise Azure infrastructure and e-commerce platforms.
              Hands-on with <span className="text-slate-200">Kubernetes</span>, <span className="text-slate-200">Terraform</span>, <span className="text-slate-200">CI/CD pipelines</span>, and <span className="text-slate-200">AI-powered cloud solutions</span> — delivering scalable, secure infrastructure from dev to production.
            </motion.p>

            {/* Cert badges */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2 mb-10">
              {certs.map(c => (
                <span key={c.name}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${c.color}`}>
                  <BadgeCheck className="h-3 w-3" /> {c.name} · {c.label}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} custom={5} className="flex flex-wrap gap-3">
              <button onClick={handleEmail}
                className="inline-flex items-center gap-2 bg-white text-[#070b12] hover:bg-slate-100 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-white/5">
                <Mail className="h-4 w-4" /> Get In Touch <ArrowRight className="h-4 w-4" />
              </button>
              <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-500/10 hover:bg-sky-500/18 border border-sky-500/25 text-sky-400 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/amna-hashim-tech" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/8 border border-white/8 text-slate-300 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <button onClick={handleCV}
                className="inline-flex items-center gap-2 bg-emerald-500/8 hover:bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200">
                <Download className="h-4 w-4" /> Download CV
              </button>
            </motion.div>

          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
              <ChevronDown className="h-5 w-5 text-slate-700" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>

            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}>Expertise</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.div key={skill.name} variants={fadeUp} custom={i}
                    className={`p-5 rounded-2xl bg-gradient-to-b ${skill.color} border ${skill.border} transition-all duration-300 hover:brightness-110`}>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon className="h-4 w-4 text-slate-400" />
                      <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map(item => (
                        <span key={item} className="text-xs px-2 py-0.5 rounded bg-black/20 text-slate-400 border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 border-t border-white/5 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 h-[500px] w-[500px] bg-violet-600/4 blur-[150px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>

            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}>Portfolio</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
              <p className="mt-2 text-slate-500 text-sm max-w-lg">
                Hands-on projects demonstrating real-world DevOps pipelines, cloud architecture, and AI solutions.
              </p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div variants={fadeUp} className="flex gap-2 mb-10 flex-wrap">
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === f
                      ? 'bg-emerald-500/12 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-500 border border-transparent hover:text-slate-300 hover:border-white/8'
                  }`}>
                  {f}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <motion.div key={project.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.04 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={`group relative rounded-2xl border flex flex-col transition-all duration-300 ${
                        project.highlight
                          ? 'border-emerald-500/22 bg-emerald-500/3 hover:border-emerald-500/40 hover:bg-emerald-500/5'
                          : 'border-white/6 bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.035]'
                      }`}>

                      {project.highlight && (
                        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                      )}

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-2 rounded-xl border ${
                            project.highlight ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-white/4 border-white/8'
                          }`}>
                            <Icon className={`h-4 w-4 ${project.highlight ? 'text-emerald-400' : 'text-slate-500'}`} />
                          </div>
                          <div className="flex gap-1">
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                              className="p-1.5 rounded-lg text-slate-700 hover:text-white hover:bg-white/8 transition-all duration-200"
                              aria-label="GitHub repo">
                              <Github className="h-3.5 w-3.5" />
                            </a>
                            {project.demo && (
                              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                className="p-1.5 rounded-lg text-slate-700 hover:text-white hover:bg-white/8 transition-all duration-200"
                                aria-label="Live demo">
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className={`text-sm font-semibold mb-2 transition-colors duration-200 ${
                          project.highlight ? 'text-white' : 'text-slate-200 group-hover:text-white'
                        }`}>
                          {project.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1 line-clamp-3">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {project.tech.slice(0, 4).map(t => (
                            <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/4 text-slate-500 border border-white/5">
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-xs px-2 py-0.5 rounded bg-white/4 text-slate-600 border border-white/5">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <motion.div variants={fadeUp} custom={6} className="mt-8 text-center">
              <a href="https://github.com/amna-hashim-tech" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-300 text-xs transition-colors duration-200"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                <Github className="h-3.5 w-3.5" /> View all repositories → github.com/amna-hashim-tech
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger}>
            <motion.div variants={fadeUp}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-10 sm:p-12 text-center">

              <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}>Contact</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Open to Opportunities</h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                Actively seeking roles in <span className="text-white">Azure Cloud Engineering</span>, <span className="text-white">DevOps</span>, and <span className="text-white">Cloud Infrastructure</span> across the UAE.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
                <button onClick={handleEmail}
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#070b12] hover:bg-slate-100 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200">
                  <Mail className="h-4 w-4" /> Email Me
                </button>
                <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500/10 hover:bg-sky-500/18 border border-sky-500/25 text-sky-400 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <button onClick={handleCV}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-400 text-xs transition-colors duration-200"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                <Download className="h-3.5 w-3.5" /> Request CV by email
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-700" style={{ fontFamily: "'DM Mono', monospace" }}>
            © {new Date().getFullYear()} Amna Hashim · Dubai, UAE
          </p>
          <div className="flex items-center gap-5">
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer"
              className="text-slate-700 hover:text-sky-400 transition-colors duration-200">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/amna-hashim-tech" target="_blank" rel="noopener noreferrer"
              className="text-slate-700 hover:text-white transition-colors duration-200">
              <Github className="h-4 w-4" />
            </a>
            <button onClick={handleEmail} className="text-slate-700 hover:text-white transition-colors duration-200">
              <Mail className="h-4 w-4" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
