import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, Cloud, Cpu, Globe, ExternalLink, ChevronDown, Server, Brain, Code2, Rocket, ArrowRight, Sparkles } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Azure Weather App',
      description: 'A real-time weather dashboard built with React and Azure Functions, deployed on Azure Static Web Apps.',
      github: 'https://github.com/amna-hashim-tech/azure-weather-app',
      demo: 'https://amnaweatherstore123.z13.web.core.windows.net/',
      tech: ['React', 'Azure Functions', 'Weather API', 'Static Web Apps'],
      category: 'Cloud',
      icon: Cloud,
    },
    {
      title: 'Cloud Resume Azure',
      description: 'A portfolio project showcasing Azure cloud integration, serverless APIs, and CI/CD pipelines.',
      github: 'https://github.com/amna-hashim-tech/cloud-resume-azure',
      tech: ['Azure', 'CI/CD', 'Serverless', 'Static Web Apps'],
      category: 'Cloud',
      icon: Server,
    },
    {
      title: 'TechGear Plus Azure Migration',
      description: 'Migration of a complete eCommerce store to Azure infrastructure with optimized CI/CD and load balancing.',
      github: 'https://github.com/amna-hashim-tech/techgear-plus-azure-migration',
      tech: ['Azure', 'DevOps', 'CI/CD', 'eCommerce'],
      category: 'Cloud',
      icon: Rocket,
    },
    {
      title: 'Azure Todo Demo',
      description: 'A To-Do web app built with Azure App Services and Cosmos DB, featuring CRUD operations and authentication.',
      github: 'https://github.com/amna-hashim-tech/azure-todo-demo',
      tech: ['Azure App Service', 'Cosmos DB', 'React', 'Functions'],
      category: 'Cloud',
      icon: Code2,
    },
    {
      title: 'Smart Email Reply Assistant',
      description: 'An AI-powered email response generator built using Azure OpenAI and Flask.',
      github: 'https://github.com/amna-hashim-tech/smart-email-reply-assistant',
      tech: ['Azure OpenAI', 'Flask', 'AI Automation'],
      category: 'AI',
      icon: Brain,
    },
    {
      title: 'Smart Document Analyzer',
      description: 'An intelligent document analysis tool leveraging Azure Cognitive Services for text extraction and classification.',
      github: 'https://github.com/amna-hashim-tech/smart-document-analyzer',
      tech: ['Azure Cognitive Services', 'Python', 'AI'],
      category: 'AI',
      icon: Brain,
    },
    {
      title: 'AI Background Remover',
      description: 'Web app that removes image backgrounds using AI and integrates with Remove.bg API.',
      github: 'https://github.com/amna-hashim-tech/ai-background-remover',
      tech: ['React', 'AI', 'Remove.bg API'],
      category: 'AI',
      icon: Sparkles,
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive developer portfolio built with React, Tailwind CSS, and Framer Motion with smooth animations.',
      github: 'https://github.com/amna-hashim-tech/amna-portfolio',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'Web',
      icon: Globe,
    },
  ];

  const skills = [
    { name: 'Azure Cloud', items: ['Azure Functions', 'App Service', 'Static Web Apps', 'Cosmos DB', 'Blob Storage', 'Azure DevOps'] },
    { name: 'AI & ML', items: ['Azure OpenAI', 'Cognitive Services', 'AI Automation', 'Document Intelligence'] },
    { name: 'Development', items: ['React', 'JavaScript', 'Python', 'Flask', 'HTML/CSS', 'Tailwind CSS'] },
    { name: 'DevOps', items: ['CI/CD Pipelines', 'GitHub Actions', 'Docker', 'Infrastructure as Code', 'Load Balancing'] },
  ];

  const filters = ['All', 'Cloud', 'AI', 'Web'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const handleEmailClick = () => {
    window.location.href = 'mailto:amnahashim.contact@gmail.com';
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            AH
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
          <a
            href="https://github.com/amna-hashim-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-32 h-[500px] w-[500px] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-violet-500/5 blur-[120px] rounded-full" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Amna Hashim
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} custom={2} className="mt-6 flex items-center justify-center gap-3 text-xl sm:text-2xl text-slate-400 font-medium">
              <Cloud className="h-6 w-6 text-cyan-400" />
              <span>Azure Cloud & AI Solutions Engineer</span>
              <Cpu className="h-6 w-6 text-indigo-400" />
            </motion.div>

            <motion.p variants={fadeUp} custom={3} className="mt-8 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering innovation through intelligent, scalable, and secure Azure-based solutions.
              From AI automation to cloud-native web applications — bringing performance and reliability together.
            </motion.p>

            <motion.p variants={fadeUp} custom={4} className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
              Specialized in integrating <span className="text-cyan-400/80">Azure services</span>, <span className="text-cyan-400/80">DevOps pipelines</span>, and <span className="text-cyan-400/80">AI automation</span> to deliver real-world impact.
            </motion.p>

            <motion.div variants={fadeUp} custom={5} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleEmailClick}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Mail className="h-4 w-4" /> Get In Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://github.com/amna-hashim-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white px-8 py-3 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300"
              >
                <Github className="h-4 w-4" /> View GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-6 w-6 text-slate-600" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Expertise</h2>
              <p className="mt-3 text-slate-400 max-w-lg mx-auto">Core skills and technologies I use to build cloud-native and AI-powered solutions.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  custom={i}
                  className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700/80 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-white mb-4">{skill.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 h-[400px] w-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
              <p className="mt-3 text-slate-400 max-w-lg mx-auto">Real-world applications showcasing cloud architecture, AI integration, and modern web development.</p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div variants={fadeUp} className="flex justify-center gap-2 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white border border-transparent hover:border-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project, i) => {
                  const Icon = project.icon;
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group relative rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm hover:border-slate-700/80 transition-all duration-300 overflow-hidden"
                    >
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-slate-700/50">
                            <Icon className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="flex gap-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition"
                              aria-label={`${project.title} GitHub`}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition"
                                aria-label={`${project.title} live demo`}
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-5 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex gap-2 flex-wrap">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 border border-slate-700/40"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="relative py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white">
              Let's Work Together
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-slate-400 text-lg max-w-lg mx-auto">
              I'm actively looking for opportunities in Azure Cloud Engineering and AI Solutions. Let's connect and build something great.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleEmailClick}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Mail className="h-4 w-4" /> amnahashim.contact@gmail.com
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Amna Hashim. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/amna-hashim-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <button onClick={handleEmailClick} className="text-slate-500 hover:text-white transition">
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
