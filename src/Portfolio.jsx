import { useState } from "react";

const projects = [
  {
    id: "cloudbite",
    title: "CloudBite",
    subtitle: "Enterprise AKS Platform",
    description:
      "Multi-repo cloud-native food ordering platform built for production. Four independently managed services covering the application layer, CI/CD pipelines, Terraform infrastructure, and Helm chart deployments with Trivy security scanning, SonarQube code quality gates, and Prometheus/Grafana monitoring baked in.",
    tags: ["Kubernetes", "AKS", "Terraform", "ArgoCD", "Helm", "SonarQube", "Trivy", "Prometheus", "Grafana", "GitOps"],
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
    description:
      "REST API and live dashboard tracking build statuses, deployment metrics, and infrastructure uptime across environments. Deployed to Vercel with a public demo.",
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
    description:
      "Multi-environment Azure infrastructure provisioned with Terraform with separate dev, staging, and production workspaces, remote state, load balancing, VMs, and Azure Monitor integration.",
    tags: ["Terraform", "Azure", "IaC", "Remote State", "Load Balancing", "Monitoring"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/azure-terraform-enterprise" }],
  },
  {
    id: "cicd-project",
    title: "Python CI/CD Pipeline",
    subtitle: "GitHub Actions Automation",
    description:
      "End-to-end CI/CD pipeline for a Python application with automated testing, linting, build, and deployment stages orchestrated through GitHub Actions with environment-specific gates.",
    tags: ["Python", "GitHub Actions", "CI/CD", "Azure", "Testing"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/cicd-project" }],
  },
  {
    id: "ai-incident",
    title: "AI Incident Response System",
    subtitle: "Automated Alert Triage",
    description:
      "Azure OpenAI powered system that classifies infrastructure alerts, suggests remediation steps, and escalates critical incidents automatically to reduce mean time to response.",
    tags: ["Azure OpenAI", "Python", "AI Automation", "Azure Monitor"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/ai-incident-response" }],
  },
  {
    id: "ecommerce-devops",
    title: "AKS E-Commerce Platform",
    subtitle: "Production Kubernetes Deployment",
    description:
      "Production-grade e-commerce platform on Azure Kubernetes Service with multi-container architecture, Helm charts, and a full CI/CD pipeline through Azure DevOps.",
    tags: ["Kubernetes", "AKS", "Docker", "Helm", "Azure DevOps", "CI/CD"],
    category: "DevOps",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/ecommerce-devops-project" }],
  },
  {
    id: "smart-infra",
    title: "Smart Infrastructure Advisor",
    subtitle: "AI-Powered Architecture Recommendations",
    description:
      "FastAPI application powered by the Claude API that analyses cloud workload requirements and recommends optimal Azure architecture with real-time pricing estimates. Live on Vercel.",
    tags: ["FastAPI", "Claude API", "Python", "Vercel", "Azure", "AI"],
    category: "AI",
    flagship: true,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/smart-infrastructure-advisor" }],
    demo: "https://smart-infrastructure-advisor.vercel.app",
  },
  {
    id: "infra-monitor",
    title: "Azure Infrastructure Monitor",
    subtitle: "Real-Time Cloud Health Dashboard",
    description:
      "Streamlit dashboard pulling live Azure Monitor metrics to surface resource health, anomaly detection alerts, and cost tracking built with Python and the Azure SDK.",
    tags: ["Streamlit", "Python", "Azure Monitor", "Azure SDK", "Anomaly Detection"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/azure-infrastructure-monitor" }],
  },
  {
    id: "ai-chatbot",
    title: "AI Customer Support Chatbot",
    subtitle: "Azure OpenAI + Node.js",
    description:
      "Context-aware customer support chatbot powered by Azure OpenAI with conversation history, intelligent escalation logic, and a Node.js REST API backend.",
    tags: ["Azure OpenAI", "Node.js", "AI", "REST API", "JavaScript"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/ai-chatbot-azure" }],
  },
  {
    id: "ai-trend",
    title: "AI Trend Predictor",
    subtitle: "Multi-Agent Tech Forecasting",
    description:
      "Multi-agent system using the Claude API alongside Google Trends and job market data to predict emerging technology trends and in-demand skills across cloud and DevOps.",
    tags: ["Claude API", "Multi-Agent", "Python", "Google Trends", "AI"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/AI-Trend-Predictor" }],
  },
  {
    id: "az-commits",
    title: "AZ Commits",
    subtitle: "AI Git Commit Generator",
    description:
      "CLI tool powered by Azure OpenAI that reads staged git changes and generates meaningful conventional commit messages to cut the time spent writing commit history.",
    tags: ["Azure OpenAI", "Node.js", "CLI", "TypeScript", "Developer Tools"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/az-commits" }],
  },
  {
    id: "email-assistant",
    title: "Smart Email Reply Assistant",
    subtitle: "AI-Powered Email Drafting",
    description:
      "Flask application using Azure OpenAI to generate contextual email replies in seconds with professional tone and format for business communication.",
    tags: ["Azure OpenAI", "Flask", "Python", "AI Automation"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/smart-email-reply-assistant" }],
  },
  {
    id: "doc-analyzer",
    title: "Smart Document Analyzer",
    subtitle: "AI Document Intelligence",
    description:
      "AI powered tool that extracts key information, summarises content, and answers questions from uploaded documents using Azure AI services.",
    tags: ["Azure AI", "JavaScript", "Document Intelligence", "AI"],
    category: "AI",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/smart-document-analyzer" }],
  },
  {
    id: "techgear",
    title: "TechGear Plus Azure Migration",
    subtitle: "Zero-Downtime Cloud Migration",
    description:
      "Full migration of a production e-commerce store to Azure with redesigned CI/CD pipelines, load balancing across availability zones, and a zero-downtime blue/green cutover.",
    tags: ["Azure", "DevOps", "CI/CD", "Load Balancing", "Migration", "eCommerce"],
    category: "Cloud",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/techgear-plus-azure-migration" }],
  },
];

const CATEGORIES = ["All", "DevOps", "AI", "Cloud"];

const skills = [
  { area: "DevOps & CI/CD", items: ["Azure DevOps", "GitHub Actions", "Jenkins", "ArgoCD", "GitOps", "Docker", "Helm", "Trivy", "SonarQube"] },
  { area: "Cloud & IaC", items: ["Azure AKS", "Azure Functions", "App Service", "Azure Monitor", "Kubernetes", "Terraform", "Remote State"] },
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

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#ffffff", color: "#111827", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }
        button { cursor: pointer; border: none; background: none; font-family: inherit; color: inherit; }

        .nav-link {
          font-size: 14px; font-weight: 500; color: #6b7280;
          transition: color 0.15s; padding: 4px 0; background: none; border: none; cursor: pointer; font-family: inherit;
        }
        .nav-link:hover { color: #111827; }

        .pill-btn {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 10px 22px; border-radius: 100px; font-size: 14px; font-weight: 600;
          transition: all 0.15s; cursor: pointer; font-family: inherit;
        }
        .pill-primary { background: #111827; color: #ffffff; border: 2px solid #111827; }
        .pill-primary:hover { background: #1f2937; border-color: #1f2937; }
        .pill-outline { background: transparent; color: #111827; border: 2px solid #e5e7eb; }
        .pill-outline:hover { border-color: #111827; }

        .filter-pill {
          padding: 6px 16px; border-radius: 100px; font-size: 13px; font-weight: 500;
          border: 1.5px solid #e5e7eb; color: #6b7280; background: #ffffff;
          cursor: pointer; font-family: inherit; transition: all 0.15s;
        }
        .filter-pill:hover { border-color: #111827; color: #111827; }
        .filter-pill.on { background: #111827; color: #ffffff; border-color: #111827; }

        .card {
          background: #ffffff; border: 1.5px solid #f3f4f6;
          border-radius: 16px; padding: 28px 28px 24px;
          display: flex; flex-direction: column; gap: 14px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .card:hover { border-color: #e5e7eb; box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .card.featured { border-color: #111827; }

        .tag {
          display: inline-block; background: #f9fafb; color: #374151;
          font-size: 11.5px; font-weight: 500; padding: 4px 10px;
          border-radius: 6px; border: 1px solid #f3f4f6;
        }

        .cert-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600; padding: 6px 14px;
          border-radius: 100px; border: 1.5px solid #e5e7eb;
          color: #374151; background: #f9fafb;
        }

        .repo-link {
          font-size: 12px; font-weight: 600; color: #2563eb;
          background: #eff6ff; border: 1px solid #dbeafe;
          padding: 5px 12px; border-radius: 8px; transition: background 0.15s;
        }
        .repo-link:hover { background: #dbeafe; }

        .demo-link {
          font-size: 12px; font-weight: 600; color: #059669;
          background: #ecfdf5; border: 1px solid #d1fae5;
          padding: 5px 12px; border-radius: 8px; transition: background 0.15s;
        }
        .demo-link:hover { background: #d1fae5; }

        .section-eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #6b7280;
          font-family: 'JetBrains Mono', monospace;
        }

        .skill-block {
          background: #f9fafb; border-radius: 14px; padding: 24px;
        }

        .divider { height: 1px; background: #f3f4f6; }

        @media (max-width: 700px) {
          .hero-layout { flex-direction: column !important; }
          .cta-row { flex-wrap: wrap !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .contact-inner { flex-direction: column !important; }
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .contact-box { padding: 36px 24px !important; }
        }
        @media (min-width: 701px) {
          .mobile-toggle { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(255,255,255,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #f3f4f6" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 500, color: "#111827", letterSpacing: "0.02em" }}>
            amna.albasher
          </span>
          <nav className="desktop-nav" style={{ display: "flex", gap: 28 }}>
            {["about", "skills", "projects", "contact"].map(s => (
              <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
          </nav>
          <a href="mailto:amnahashim.contact@gmail.com" className="pill-btn pill-primary" style={{ fontSize: 13, padding: "8px 20px" }}>
            Get in touch
          </a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", alignItems: "center", justifyContent: "center", width: 38, height: 38, border: "1.5px solid #e5e7eb", borderRadius: 10, background: "#fff" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="#111827" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav" style={{ background: "#fff", borderTop: "1px solid #f3f4f6", padding: "16px 24px 20px" }}>
            {["about", "skills", "projects", "contact"].map(s => (
              <button key={s} onClick={() => scrollTo(s)}
                style={{ display: "block", width: "100%", textAlign: "left", padding: "12px 0", fontSize: 16, fontWeight: 500, color: "#374151", borderBottom: "1px solid #f9fafb", fontFamily: "inherit", background: "none", border: "none", borderBottom: "1px solid #f9fafb", cursor: "pointer" }}>
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="about" style={{ maxWidth: 1080, margin: "0 auto", padding: "128px 24px 96px" }}>
        <div style={{ maxWidth: 680 }}>
          <p className="section-eyebrow" style={{ marginBottom: 24 }}>Cloud & DevOps Engineer · Dubai, UAE</p>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24, color: "#111827" }}>
            Amna<br />Albasher
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: "#6b7280", maxWidth: 540, marginBottom: 32 }}>
            Building enterprise Azure infrastructure, DevOps pipelines, and AI cloud tooling. AZ-104, AZ-305, and AI-900 certified with 5 years of hands-on platform engineering experience.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
            {certs.map(c => (
              <span key={c.code} className="cert-badge">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M9.5 2.5L4.5 8.5L1.5 5.5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {c.code} {c.name}
              </span>
            ))}
          </div>

          <div className="cta-row" style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="mailto:amnahashim.contact@gmail.com" className="pill-btn pill-primary">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M1.5 3h12l-6 5.5L1.5 3zm0 0v9h12V3" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              Email me
            </a>
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline">
              LinkedIn
            </a>
            <a href="https://github.com/amna-albasher" target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline">
              GitHub
            </a>
            <a href="https://drive.google.com/file/d/1ArLln7Lrnzsdyxap05zovsFEO7d-tfR0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline">
              CV
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-eyebrow" style={{ marginBottom: 16 }}>Expertise</p>
        <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 40, color: "#111827" }}>Technical Skills</h2>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {skills.map(s => (
            <div key={s.area} className="skill-block">
              <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 14, color: "#111827", textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.area}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-eyebrow" style={{ marginBottom: 16 }}>Work</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: "#111827" }}>Projects</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map(c => (
              <button key={c} className={`filter-pill${filter === c ? " on" : ""}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: 14 }}>
          {filtered.map(p => (
            <div key={p.id} className={`card${p.flagship ? " featured" : ""}`}>
              {p.flagship && (
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#111827", fontFamily: "'JetBrains Mono', monospace" }}>
                  Featured
                </span>
              )}
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 3 }}>{p.title}</h3>
                <p style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{p.subtitle}</p>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#6b7280" }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tags.slice(0, 5).map(t => <span key={t} className="tag">{t}</span>)}
                {p.tags.length > 5 && <span className="tag">+{p.tags.length - 5}</span>}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, paddingTop: 2 }}>
                {p.repos.map(r => (
                  <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" className="repo-link">{r.label} ↗</a>
                ))}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="demo-link">Live Demo ↗</a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 40, fontSize: 13, color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace" }}>
          View all at github.com/amna-albasher
        </p>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 24px 100px" }}>
        <div className="contact-box" style={{ background: "#f9fafb", borderRadius: 20, padding: "56px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 36 }}>
          <div>
            <p className="section-eyebrow" style={{ marginBottom: 14 }}>Open to opportunities</p>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 12, color: "#111827" }}>
              Let's work together
            </h2>
            <p style={{ fontSize: 15, color: "#6b7280", maxWidth: 380, lineHeight: 1.65 }}>
              Actively looking for Cloud, DevOps, and E-Commerce roles across the UAE. Available for full-time positions.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="mailto:amnahashim.contact@gmail.com" className="pill-btn pill-primary" style={{ justifyContent: "center" }}>
              amnahashim.contact@gmail.com
            </a>
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer" className="pill-btn pill-outline" style={{ justifyContent: "center" }}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #f3f4f6", padding: "28px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9ca3af", fontFamily: "'JetBrains Mono', monospace" }}>
          © {new Date().getFullYear()} Amna Albasher · Dubai, UAE
        </p>
      </footer>
    </div>
  );
}
