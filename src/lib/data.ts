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
  shortName: "Alvaro",
  initials: "AF",
  title: "Frontend & Backend Developer | AI Enthusiast",
  email: "vloxmmm@gmail.com",
  location: "West Java, Indonesia",
  timezone: "WIB (UTC+7)",
  available: true,
  resumeUrl: "/resume.pdf",
  bio: "Hi, I'm Alvaro. I am an 11th-grade high school student from Indonesia with a deep passion for full-stack web development, coding, data analysis, and computational problem-solving. I don't just build the user-facing frontend; I also work behind the scenes on backend development, leveraging AI as my second hand to optimize my workflow and build smarter applications. Alongside my studies, I serve as the chairperson of Sekbid 8 in my school's OSIS organization, leading initiatives centered on technology and English development.",
  url: "https://varoo-web.vercel.app",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Naixoo1", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/alvarofebryan2501", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com/naixxynn", icon: "instagram" },
];

// ===== SKILLS DATA =====

export const skills: Record<string, Skill[]> = {
  "Core Development": [
    { name: "Frontend Development" },
    { name: "Backend Development" },
    { name: "Web Design" },
  ],
  "Specialized Skills": [
    { name: "Data Analysis" },
    { name: "Computational Problem Solving" },
    { name: "Mental Mathematics" },
  ],
  "Tools": [
    { name: "AI-Assisted Development" },
    { name: "Spreadsheet Architecture" },
  ],
};

export const globalMetrics: Metric[] = [
  { value: "1", label: "OSIS Sekbid Chairperson" },
  { value: "5", suffix: "+", label: "Full-Stack & Data Projects Developed" },
  { value: "3", label: "Academic Years Tracked via Custom Tools" },
  { value: "11", suffix: "th", label: "Grade Tech Innovator" },
];

// ===== PROJECT DATA =====

