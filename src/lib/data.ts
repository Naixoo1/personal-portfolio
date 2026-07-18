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
  schoolEmail: "alvaro.febryan@sma-yosuka.sch.id",
  location: "West Karawang, West Java, Indonesia",
  timezone: "WIB (UTC+7)",
  available: true,
  resumeUrl: "/resume.pdf",
  bio: "Hi, I'm Alvaro. I am an 11th-grade student at SMA Katolik Yos Sudarso from Indonesia with a deep passion for full-stack web development, coding, data analysis, and computational problem-solving. I don't just build the user-facing frontend; I also work behind the scenes on backend architecture, leveraging AI as my second hand to optimize my workflow and scale digital experiences. Alongside my studies, I serve as the chairperson/head of the technology and English development division (Sekbid 8) within my school's OSIS organization. In this role, I manage our public digital footprint on YouTube and Spotify, and handle the technical infrastructure and live streaming setups for major school events.",
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
    { name: "Full-Stack Development" },
    { name: "Software Development" },
    { name: "Web Architecture" },
  ],
  "Specialized Skills": [
    { name: "Data Analysis" },
    { name: "Computational Problem Solving" },
    { name: "Coding Experience" },
  ],
  "Tools & Methods": [
    { name: "AI-Assisted Development" },
    { name: "Cloud Deployment" },
  ],
  "Languages": [
    { name: "Indonesian (Native)" },
    { name: "English (Professional Working)" },
  ],
  "Certifications": [
    { name: "WordPress Website Training Program" },
    { name: "What Is Generative AI?" },
    { name: "Vibe Coding Study Jam (#JuaraVibeCoding)" },
  ],
};

export const globalMetrics: Metric[] = [
  { value: "1", label: "OSIS Technology Division Head" },
  { value: "5", suffix: "+", label: "Full-Stack & Data Projects Developed" },
  { value: "3", label: "Academic Years Tracked via Custom Tools" },
  { value: "11", suffix: "th", label: "Grade Tech Innovator" },
];

// ===== PROJECT DATA =====

export const projects: Project[] = [
  {
    slug: "cosmic-ops-astronomy-game",
    title: "Cosmic Ops",
    subtitle: "Standalone astronomy game application deployed on Cloud Run",
    description: "Developed a standalone astronomy game application and deployed it seamlessly on Cloud Run for the Google Developers Vibe Coding event (#JuaraVibeCoding). Built with modern frontend elements, engaging mechanics, and automated container deployment.",
    thumbnail: "/projects/cosmic-ops-thumb.jpg",
    heroImage: "/projects/cosmic-ops-hero.jpg",
    client: "Google Developers Vibe Coding Event",
    role: "Full-Stack Developer",
    startDate: "2026-06",
    endDate: "2026-06",
    status: "completed",
    isFeatured: true,
    tags: [
      { name: "Software Development", category: "backend" },
      { name: "Cloud Run", category: "devops" },
      { name: "Game Logic", category: "frontend" },
    ],
    highlights: [
      "Successfully built and deployed an interactive astronomy game",
      "Containerized the app and deployed it on Google Cloud Run for scalability",
      "Participated and presented at the Google Developers Vibe Coding event",
    ],
    metrics: [
      { value: "100", suffix: "%", label: "Cloud Run Uptime" },
      { value: "1", label: "Game Application" },
      { value: "1", label: "Event Submission" },
      { value: "0", suffix: " Downtime", label: "Container Lifecycle" },
    ],
    timeline: [
      {
        id: "c1",
        title: "Game Architecture",
        description: "Designed the interactive flow and astronomy question database for the game.",
        date: "2026-06-01",
        category: "milestone",
        icon: "layout",
      },
      {
        id: "c2",
        title: "Containerization",
        description: "Wrote the Dockerfile and configured container specifications for local testing.",
        date: "2026-06-10",
        category: "milestone",
        icon: "database",
      },
      {
        id: "c3",
        title: "Cloud Run Deployment",
        description: "Deployed the game on Google Cloud Run and validated production traffic during the event.",
        date: "2026-06-15",
        category: "outcome",
        icon: "rocket",
      },
    ],
  },
  {
    slug: "advanced-student-progress-tracker",
    title: "Advanced Student Progress Tracker",
    subtitle: "Comprehensive academic progress and interest tracking system for guidance counselors",
    description: "Designed and developed a comprehensive spreadsheet tracking template for school guidance counselors to monitor student academic progress and future interests over a three-year span. Built using advanced spreadsheet formulas, relational lookups, and dynamic dashboard views to summarize data efficiently.",
    thumbnail: "/projects/tracker-thumb.jpg",
    heroImage: "/projects/tracker-hero.jpg",
    client: "School Guidance Department",
    role: "Spreadsheet Architect & Developer",
    startDate: "2026-04",
    endDate: "2026-05",
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
        title: "Centralized Dashboard & Baseline Framework",
        description: "Built the baseline spreadsheet framework, engineering a centralized dashboard that tracks student profiles, report cards, creative hobbies, core skills, and targeted university majors.",
        date: "2026-04-15",
        category: "milestone",
        icon: "layout",
      },
      {
        id: "t2",
        title: "Class Placement Sorting Engine",
        description: "Designed and deployed an advanced sorting engine within the system to map student performance, interests, and skills directly to their optimal 11th-grade class placements.",
        date: "2026-05-16",
        category: "milestone",
        icon: "brain",
      },
      {
        id: "t3",
        title: "Faculty Dashboard Integration",
        description: "Expanded the platform by integrating a secondary faculty dashboard; this system standardizes teacher evaluations, vetting student academic aptitude against specific subject prerequisites to formally clear them for the next grade level.",
        date: "2026-05-25",
        category: "outcome",
        icon: "check-circle",
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
