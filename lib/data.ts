// All textual content below is reproduced VERBATIM from the latest resume PDF
// (public/Aryan Mohan AI Engineer Resume.pdf). Do not edit text — add structure only.

import type {
  Contact,
  Project,
  Experience,
  Education,
  Certification,
  SkillGroup,
  NavItem,
} from '@/types';

export const contact: Contact = {
  phone: '+91-6388416100',
  phoneHref: 'tel:+916388416100',
  email: 'aryanmohan1@outlook.com',
  linkedin: 'https://www.linkedin.com/in/aryanmohan1/',
  github: 'https://github.com/aryanmohan5',
};

// Resume lives in /public and is served alongside the site. Respect basePath
// so the link works both locally (empty base) and on GitHub Pages (/aryanmohan).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const resumeHref = `${BASE}/Aryan%20Mohan%20AI%20Engineer%20Resume.pdf`;

export const nav: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

// ===== Hero / Terminal =====
export const heroTerminal = {
  title: 'bash',
  lines: [
    { type: 'cmd', text: 'whoami' },
    {
      type: 'out',
      text: 'Full-Stack AI Engineer (Tech Lead) | LLM-as-a-Judge · Multi-Agent Workflows · Production AI',
    },
    { type: 'cmd', text: 'cat stack.txt' },
    {
      type: 'out',
      text: 'RAG | LangGraph | GPT-4o Vision | Node.js | Next.js | AWS | MongoDB Atlas',
    },
    { type: 'cursor', text: '' },
  ],
};

// ===== Profile Summary (synthesised strictly from resume phrasing) =====
export const profileSummary = {
  heading: 'PROFILE SUMMARY',
  body: 'Full-Stack AI Engineer functioning as Tech Lead at EdviseMe. Architect of a deterministic "LLM-as-a-Judge" grading engine (OpenAI Vector Store + Chain-of-Thought), server-authorized Razorpay webhook infrastructure, and zero-downtime MongoDB migrations across 1,244 legacy paths. Specialising in RAG, Multi-Agent Workflows, and production-grade AI systems for multi-tenant B2B SaaS.',
  coreStrengths:
    'RAG & Vector Stores | LLM-as-a-Judge / Agentic Evaluation | Chain-of-Thought & Multi-Agent Workflows | Full-Stack MERN + Next.js | AWS (ECS, S3, CodePipeline, IAM) | Multi-Tenant B2B SaaS Architecture',
};

// ===== Tech Stack — VERBATIM from resume =====
export const skillGroups: SkillGroup[] = [
  {
    label: 'AI & LLM Engineering',
    skills: [
      'RAG',
      'Vector Stores (OpenAI file_search)',
      'Prompt Engineering',
      'LLM-as-a-Judge / Agentic Evaluation',
      'Chain-of-Thought Prompting',
      'Multi-Agent Workflows',
      'OpenAI API',
      'GPT-4o Vision',
      'LangChain',
      'LangGraph',
      'Groq',
      'Hugging Face',
      'PyTorch',
    ],
  },
  {
    label: 'Backend Engineering',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'REST APIs',
      'Server-Sent Events (SSE)',
      'Webhooks (HMAC / idempotency)',
      'Auth (OAuth, JWT, OTP, HTTP-only cookies)',
      'Mongoose ODM',
      'RBAC',
    ],
  },
  {
    label: 'Frontend Engineering',
    skills: [
      'React 19',
      'Next.js (App Router)',
      'React Router v7',
      'Vite',
      'Tailwind CSS',
      'Axios Interceptors',
      'KaTeX',
      'Core Web Vitals / Lighthouse optimization',
    ],
  },
  {
    label: 'Data & Databases',
    skills: [
      'MongoDB Atlas',
      'Aggregation Pipelines',
      'BulkWrite',
      'Schema Design & Zero-Downtime Migrations',
      'Vector Databases',
      'SQL',
      'ETL Pipelines',
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],
  },
  {
    label: 'Cloud, DevOps & Product',
    skills: [
      'AWS (ECS, S3, CloudFront, ALB, CodeBuild, CodePipeline, Secrets Manager, IAM)',
      'GCP (Vertex AI)',
      'CI/CD',
      'Git',
      'Multi-Tenant B2B SaaS',
      'Google Tag Manager',
      'Razorpay Payments',
    ],
  },
];

// ===== Projects (verbatim from resume "Key Projects & Open Source") =====
export const projects: Project[] = [
  {
    id: 'incident-parser',
    icon: 'fa-robot',
    title: 'Intelligent Incident Parser',
    tech: 'Python | Streamlit | Groq',
    github: 'https://github.com/aryanmohan5/incident-parser.git',
    bullets: [
      'Automated parsing engine enforcing strict JSON-schema constraints to achieve 1–2 second inference latency for unstructured system alerts.',
    ],
    metrics: [
      { label: 'Latency: 1–2s', icon: 'fa-tachometer-alt' },
      { label: 'Strict JSON Schema', icon: 'fa-check-double' },
    ],
  },
  {
    id: 'weather-classification',
    icon: 'fa-cloud',
    title: 'Weather Image Classification',
    tech: 'PyTorch | ResNet-101 | XGBoost',
    github: 'https://github.com/aryanmohan5/Weather-Image-Classification.git',
    bullets: [
      'Fine-tuned a PyTorch ResNet-101 model to 92% accuracy across 11 classes, integrating XGBoost and a Genetic Algorithm for optimized feature selection and inference speed.',
    ],
    metrics: [
      { label: 'Accuracy: 92%', icon: 'fa-bullseye' },
      { label: 'Classes: 11', icon: 'fa-layer-group' },
      { label: 'ResNet-101 + XGBoost + GA', icon: 'fa-project-diagram' },
    ],
  },
  {
    id: 'text-to-image',
    icon: 'fa-robot',
    title: 'Text-to-Image Generator',
    tech: 'Python | Hugging Face | Stable Diffusion',
    github: 'https://github.com/aryanmohan5/Text-to-Image-Generation.git',
    bullets: [
      'Generative image pipeline within a 250+ contribution 2026 GitHub portfolio spanning LangGraph agentic workflows and automated AWS CI/CD pipelines.',
    ],
    metrics: [
      { label: '380+ GitHub contributions (2026)', icon: 'fa-code-branch' },
      { label: 'LangGraph · AWS CI/CD', icon: 'fa-wand-magic-sparkles' },
    ],
  },
];