export const projects: Project[] = [
  {
    slug: "advanced-student-progress-tracker",
    title: "Advanced Student Progress Tracker",
    subtitle: "Comprehensive academic progress and interest tracking system for guidance counselors",
    description: "Designed and developed a comprehensive spreadsheet tracking template for school guidance counselors to monitor student academic progress and future interests over a three-year span. Built using advanced spreadsheet formulas, relational lookups, and dynamic dashboard views to summarize data efficiently.",
    thumbnail: "/projects/tracker-thumb.jpg",
    heroImage: "/projects/tracker-hero.jpg",
    client: "School Guidance Department",
    role: "Spreadsheet Architect & Developer",
    startDate: "2024-09",
    endDate: "2024-11",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "Spreadsheet Architecture", category: "backend" },
      { name: "Data Analysis", category: "backend" },
      { name: "UX Design", category: "design" },
    ],
    highlights: [
      "Streamlined academic tracking for 3 grades of high school students",
      "Designed automated charts visualizing student career and university interests",
      "Implemented robust data validation to eliminate manual input errors by 90%",
    ],
    metrics: [
      { value: "3", suffix: " Years", label: "Timeline Tracked" },
      { value: "90", suffix: "%", label: "Error Reduction" },
      { value: "100", suffix: "%", label: "Adoption Rate" },
      { value: "300", suffix: "+", label: "Students Monitored" },
    ],
    timeline: [
      {
        id: "t1",
        title: "Requirement Gathering",
        description: "Interviewed guidance counselors to understand key indicators, tracking needs, and current pain points in excel templates.",
        date: "2024-09",
        category: "milestone",
        icon: "search",
      },
      {
        id: "t2",
        title: "Data Architecture Design",
        description: "Created relational schema across student personal details, grades, and interest surveys using advanced indexing formulas.",
        date: "2024-10",
        category: "milestone",
        icon: "database",
      },
      {
        id: "t3",
        title: "Dashboard & Analytics",
        description: "Built dynamic chart panels showing aggregated trends of student career paths and progress alerts.",
        date: "2024-11",
        category: "outcome",
        icon: "rocket",
      },
    ],
  },
  {
    slug: "archidelle-event-coordination-framework",
    title: "Archidelle Event Coordination Framework",
    subtitle: "Scheduling and operational timeline for a major collaborative English Festival & Kartini Day event",
    description: "Coordinated the scheduling, structure, and operational timeline for \"Archidelle,\" a major collaborative school event integrating the English Festival and Kartini Day celebrations. Built timeline tracking systems and coordinated cross-functional student committees to ensure clean execution.",
    thumbnail: "/projects/archidelle-thumb.jpg",
    heroImage: "/projects/archidelle-hero.jpg",
    client: "OSIS Student Organization",
    role: "Event Coordinator & Planner",
    startDate: "2025-02",
    endDate: "2025-04",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "Project Management", category: "backend" },
      { name: "Timeline Design", category: "design" },
      { name: "Coordination", category: "frontend" },
    ],
    highlights: [
      "Successfully unified the English Festival and Kartini Day celebrations into a single framework",
      "Coordinated a multi-tier operational timeline across 5 school student sub-committees",
      "Ensured flawless execution with 100% schedule adherence on event day",
    ],
    metrics: [
      { value: "2", label: "Festivals Unified" },
      { value: "5", label: "Sub-Committees Led" },
      { value: "100", suffix: "%", label: "Schedule Adherence" },
      { value: "500", suffix: "+", label: "Attendees Engaged" },
    ],
    timeline: [
      {
        id: "e1",
        title: "Event Conceptualization",
        description: "Drafted proposal integrating English Festival and Kartini Day themes into a cohesive event named Archidelle.",
        date: "2025-02",
        category: "milestone",
        icon: "layout",
      },
      {
        id: "e2",
        title: "Timeline Mapping",
        description: "Created Gantt-style planning templates and master run sheet for the event day detailing minute-by-minute shifts.",
        date: "2025-03",
        category: "milestone",
        icon: "calendar",
      },
      {
        id: "e3",
        title: "Event Day Coordination",
        description: "Managed stage timing, speaker slots, and contest evaluations in real-time, resulting in a highly praised school event.",
        date: "2025-04",
        category: "outcome",
        icon: "rocket",
      },
    ],
  },
  {
    slug: "ai-ethics-in-education",
    title: "AI Ethics in Education",
    subtitle: "Innovation concept paper prepared for the Youth Global Innovation Series",
    description: "Drafted an innovation concept paper focusing on AI ethics in education, prepared as part of an essay application for the Youth Global Innovation Series. Explored the balance between AI tool utilization and academic integrity in modern secondary education.",
    thumbnail: "/projects/ethics-thumb.jpg",
    heroImage: "/projects/ethics-hero.jpg",
    client: "Youth Global Innovation Series",
    role: "Independent Researcher & Author",
    startDate: "2025-05",
    endDate: "2025-06",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "Research & Writing", category: "backend" },
      { name: "AI Ethics", category: "ai-ml" },
      { name: "Policy Proposal", category: "design" },
    ],
    highlights: [
      "Researched student attitudes towards generative AI tools in high school education",
      "Proposed a structured framework for responsible AI adoption in classroom settings",
      "Drafted a comprehensive academic paper submitted to the global youth innovation panel",
    ],
    metrics: [
      { value: "1", label: "Comprehensive Proposal" },
      { value: "100", suffix: "%", label: "Independent Research" },
      { value: "1", suffix: "st", label: "Paper Version Completed" },
      { value: "12", suffix: " Pages", label: "Detailed Policy Frame" },
    ],
    timeline: [
      {
        id: "p1",
        title: "Literature Review",
        description: "Analyzed existing studies on AI integration in K-12 education, focusing on cognitive outcomes and ethics.",
        date: "2025-05",
        category: "milestone",
        icon: "search",
      },
      {
        id: "p2",
        title: "Framework Drafting",
        description: "Created the responsible adoption matrix for educators to define acceptable AI utilization boundaries.",
        date: "2025-05",
        category: "milestone",
        icon: "brain",
      },
      {
        id: "p3",
        title: "Proposal Submission",
        description: "Polished the final paper and concept deck for submission to the Youth Global Innovation Series.",
        date: "2025-06",
        category: "outcome",
        icon: "check-circle",
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
