import { useState } from "react";

const projects = [
  {
    id: "cloudbite",
    title: "CloudBite",
    subtitle: "Enterprise AKS Platform",
    description: "Multi-repo cloud-native food ordering platform built for production. Four independently managed services covering the application layer, CI/CD pipelines, Terraform infrastructure, and Helm chart deployments with Trivy security scanning, SonarQube quality gates, and Prometheus/Grafana monitoring.",
    tags: ["Kubernetes", "AKS", "Terraform", "ArgoCD", "Helm", "SonarQube", "Trivy", "Prometheus", "GitOps"],
    category: "DevOps",
    flagship: true,
    repos: [
      { label: "App", url: "https://github.com/amna-albasher/amna-hashim-tech-cloudbite-app" },
      { label: "Pipelines", url: "https://github.com/amna-albasher/cloudbite-pipelines" },
      { label: "Infrastructure", url: "https://github.com/amna-albasher/cloudbite-infrastructure" },
      { label: "Helm", url: "https://github.com/amna-albasher/cloudbite-helm" },
    ],
  },
  {
    id: "devops-health",
    title: "DevOps Health Monitor",
    subtitle: "Real-Time Pipeline Dashboard",
    description: "REST API and live dashboard tracking build statuses, deployment metrics, and infrastructure uptime across environments. Deployed to Vercel with a public demo.",
    tags: ["Node.js", "REST API", "Azure", "Monitoring", "Vercel"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/devops-health-api" }],
    demo: "https://devops-health-api-three.vercel.app",
  },
  {
    id: "terraform-enterprise",
    title: "Terraform Enterprise Infrastructure",
    subtitle: "Multi-Environment Azure IaC",
    description: "Multi-environment Azure infrastructure provisioned with Terraform with separate dev, staging, and production workspaces, remote state, load balancing, VMs, and Azure Monitor integration.",
    tags: ["Terraform", "Azure", "IaC", "Remote State", "Load Balancing"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/azure-terraform-enterprise" }],
  },
  {
    id: "cicd-project",
    title: "Python CI/CD Pipeline",
    subtitle: "GitHub Actions Automation",
    description: "End-to-end CI/CD pipeline for a Python application with automated testing, linting, build, and deployment stages orchestrated through GitHub Actions with environment-specific gates.",
    tags: ["Python", "GitHub Actions", "CI/CD", "Azure", "Testing"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/cicd-project" }],
  },
  {
    id: "ai-incident",
    title: "AI Incident Response System",
    subtitle: "Automated Alert Triage",
    description: "Azure OpenAI powered system that classifies infrastructure alerts, suggests remediation steps, and escalates critical incidents automatically to reduce mean time to response.",
    tags: ["Azure OpenAI", "Python", "AI Automation", "Azure Monitor"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/ai-incident-response" }],
  },
  {
    id: "ecommerce-devops",
    title: "AKS E-Commerce Platform",
    subtitle: "Production Kubernetes Deployment",
    description: "Production-grade e-commerce platform on Azure Kubernetes Service with multi-container architecture, Helm charts, and a full CI/CD pipeline through Azure DevOps.",
    tags: ["Kubernetes", "AKS", "Docker", "Helm", "Azure DevOps"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/ecommerce-devops-project" }],
  },
  {
    id: "smart-infra",
    title: "Smart Infrastructure Advisor",
    subtitle: "AI Architecture Recommendations",
    description: "FastAPI application powered by the Claude API that analyses cloud workload requirements and recommends optimal Azure architecture with real-time pricing estimates. Live on Vercel.",
    tags: ["FastAPI", "Claude API", "Python", "Vercel", "Azure"],
    category: "AI",
    flagship: true,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/smart-infrastructure-advisor" }],
    demo: "https://smart-infrastructure-advisor.vercel.app",
  },
  {
    id: "infra-monitor",
    title: "Azure Infrastructure Monitor",
    subtitle: "Real-Time Cloud Health Dashboard",
    description: "Streamlit dashboard pulling live Azure Monitor metrics to surface resource health, anomaly detection alerts, and cost tracking built with Python and the Azure SDK.",
    tags: ["Streamlit", "Python", "Azure Monitor", "Azure SDK"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/azure-infrastructure-monitor" }],
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Chatbot",
    subtitle: "Azure OpenAI + Node.js",
    description: "Context-aware customer support chatbot powered by Azure OpenAI with conversation history, intelligent escalation logic, and a Node.js REST API backend.",
    tags: ["Azure OpenAI", "Node.js", "AI", "REST API"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/ai-chatbot-azure" }],
  },
  {
    id: "ai-trend",
    title: "AI Trend Predictor",
    subtitle: "Multi-Agent Tech Forecasting",
    description: "Multi-agent system using the Claude API alongside Google Trends and job market data to predict emerging technology trends and in-demand skills across cloud and DevOps.",
    tags: ["Claude API", "Multi-Agent", "Python", "Google Trends"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/AI-Trend-Predictor" }],
  },
  {
    id: "az-commits",
    title: "AZ Commits",
    subtitle: "AI Git Commit Generator",
    description: "CLI tool powered by Azure OpenAI that reads staged git changes and generates meaningful conventional commit messages automatically.",
    tags: ["Azure OpenAI", "Node.js", "CLI", "TypeScript"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/az-commits" }],
  },
  {
    id: "email-assistant",
    title: "Smart Email Reply Assistant",
    subtitle: "AI Email Drafting",
    description: "Flask application using Azure OpenAI to generate contextual email replies in seconds with professional tone for business communication.",
    tags: ["Azure OpenAI", "Flask", "Python", "AI Automation"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/smart-email-reply-assistant" }],
  },
  {
    id: "doc-analyzer",
    title: "Smart Document Analyzer",
    subtitle: "AI Document Intelligence",
    description: "AI powered tool that extracts key information, summarises content, and answers questions from uploaded documents using Azure AI services.",
    tags: ["Azure AI", "JavaScript", "Document Intelligence"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/smart-document-analyzer" }],
  },
  {
    id: "techgear",
    title: "TechGear Plus Azure Migration",
    subtitle: "Zero-Downtime Cloud Migration",
    description: "Full migration of a production e-commerce store to Azure with redesigned CI/CD pipelines, load balancing across availability zones, and a zero-downtime blue/green cutover.",
    tags: ["Azure", "DevOps", "CI/CD", "Load Balancing", "Migration"],
    category: "Cloud",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/techgear-plus-azure-migration" }],
  },
];

const CATEGORIES = ["All", "DevOps", "AI", "Cloud"];

const skills = [
  { area: "DevOps & CI/CD", items: ["Azure DevOps", "GitHub Actions", "Jenkins", "ArgoCD", "GitOps", "Docker", "Helm", "Trivy", "SonarQube"] },
  { area: "Cloud & IaC", items: ["AKS", "Azure Functions", "App Service", "Azure Monitor", "Kubernetes", "Terraform", "Remote State"] },
  { area: "AI & Automation", items: ["Azure OpenAI", "Claude API", "FastAPI", "Streamlit", "Multi-Agent Systems", "Python"] },
  { area: "E-Commerce & Web Ops", items: ["WooCommerce", "Shopify", "WordPress", "GA4", "GTM", "Elementor"] },
];

const certs = [
  { code: "AZ-104", name: "Azure Administrator" },
  { code: "AZ-305", name: "Azure Solutions Architect" },
  { code: "AI-900", name: "Azure AI Fundamentals" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return (
    <div style={{ background: "#fafafa", color: "#111", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }
        button { cursor: pointer; border: none; background: none; font-family: inherit; color: inherit; }

        .nav-link { font-size: 14px; font-weight: 500; color: #888; transition: color 0.15s; cursor: pointer; font-family: inherit; background: none; border: none; }
        .nav-link:hover { color: #111; }

        .cta-nav { display: inline-flex; align-items: center; background: #111; color: #fff; font-size: 13.5px; font-weight: 600; padding: 9px 20px; border-radius: 100px; transition: background 0.15s; font-family: inherit; border: none; cursor: pointer; }
        .cta-nav:hover { background: #333; }

        .hero-btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #111; color: #fff; font-size: 14px; font-weight: 600; padding: 12px 26px; border-radius: 100px; border: none; cursor: pointer; font-family: inherit; transition: background 0.15s; }
        .hero-btn-primary:hover { background: #333; }
        .hero-btn-outline { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #555; font-size: 14px; font-weight: 500; padding: 12px 22px; border-radius: 100px; border: 1.5px solid #e0e0e0; cursor: pointer; font-family: inherit; transition: all 0.15s; }
        .hero-btn-outline:hover { border-color: #bbb; color: #111; }

        .cert-pill { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; padding: 5px 14px; border-radius: 100px; background: #fff; border: 1.5px solid #e8e8e8; color: #555; }

        .filter-btn { padding: 7px 18px; border-radius: 100px; font-size: 13px; font-weight: 500; border: 1.5px solid #e0e0e0; color: #888; background: #fff; cursor: pointer; font-family: inherit; transition: all 0.15s; }
        .filter-btn:hover { border-color: #bbb; color: #333; }
        .filter-btn.on { background: #111; color: #fff; border-color: #111; font-weight: 600; }

        .card { background: #fff; border: 1.5px solid #ebebeb; border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px; transition: box-shadow 0.2s, border-color 0.2s; }
        .card:hover { box-shadow: 0 8px 40px rgba(0,0,0,0.07); border-color: #d8d8d8; }
        .card.featured { border-color: #c7d7ff; background: #f5f8ff; }

        .tag { display: inline-block; background: #f4f4f4; color: #555; font-size: 11.5px; font-weight: 500; padding: 4px 10px; border-radius: 6px; }

        .repo-link { font-size: 12px; font-weight: 600; color: #2563eb; background: #eff6ff; border: 1px solid #dbeafe; padding: 5px 12px; border-radius: 8px; transition: background 0.15s; }
        .repo-link:hover { background: #dbeafe; }
        .demo-link { font-size: 12px; font-weight: 600; color: #059669; background: #ecfdf5; border: 1px solid #d1fae5; padding: 5px 12px; border-radius: 8px; transition: background 0.15s; }
        .demo-link:hover { background: #d1fae5; }

        .skill-block { background: #fff; border: 1.5px solid #ebebeb; border-radius: 14px; padding: 24px; }

        .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #aaa; }

        .contact-box { background: #111; border-radius: 20px; padding: 60px 56px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 36px; }

        @media (max-width: 700px) {
          .cta-row { flex-wrap: wrap !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .contact-box { flex-direction: column; padding: 40px 28px !important; }
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 701px) {
          .mobile-toggle { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(250,250,250,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid #efefef" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111", letterSpacing: "-0.01em" }}>Amna Albasher</span>
          <nav className="desktop-nav" style={{ display: "flex", gap: 36 }}>
            {["about","skills","projects","contact"].map(s => (
              <button key={s} className="nav-link" onClick={() => scrollTo(s)}>{s[0].toUpperCase()+s.slice(1)}</button>
            ))}
          </nav>
          <button onClick={() => scrollTo("contact")} className="cta-nav">Get in touch</button>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", alignItems: "center", justifyContent: "center", width: 38, height: 38, border: "1.5px solid #e0e0e0", borderRadius: 9, background: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav" style={{ background: "#fff", borderTop: "1px solid #efefef", padding: "12px 32px 20px" }}>
            {["about","skills","projects","contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)} style={{ display: "block", width: "100%", textAlign: "left", padding: "13px 0", fontSize: 15, fontWeight: 500, color: "#555", fontFamily: "inherit", background: "none", border: "none", borderBottom: "1px solid #f5f5f5", cursor: "pointer" }}>
                {s[0].toUpperCase()+s.slice(1)}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="about" style={{ maxWidth: 1120, margin: "0 auto", padding: "140px 32px 100px" }}>
        <div style={{ maxWidth: 720 }}>
          <p className="section-label" style={{ marginBottom: 24 }}>Cloud & DevOps Engineer · Dubai, UAE</p>

          <h1 style={{ fontSize: "clamp(48px, 6.5vw, 84px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 28, color: "#111", whiteSpace: "nowrap" }}>
            Amna Albasher
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.75, color: "#777", maxWidth: 520, marginBottom: 36, fontWeight: 400 }}>
            5 years building enterprise Azure infrastructure, DevOps pipelines, and AI cloud tooling. AZ-104, AZ-305, and AI-900 certified.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
            {certs.map(c => (
              <span key={c.code} className="cert-pill">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8.5 2L4 7.5L1.5 5" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {c.code} · {c.name}
              </span>
            ))}
          </div>

          <div className="cta-row" style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <a href="mailto:amnahashim.contact@gmail.com" className="hero-btn-primary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 3h11l-5.5 5L1.5 3zm0 0v8h11V3" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"/></svg>
              Email me
            </a>
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer" className="hero-btn-outline">LinkedIn</a>
            <a href="https://github.com/amna-albasher" target="_blank" rel="noopener noreferrer" className="hero-btn-outline">GitHub</a>
            <a href="https://drive.google.com/file/d/1ArLln7Lrnzsdyxap05zovsFEO7d-tfR0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hero-btn-outline">Download CV</a>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: 1, background: "#ebebeb", maxWidth: 1120, margin: "0 auto" }} />

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 32px" }}>
        <p className="section-label" style={{ marginBottom: 16 }}>Expertise</p>
        <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 44, color: "#111" }}>Technical Skills</h2>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {skills.map(s => (
            <div key={s.area} className="skill-block">
              <h3 style={{ fontSize: 11.5, fontWeight: 700, marginBottom: 16, color: "#aaa", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.area}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#ebebeb", maxWidth: 1120, margin: "0 auto" }} />

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1120, margin: "0 auto", padding: "88px 32px" }}>
        <p className="section-label" style={{ marginBottom: 16 }}>Work</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 44 }}>
          <h2 style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", color: "#111" }}>Projects</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map(c => (
              <button key={c} className={`filter-btn${filter===c?" on":""}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14 }}>
          {filtered.map(p => (
            <div key={p.id} className={`card${p.flagship?" featured":""}`}>
              {p.flagship && (
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2563eb" }}>
                  Featured
                </span>
              )}
              <div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: "#111", marginBottom: 3 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: "#aaa", fontWeight: 500 }}>{p.subtitle}</p>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.72, color: "#666" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tags.slice(0,5).map(t => <span key={t} className="tag">{t}</span>)}
                {p.tags.length > 5 && <span className="tag">+{p.tags.length-5}</span>}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, paddingTop: 2 }}>
                {p.repos.map(r => (
                  <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" className="repo-link">{r.label} ↗</a>
                ))}
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="demo-link">Live Demo ↗</a>}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", marginTop: 44, fontSize: 12.5, color: "#bbb" }}>
          github.com/amna-albasher
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 32px 100px" }}>
        <div className="contact-box">
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>Contact</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.025em", color: "#fff", marginBottom: 10, lineHeight: 1.2 }}>
              Available for Cloud<br />and DevOps roles.
            </h2>
            <p style={{ fontSize: 15, color: "#666", marginTop: 8 }}>Let's talk.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="mailto:amnahashim.contact@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#fff", color: "#111", fontSize: 14, fontWeight: 700, padding: "13px 28px", borderRadius: 100, transition: "background 0.15s" }}>
              amnahashim.contact@gmail.com
            </a>
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, background: "transparent", color: "#888", fontSize: 14, fontWeight: 500, padding: "12px 28px", borderRadius: 100, border: "1.5px solid #333", transition: "all 0.15s" }}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #ebebeb", padding: "28px 32px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#ccc" }}>© {new Date().getFullYear()} Amna Albasher</p>
      </footer>
    </div>
  );
}
