import { useState } from "react";

const COLORS = {
  bg: "#F8F9FB",
  surface: "#FFFFFF",
  border: "#E4E7ED",
  borderStrong: "#C9CDD6",
  text: "#0F1117",
  textSecondary: "#4B5260",
  textMuted: "#8892A0",
  accent: "#1A56DB",
  accentLight: "#EBF0FF",
  accentMid: "#3B6FE8",
  success: "#0E7A4A",
  successLight: "#E6F5EE",
  tag: "#F1F3F7",
  tagText: "#3D4452",
};

const projects = [
  {
    id: "cloudbite",
    title: "CloudBite",
    subtitle: "Enterprise AKS Platform",
    description:
      "Multi-repo cloud-native food ordering platform built for production. Four independently managed services covering the application layer, CI/CD pipelines, Terraform infrastructure, and Helm chart deployments — with Trivy security scanning, SonarQube code quality gates, and Prometheus/Grafana monitoring baked in.",
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
      "Multi-environment Azure infrastructure provisioned with Terraform — separate dev, staging, and production workspaces with remote state, load balancing, VMs, and Azure Monitor integration.",
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
      "End-to-end CI/CD pipeline for a Python application — automated testing, linting, build, and deployment stages orchestrated through GitHub Actions with environment-specific gates.",
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
      "Azure OpenAI-powered system that classifies infrastructure alerts, suggests remediation steps, and escalates critical incidents automatically — reducing mean time to response.",
    tags: ["Azure OpenAI", "Python", "AI Automation", "Azure Monitor", "HCL"],
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
      "Streamlit dashboard pulling live Azure Monitor metrics to surface resource health, anomaly detection alerts, and cost tracking — built with Python and the Azure SDK.",
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
    title: "AZ-Commits",
    subtitle: "AI Git Commit Generator",
    description:
      "CLI tool powered by Azure OpenAI that reads staged git changes and generates meaningful, conventional commit messages — cutting the time spent writing commit history.",
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
      "Flask application using Azure OpenAI to generate contextual email replies in seconds — trained on professional tone and format for business communication.",
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
      "AI-powered tool that extracts key information, summarises content, and answers questions from uploaded documents using Azure AI services.",
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
      "Full migration of a production e-commerce store to Azure — redesigned CI/CD pipelines, load balancing across availability zones, and a zero-downtime blue/green cutover.",
    tags: ["Azure", "DevOps", "CI/CD", "Load Balancing", "Migration", "eCommerce"],
    category: "Cloud",
    flagship: false,
    repos: [{ label: "GitHub", url: "https://github.com/amna-albasher/techgear-plus-azure-migration" }],
  },
];

const CATEGORIES = ["All", "DevOps", "AI", "Cloud"];

