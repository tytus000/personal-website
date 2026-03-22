export const siteConfig = {
  name: "Krzysztof Plutecki",
  initials: "KP",
  role: "Software Developer & AI Solutions Architect",
  tagline: "Building enterprise-grade AI solutions",
  email: "hello@plutecki.dev",
  location: "Poland",
  social: {
    github: "https://github.com/plutecki",
    linkedin: "https://linkedin.com/in/plutecki",
  },
};

export const aboutText = [
  "I specialize in software development, project management, and crafting custom enterprise-grade AI solutions that drive real business value.",
  "With a deep understanding of both technical architecture and business strategy, I bridge the gap between complex technology and practical implementation.",
  "I thrive on solving problems that others find too complex — from building scalable distributed systems to designing AI pipelines that transform how organizations operate.",
];

export const skills = [
  "TypeScript",
  "Python",
  "React / Next.js",
  "Node.js",
  "AI/ML Solutions",
  "LLM Integration",
  "Cloud Architecture",
  "DevOps / CI/CD",
  "Project Management",
  "System Design",
  "PostgreSQL",
  "Docker / K8s",
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "AI Solutions Architect",
    company: "Enterprise AI Consultancy",
    period: "2023 — Present",
    description:
      "Designing and implementing custom enterprise-grade AI solutions. Leading cross-functional teams to deliver LLM-powered products that automate complex business workflows.",
    technologies: ["Python", "LangChain", "OpenAI", "AWS", "Docker"],
  },
  {
    title: "Senior Software Developer",
    company: "Tech Company",
    period: "2021 — 2023",
    description:
      "Led development of full-stack applications serving thousands of users. Architected microservices infrastructure and mentored junior developers.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Software Developer",
    company: "Software Agency",
    period: "2019 — 2021",
    description:
      "Built custom web applications and internal tools for enterprise clients. Focused on performance optimization and clean architecture.",
    technologies: ["JavaScript", "Vue.js", "Python", "Django", "MySQL"],
  },
];

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  year: string;
  category: string;
}

export const projects: Project[] = [
  {
    slug: "ai-document-pipeline",
    title: "AI Document Pipeline",
    summary:
      "Enterprise document processing system powered by LLMs — automated extraction, classification, and routing of business documents.",
    description:
      "Built an end-to-end document intelligence platform that processes thousands of documents daily. The system uses a combination of OCR, custom-trained models, and LLM chains to extract structured data from unstructured documents, classify them by type, and route them to appropriate business workflows.",
    technologies: ["Python", "LangChain", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Multi-format document ingestion (PDF, images, emails)",
      "Custom LLM chains for data extraction",
      "Real-time processing dashboard",
      "99.2% classification accuracy",
      "Auto-scaling worker architecture",
    ],
    year: "2024",
    category: "AI / ML",
  },
  {
    slug: "enterprise-dashboard",
    title: "Enterprise Analytics Dashboard",
    summary:
      "Real-time analytics platform for monitoring business KPIs with customizable widgets and automated reporting.",
    description:
      "Designed and built a comprehensive analytics dashboard serving 500+ daily active users across multiple departments. Features real-time data streaming, customizable widget layouts, and automated report generation with export capabilities.",
    technologies: ["TypeScript", "React", "Next.js", "D3.js", "WebSocket", "AWS"],
    features: [
      "Real-time data streaming via WebSockets",
      "Drag-and-drop widget customization",
      "Automated PDF report generation",
      "Role-based access control",
      "Multi-tenant architecture",
    ],
    year: "2023",
    category: "Full-Stack",
  },
  {
    slug: "devops-automation",
    title: "DevOps Automation Suite",
    summary:
      "CI/CD pipeline automation toolkit that reduced deployment time by 80% and eliminated manual configuration errors.",
    description:
      "Created a comprehensive DevOps automation suite that standardized deployment processes across 20+ microservices. Includes infrastructure-as-code templates, automated testing pipelines, and monitoring integrations.",
    technologies: ["Go", "Terraform", "GitHub Actions", "Docker", "Kubernetes", "Prometheus"],
    features: [
      "One-click deployment pipelines",
      "Infrastructure-as-code templates",
      "Automated rollback mechanisms",
      "Integrated monitoring & alerting",
      "Cost optimization tooling",
    ],
    year: "2023",
    category: "DevOps",
  },
  {
    slug: "ai-chatbot-platform",
    title: "AI Chatbot Platform",
    summary:
      "White-label conversational AI platform enabling businesses to deploy custom chatbots trained on their knowledge base.",
    description:
      "Architected a multi-tenant chatbot platform that allows businesses to create, train, and deploy AI assistants using their own documentation and data. Features include RAG-based retrieval, conversation analytics, and seamless website integration.",
    technologies: ["Python", "TypeScript", "Next.js", "Pinecone", "OpenAI", "Stripe"],
    features: [
      "RAG-based knowledge retrieval",
      "Multi-language support",
      "Conversation analytics dashboard",
      "Embeddable widget SDK",
      "Usage-based billing integration",
    ],
    year: "2024",
    category: "AI / ML",
  },
];
