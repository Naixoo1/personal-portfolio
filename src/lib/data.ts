// ===== DATA TYPES =====

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  client: string;
  role: string;
  startDate: string;
  endDate: string;
  status: "completed" | "in-progress";
  tags: TechTag[];
  highlights: string[];
  metrics: Metric[];
  timeline: TimelineEvent[];
  isFeatured: boolean;
}

export interface TechTag {
  name: string;
  category: "frontend" | "backend" | "ai-ml" | "devops" | "design";
}

export interface Metric {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "milestone" | "challenge" | "outcome";
  icon: string;
}

export interface Skill {
  name: string;
  category?: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// ===== SITE CONFIGURATION =====

export const siteConfig = {
  name: "Alvaro Febryan Angkawijaya",
  shortName: "Alvaro Febryan",
  initials: "AF",
  title: "Senior Full-Stack & AI Engineer",
  email: "hello@alvarofebryan.dev",
  location: "San Francisco, CA",
  timezone: "PST (UTC-8)",
  available: true,
  resumeUrl: "/resume.pdf",
  bio: "I architect intelligent systems that scale. With 7+ years building production applications across fintech, healthtech, and AI, I blend deep technical expertise with a product-first mindset to deliver solutions that move the needle.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
];

// ===== SKILLS DATA =====

export const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "React / Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "Three.js" },
    { name: "GraphQL" },
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Python" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "gRPC" },
    { name: "Prisma" },
  ],
  "AI / ML": [
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "LangChain" },
    { name: "OpenAI API" },
    { name: "Hugging Face" },
    { name: "MLflow" },
  ],
  DevOps: [
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "AWS" },
    { name: "GCP" },
    { name: "Terraform" },
    { name: "CI/CD" },
  ],
};

export const globalMetrics: Metric[] = [
  { value: "7", suffix: "+", label: "Years in Production" },
  { value: "25", suffix: "+", label: "Systems Delivered" },
  { value: "99.9", suffix: "%", label: "Uptime Achieved" },
  { value: "3", label: "Patents Filed" },
];

// ===== PROJECT DATA =====