const skills = [
  {
    area: "DevOps & CI/CD",
    items: ["Azure DevOps", "GitHub Actions", "Jenkins", "ArgoCD", "GitOps", "Docker", "Helm", "Trivy", "SonarQube"],
  },
  {
    area: "Cloud & IaC",
    items: ["Azure (AKS, Functions, App Service, Monitor, OpenAI)", "Kubernetes", "Terraform", "Remote State", "Workspaces"],
  },
  {
    area: "AI & Automation",
    items: ["Azure OpenAI", "Claude API", "FastAPI", "Streamlit", "Multi-Agent Systems", "Python"],
  },
  {
    area: "E-Commerce & Web Ops",
    items: ["WooCommerce", "Shopify", "WordPress", "GA4", "GTM", "Elementor"],
  },
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
    <div style={{ background: "#F8F9FB", color: "#0F1117", fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }
        button { cursor: pointer; border: none; background: none; font-family: inherit; }
        .nav-link { font-size: 14px; font-weight: 500; color: #4B5260; transition: color 0.15s; padding: 6px 0; }
        .nav-link:hover { color: #0F1117; }
        .filter-btn { padding: 7px 18px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #E4E7ED; color: #4B5260; background: #FFFFFF; transition: all 0.15s; cursor: pointer; font-family: inherit; }
        .filter-btn:hover { border-color: #1A56DB; color: #1A56DB; }
        .filter-btn.active { background: #1A56DB; color: #fff; border-color: #1A56DB; }
        .card { background: #FFFFFF; border: 1px solid #E4E7ED; border-radius: 12px; padding: 28px; transition: box-shadow 0.2s, border-color 0.2s; display: flex; flex-direction: column; gap: 14px; }
        .card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); border-color: #C9CDD6; }
        .card.flagship { border-color: #1A56DB; border-width: 1.5px; }
        .tag { display: inline-block; background: #F1F3F7; color: #3D4452; font-size: 11px; font-weight: 500; padding: 3px 9px; border-radius: 4px; }
        .badge { display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; padding: 5px 12px; border-radius: 20px; border: 1px solid #E4E7ED; color: #4B5260; background: #FFFFFF; }
        .btn-primary { display: inline-flex; align-items: center; background: #1A56DB; color: #fff; font-size: 14px; font-weight: 600; padding: 11px 24px; border-radius: 8px; transition: background 0.15s; gap: 8px; }
        .btn-primary:hover { background: #3B6FE8; }
        .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: #FFFFFF; color: #0F1117; font-size: 14px; font-weight: 600; padding: 10px 22px; border-radius: 8px; border: 1px solid #E4E7ED; transition: border-color 0.15s; }
        .btn-secondary:hover { border-color: #C9CDD6; }
        .repo-link { font-size: 12px; font-weight: 500; color: #1A56DB; border: 1px solid #EBF0FF; background: #EBF0FF; padding: 4px 10px; border-radius: 5px; transition: background 0.15s; }
        .repo-link:hover { background: #dce8ff; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #1A56DB; font-family: 'JetBrains Mono', monospace; }
        .divider { height: 1px; background: #E4E7ED; }
        .skill-card { background: #FFFFFF; border: 1px solid #E4E7ED; border-radius: 10px; padding: 22px 24px; }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .cta-row { flex-direction: column !important; align-items: flex-start !important; }
          .contact-inner { flex-direction: column !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .stats-col { flex-direction: row !important; flex-wrap: wrap !important; }
          .stat-card { min-width: 120px !important; flex: 1 !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-nav { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(248,249,251,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E4E7ED" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 500, color: "#1A56DB" }}>
            amna.albasher
          </span>
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["about", "skills", "projects", "contact"].map((s) => (
              <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
          <a href="mailto:amnahashim.contact@gmail.com" className="btn-primary" style={{ fontSize: 13, padding: "8px 18px" }}>
            Get in touch
          </a>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", alignItems: "center", justifyContent: "center", width: 36, height: 36, border: "1px solid #E4E7ED", borderRadius: 6, background: "#FFFFFF" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="#0F1117" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav" style={{ borderTop: "1px solid #E4E7ED", background: "#FFFFFF", padding: "12px 24px" }}>
            {["about", "skills", "projects", "contact"].map((s) => (
              <button key={s} onClick={() => scrollTo(s)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 0", fontSize: 15, fontWeight: 500, color: "#4B5260", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="about" style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 80px" }}>
        <div className="hero-inner" style={{ display: "flex", alignItems: "flex-start", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p className="section-label" style={{ marginBottom: 20 }}>Cloud & DevOps Engineer</p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 20, color: "#0F1117" }}>
              Amna Albasher
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#4B5260", maxWidth: 520, marginBottom: 28 }}>
              5+ years building and managing enterprise Azure infrastructure and e-commerce platforms across the UAE — for clients including <strong style={{ color: "#0F1117" }}>Emirates Group</strong>, <strong style={{ color: "#0F1117" }}>Sharjah Co-op</strong>, and <strong style={{ color: "#0F1117" }}>Spinneys</strong>. Hands-on with Kubernetes, Terraform, CI/CD, and AI-powered cloud tooling.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {certs.map((c) => (
                <span key={c.code} className="badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L5 9L2 6" stroke="#1A56DB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {c.code} · {c.name}
                </span>
              ))}
            </div>

            <div className="cta-row" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="mailto:amnahashim.contact@gmail.com" className="btn-primary">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1.5 3h12l-6 5.5L1.5 3zm0 0v9h12V3" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                Email me
              </a>
              <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                LinkedIn
              </a>
              <a href="https://github.com/amna-albasher" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GitHub
              </a>
              <a href="https://drive.google.com/file/d/1ArLln7Lrnzsdyxap05zovsFEO7d-tfR0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download CV
              </a>
            </div>
          </div>

          <div className="stats-col" style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 200 }}>
            {[
              { value: "5+", label: "Years experience" },
              { value: "10+", label: "Enterprise clients" },
              { value: "3", label: "Azure certifications" },
              { value: "14", label: "Public projects" },
            ].map((s) => (
              <div key={s.label} className="stat-card" style={{ background: "#FFFFFF", border: "1px solid #E4E7ED", borderRadius: 10, padding: "18px 22px" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#0F1117", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#8892A0", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SKILLS */}
      <section id="skills" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <p className="section-label" style={{ marginBottom: 12 }}>Expertise</p>
        <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 36 }}>Technical Skills</h2>
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {skills.map((s) => (
            <div key={s.area} className="skill-card">
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: "#0F1117" }}>{s.area}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <p className="section-label" style={{ marginBottom: 12 }}>Work</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 32 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.01em" }}>Projects</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CATEGORIES.map((c) => (
              <button key={c} className={`filter-btn${filter === c ? " active" : ""}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
          {filtered.map((p) => (
            <div key={p.id} className={`card${p.flagship ? " flagship" : ""}`}>
              {p.flagship && (
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700, color: "#1A56DB", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1l1.18 2.4L9 3.82 6.9 5.87l.49 2.84L5 7.4 2.61 8.71l.49-2.84L1 3.82l2.82-.42L5 1z" fill="#1A56DB"/></svg>
                  Featured
                </div>
              )}
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4, color: "#0F1117" }}>{p.title}</h3>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#8892A0" }}>{p.subtitle}</p>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#4B5260", flex: 1 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tags.slice(0, 5).map((t) => <span key={t} className="tag">{t}</span>)}
                {p.tags.length > 5 && <span className="tag">+{p.tags.length - 5}</span>}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 4 }}>
                {p.repos.map((r) => (
                  <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" className="repo-link">{r.label} ↗</a>
                ))}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, fontWeight: 500, color: "#0E7A4A", border: "1px solid #E6F5EE", background: "#E6F5EE", padding: "4px 10px", borderRadius: 5 }}>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="https://github.com/amna-albasher" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: "#8892A0", fontFamily: "'JetBrains Mono', monospace" }}>
            View all repositories → github.com/amna-albasher
          </a>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <div className="contact-inner" style={{ background: "#FFFFFF", border: "1px solid #E4E7ED", borderRadius: 16, padding: "52px 48px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 32 }}>
          <div>
            <p className="section-label" style={{ marginBottom: 12 }}>Open to opportunities</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.01em", marginBottom: 12 }}>Let's work together</h2>
            <p style={{ fontSize: 15, color: "#4B5260", maxWidth: 400, lineHeight: 1.6 }}>
              Actively looking for Cloud/DevOps and E-Commerce roles across the UAE. Available for full-time positions.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="mailto:amnahashim.contact@gmail.com" className="btn-primary" style={{ justifyContent: "center" }}>
              amnahashim.contact@gmail.com
            </a>
            <a href="https://linkedin.com/in/amna-albasher-5139181aa" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ justifyContent: "center" }}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #E4E7ED", padding: "24px", textAlign: "center" }}>
        <p style={{ fontSize: 13, color: "#8892A0", fontFamily: "'JetBrains Mono', monospace" }}>
          © {new Date().getFullYear()} Amna Albasher · Dubai, UAE
        </p>
      </footer>
    </div>
  );
}