// ===== Experience (verbatim from resume) =====
export const experiences: Experience[] = [
  {
    id: 'edviseme',
    role: 'Full-Stack AI Engineer (functioning as Tech Lead)',
    company: 'EdviseMe',
    duration: 'May 2026 – Present',
    location: 'Bengaluru → Remote, India',
    bullets: [
      'Architected a deterministic "LLM-as-a-Judge" grading engine (OpenAI Vector Store file_search + Chain-of-Thought), turning an expensive, hallucination-prone "Solver" into a low-cost "Evaluator" that eliminated math and score errors while cutting API cost and latency.',
      'Audited 6,368 records with a read-only GPT-4o Vision script, surfacing a ~55% data-integrity failure rate (3,490 null model answers, 3,605 null correct answers) and delivering a report that prevented live AI grading failures.',
      'Rebuilt payments from insecure client-side fulfillment into a server-authorized Razorpay webhook pipeline with HMAC validation and idempotent compare-and-set logic, closing a privilege-escalation exploit that let users self-grant top-tier access.',
      'Built full-stack revenue/entitlement infrastructure — Geo-IP INR/USD pricing, tiered subscriptions on a 3-hour rolling window, a token ledger, and a referral + admin dashboard that passed a 21/21 automated security test suite.',
      'Owned MongoDB data architecture: seeded the CBSE curriculum (48 subjects, 604 chapters, 3,495 subtopics) into Atlas and normalized 572+ corrupted documents across 1,244 legacy paths via zero-downtime BulkWrite.',
      'Acted as de facto Tech Lead: managed junior engineers, set sprint protocols, secured elevated AWS IAM access, and ran a 2-hour end-to-end architecture Knowledge Transfer (KT) session for incoming leadership; 380+ GitHub commits in 2026.',
    ],
    tags: [
      'LLM-as-a-Judge',
      'OpenAI Vector Store',
      'GPT-4o Vision',
      'Razorpay Webhooks',
      'MongoDB Atlas',
      'AWS IAM',
    ],
  },
  {
    id: 'armax',
    role: 'Founder & AI Architect (B2B GenAI Consultancy)',
    company: 'ARMAX Solutions',
    duration: 'May 2025 – Apr 2026',
    location: 'Remote',
    bullets: [
      'Founded a B2B generative-AI consultancy delivering LLM prototypes and advanced MERN-stack architectures for clients.',
    ],
    tags: ['LLM Prototyping', 'MERN Stack', 'B2B GenAI'],
  },
  {
    id: 'here-technologies',
    role: 'Web Scraping Intern',
    company: 'HERE Technologies (Volkswagen Group)',
    duration: 'Jun 2024 – Jul 2024',
    location: 'Remote',
    bullets: [
      'Automated large-scale geospatial data extraction with Python (Scrapy, Requests) to improve the spatial accuracy of downstream location services.',
    ],
    tags: ['Python', 'Scrapy', 'Requests', 'Geospatial'],
  },
  {
    id: 'plasmid',
    role: 'Data Science Intern',
    company: 'Plasmid Innovation Ltd.',
    duration: 'May 2024 – Jun 2024',
    location: 'Remote',
    bullets: [
      'Built data-cleaning pipelines and trained predictive ML models (Pandas, Scikit-learn, NumPy) to identify global purchasing trends.',
    ],
    tags: ['Pandas', 'Scikit-learn', 'NumPy', 'Predictive ML'],
  },
];

// ===== Education =====
export const education: Education = {
  institution: 'University of Petroleum and Energy Studies (UPES)',
  location: 'Dehradun, India',
  degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
  duration: 'Aug 2021 – May 2025',
  specializations: [
    'Machine Learning & Artificial Intelligence',
    'Deep Learning & Computer Vision',
    'Data Analytics & Business Intelligence',
    'Data Engineering Foundations',
    'Web Scraping & Automation Scripting',
    'Software Development & Scripting',
    'Web Development (Front-End)',
  ],
  coursework: [
    'Neural Networks & Deep Learning',
    'Data Mining & Knowledge Discovery',
    'AI Ethics & Responsible AI',
    'Cloud Computing & Distributed Systems',
    'Python Programming & Software Development',
    'Statistical Learning & Data Modeling',
  ],
};

// ===== Certifications (resume lists only AI-102 in the latest version) =====
export const certifications: Certification[] = [
  {
    id: 'ai-102',
    title: 'Microsoft Certified: Azure AI Engineer Associate (AI-102)',
    issuer: 'Microsoft',
    date: '2024',
    description:
      'Industry-recognized Microsoft certification validating end-to-end design and implementation of Azure AI solutions.',
    bullets: [
      'Azure Cognitive Services implementation',
      'Building AI solutions with Azure Machine Learning',
      'Natural language processing with Azure',
    ],
  },
];