export const projects: Project[] = [
  {
    slug: "ai-powered-analytics-dashboard",
    title: "AI-Powered Analytics Dashboard",
    subtitle:
      "Real-time predictive analytics platform processing 2M+ events/day for enterprise clients",
    description:
      "Architected a full-stack analytics platform with real-time data pipelines, predictive ML models, and a high-performance dashboard. The system processes over 2 million events daily, delivering actionable forecasts with sub-second query latency. Engineered a custom WebGL charting engine capable of rendering 100K+ data points at 60fps without frame degradation.",
    thumbnail: "/projects/analytics-thumb.jpg",
    heroImage: "/projects/analytics-hero.jpg",
    client: "TechCorp Inc.",
    role: "Lead Engineer",
    startDate: "2024-01",
    endDate: "2024-08",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "React", category: "frontend" },
      { name: "Python", category: "backend" },
      { name: "TensorFlow", category: "ai-ml" },
      { name: "PostgreSQL", category: "backend" },
      { name: "Kubernetes", category: "devops" },
    ],
    highlights: [
      "Reduced query latency from 4s to 200ms with custom caching layer",
      "Trained LSTM model achieving 94% accuracy in demand forecasting",
      "Designed horizontal scaling architecture handling 10x traffic spikes",
    ],
    metrics: [
      { value: "40", suffix: "%", label: "Faster Queries" },
      { value: "2M", suffix: "+", label: "Daily Events" },
      { value: "94", suffix: "%", label: "ML Accuracy" },
      { value: "99.9", suffix: "%", label: "Uptime" },
    ],
    timeline: [
      {
        id: "a1",
        title: "Discovery & Architecture",
        description:
          "Conducted stakeholder interviews, mapped data flows, and designed the event-driven architecture. Selected Kafka for stream processing and PostgreSQL with TimescaleDB for time-series storage.",
        date: "2024-01",
        category: "milestone",
        icon: "search",
      },
      {
        id: "a2",
        title: "Data Pipeline MVP",
        description:
          "Built the real-time ingestion pipeline processing raw events through validation, enrichment, and aggregation stages. Achieved 50K events/sec throughput.",
        date: "2024-03",
        category: "milestone",
        icon: "database",
      },
      {
        id: "a3",
        title: "Scaling Challenge",
        description:
          "Hit memory ceiling at 500K concurrent connections. Redesigned connection pooling and implemented horizontal pod autoscaling with custom metrics.",
        date: "2024-04",
        category: "challenge",
        icon: "alert-triangle",
      },
      {
        id: "a4",
        title: "ML Model Integration",
        description:
          "Trained and deployed LSTM model for demand forecasting. Built A/B testing framework to validate predictions against historical data.",
        date: "2024-06",
        category: "milestone",
        icon: "brain",
      },
      {
        id: "a5",
        title: "Production Launch",
        description:
          "Deployed to production serving 200+ enterprise clients. Achieved 99.9% uptime in first 90 days with zero data loss incidents.",
        date: "2024-08",
        category: "outcome",
        icon: "rocket",
      },
    ],
  },
  {
    slug: "healthcare-ai-assistant",
    title: "Healthcare AI Assistant",
    subtitle:
      "HIPAA-compliant conversational AI for patient triage and clinical decision support",
    description:
      "Designed and engineered an AI-powered medical assistant that streamlines patient intake, performs evidence-based triage, and delivers clinical decision support. Integrated with legacy EHR platforms through custom HL7 FHIR middleware, processing natural language symptoms into structured clinical data.",
    thumbnail: "/projects/healthcare-thumb.jpg",
    heroImage: "/projects/healthcare-hero.jpg",
    client: "MedFlow Health",
    role: "Senior AI Engineer",
    startDate: "2023-06",
    endDate: "2024-02",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "Next.js", category: "frontend" },
      { name: "LangChain", category: "ai-ml" },
      { name: "Python", category: "backend" },
      { name: "AWS", category: "devops" },
      { name: "GPT-4", category: "ai-ml" },
    ],
    highlights: [
      "Reduced average triage time from 12 minutes to 3 minutes",
      "Built RAG pipeline over 50K+ medical documents with 97% retrieval accuracy",
      "Achieved HIPAA and SOC2 compliance with end-to-end encryption",
    ],
    metrics: [
      { value: "75", suffix: "%", label: "Faster Triage" },
      { value: "97", suffix: "%", label: "Retrieval Accuracy" },
      { value: "50K", suffix: "+", label: "Documents Indexed" },
      { value: "0", label: "Security Incidents" },
    ],
    timeline: [
      {
        id: "b1",
        title: "Compliance Architecture",
        description:
          "Designed HIPAA-compliant infrastructure with encrypted data stores, audit logging, and role-based access control across all service boundaries.",
        date: "2023-06",
        category: "milestone",
        icon: "shield",
      },
      {
        id: "b2",
        title: "RAG Pipeline Development",
        description:
          "Built retrieval-augmented generation pipeline with custom embeddings trained on medical literature. Optimized chunk sizing and overlap for clinical context.",
        date: "2023-09",
        category: "milestone",
        icon: "brain",
      },
      {
        id: "b3",
        title: "EHR Integration Hurdle",
        description:
          "Navigated complex HL7 FHIR integration with legacy EHR systems. Built custom middleware to translate between proprietary formats.",
        date: "2023-11",
        category: "challenge",
        icon: "alert-triangle",
      },
      {
        id: "b4",
        title: "Clinical Validation",
        description:
          "Partnered with 15 physicians for clinical validation. Iteratively refined prompts and retrieval to achieve 97% accuracy on standardized test cases.",
        date: "2024-01",
        category: "outcome",
        icon: "check-circle",
      },
    ],
  },
  {
    slug: "fintech-payment-platform",
    title: "FinTech Payment Platform",
    subtitle:
      "High-throughput payment processing system handling $50M+ in monthly transactions",
    description:
      "Engineered a payment processing platform from first principles — credit cards, ACH, wire transfers, and cryptocurrency. Microservices architecture for independent scaling and fault isolation. Real-time fraud detection using gradient-boosted ensemble models trained on 2M+ historical transactions.",
    thumbnail: "/projects/fintech-thumb.jpg",
    heroImage: "/projects/fintech-hero.jpg",
    client: "PayFlow Technologies",
    role: "Principal Engineer",
    startDate: "2023-01",
    endDate: "2023-12",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "Node.js", category: "backend" },
      { name: "React", category: "frontend" },
      { name: "Redis", category: "backend" },
      { name: "Docker", category: "devops" },
      { name: "Terraform", category: "devops" },
    ],
    highlights: [
      "Processed $50M+ in monthly transactions with 99.99% success rate",
      "Built real-time fraud detection reducing chargebacks by 60%",
      "Designed idempotent payment API with exactly-once semantics",
    ],
    metrics: [
      { value: "$50M", suffix: "+", label: "Monthly Volume" },
      { value: "99.99", suffix: "%", label: "Success Rate" },
      { value: "60", suffix: "%", label: "Fewer Chargebacks" },
      { value: "<100", suffix: "ms", label: "API Latency" },
    ],
    timeline: [
      {
        id: "c1",
        title: "System Design",
        description:
          "Designed event-sourced microservices architecture with CQRS pattern. Defined service boundaries around payments, accounts, fraud, and reporting.",
        date: "2023-01",
        category: "milestone",
        icon: "layout",
      },
      {
        id: "c2",
        title: "Payment Core",
        description:
          "Built idempotent payment processing engine with saga pattern for distributed transactions. Integrated Stripe, Plaid, and custom ACH processor.",
        date: "2023-04",
        category: "milestone",
        icon: "credit-card",
      },
      {
        id: "c3",
        title: "Fraud Detection Engine",
        description:
          "Developed real-time fraud scoring using gradient boosting ensemble. Trained on 2M+ historical transactions with 98.5% precision.",
        date: "2023-07",
        category: "milestone",
        icon: "shield",
      },
      {
        id: "c4",
        title: "Scale & Launch",
        description:
          "Launched to production processing $50M+/month. Zero downtime deployment with blue-green strategy. System handles 3x peak load during month-end.",
        date: "2023-12",
        category: "outcome",
        icon: "rocket",
      },
    ],
  },
];

// ===== HELPER FUNCTIONS =====

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.isFeatured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
