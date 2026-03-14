import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Cloud, Cpu, Globe } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Azure Weather App',
      description: 'A real-time weather dashboard built with React and Azure Functions, deployed on Azure Static Web Apps.',
      github: 'https://github.com/amna-hashim-tech/azure-weather-app',
      demo: 'https://amnaweatherstore123.z13.web.core.windows.net/',
      tech: ['React', 'Azure Functions', 'Weather API', 'Static Web Apps'],
    },
    {
      title: 'Cloud Resume Azure',
      description: 'A portfolio project showcasing Azure cloud integration, serverless APIs, and CI/CD pipelines.',
      github: 'https://github.com/amna-hashim-tech/cloud-resume-azure',
      tech: ['Azure', 'CI/CD', 'Serverless', 'Static Web Apps'],
    },
    {
      title: 'TechGear Plus Azure Migration',
      description: 'Migration of a complete eCommerce store to Azure infrastructure with optimized CI/CD and load balancing.',
      github: 'https://github.com/amna-hashim-tech/techgear-plus-azure-migration',
      tech: ['Azure', 'DevOps', 'CI/CD', 'eCommerce'],
    },
    {
      title: 'Azure Todo Demo',
      description: 'A To-Do web app built with Azure App Services and Cosmos DB, featuring CRUD operations and authentication.',
      github: 'https://github.com/amna-hashim-tech/azure-todo-demo',
      tech: ['Azure App Service', 'Cosmos DB', 'React', 'Functions'],
    },
    {
      title: 'Smart Email Reply Assistant',
      description: 'An AI-powered email response generator built using Azure OpenAI and Flask.',
      github: 'https://github.com/amna-hashim-tech/smart-email-reply-assistant',
      tech: ['Azure OpenAI', 'Flask', 'AI Automation'],
    },
    {
      title: 'Smart Document Analyzer',
      description: 'An intelligent document analysis tool leveraging Azure Cognitive Services for text extraction and classification.',
      github: 'https://github.com/amna-hashim-tech/smart-document-analyzer',
      tech: ['Azure Cognitive Services', 'Python', 'AI'],
    },
    {
      title: 'AI Background Remover',
      description: 'Web app that removes image backgrounds using AI and integrates with Remove.bg API.',
      github: 'https://github.com/amna-hashim-tech/ai-background-remover',
      tech: ['React', 'AI', 'Remove.bg API'],
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:amnahashim.contact@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 text-slate-100">
      <section className="relative text-center py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 h-80 w-80 bg-cyan-400/25 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 bg-indigo-500/25 blur-3xl rounded-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg flex justify-center items-center gap-3">
            <Cloud className="h-10 w-10 text-cyan-400" /> Azure Cloud & AI Solutions <Cpu className="h-10 w-10 text-indigo-400" />
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering innovation through intelligent, scalable, and secure Azure-based solutions. 
            From AI automation to cloud-native web applications — bringing performance and reliability together.
          </p>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm italic">
            Specialized in integrating <span className="text-cyan-400">Azure services</span>, <span className="text-cyan-400">DevOps pipelines</span>, and <span className="text-cyan-400">AI automation</span> to deliver real-world impact.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-lg transition focus:ring-4 focus:ring-cyan-400 focus:outline-none"
          >
            <Mail className="h-4 w-4" /> Contact
          </button>
          <a
            href="https://github.com/amna-hashim-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-lg text-sm font-semibold shadow-lg hover:bg-slate-100 transition focus:ring-4 focus:ring-white focus:outline-none"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-8 text-center text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] hover:shadow-cyan-500/30 transition overflow-hidden"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                className="block p-6"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-900 to-indigo-900 grid place-items-center text-xs text-cyan-300 font-medium mb-4">
                  {project.tech.slice(0,3).join(' • ')}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white underline decoration-cyan-500/0 hover:decoration-cyan-500/80 decoration-2 underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="flex items-center gap-1 bg-cyan-600 text-white text-xs px-3 py-1.5 rounded-md shadow-md">
                    <Github className="h-4 w-4" /> Code
                  </span>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 bg-white text-slate-900 text-xs px-3 py-1.5 rounded-md font-medium shadow-md hover:bg-slate-100 transition"
                    >
                      <Globe className="h-4 w-4" /> Live
                    </a>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Azure Cloud & AI Solutions</p>
        <p className="text-xs text-slate-500 mt-1">Built with React, Tailwind, and Framer Motion</p>
      </footer>
    </div>
  );
}