// All textual content below is reproduced VERBATIM from the latest resume PDF.
// Do not edit text. Add structure only.

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
      text: 'Data Scientist & AI Engineer | LLMs · RAG · Agentic Workflows | Production-Grade AI Systems',
    },
    { type: 'cmd', text: 'cat skills.txt' },
    {
      type: 'out',
      text: 'LangGraph | LangChain | Vector Stores | PyTorch | Python | AWS | Next.js',
    },
    { type: 'cursor', text: '' },
  ],
};

// ===== Profile Summary =====
export const profileSummary = {
  heading: 'PROFILE SUMMARY',
  body: 'Data Scientist and AI Engineer specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and agentic workflows. Proven track record of architecting cost-efficient, production-grade AI systems and deploying deterministic, low-latency machine learning infrastructure.',
  coreStrengths:
    'Large Language Models (LLMs) | Retrieval-Augmented Generation (RAG) | Agentic Workflows | Production-Grade AI Systems | Vector Stores & LangGraph | Low-Latency ML Infrastructure',
};

// ===== Tech Stack — VERBATIM from resume =====
export const skillGroups: SkillGroup[] = [
  {
    label: 'AI & Data Science',
    skills: [
      'LangGraph',
      'LangChain',
      'LLMs (OpenAI, Groq)',
      'RAG',
      'Vector Stores',
      'PyTorch',
      'Scikit-learn',
      'Hugging Face',
    ],
  },
  {
    label: 'Backend & Infrastructure',
    skills: [
      'LangGraph',
      'LangChain',
      'LLMs (Groq, OpenAI)',
      'RAG',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Hugging Face',
    ],
  },
  {
    label: 'Database & Cloud',
    skills: [
      'Node.js',
      'Express',
      'Python',
      'AWS (ECS, S3, ALB, CodeBuild)',
      'REST APIs',
    ],
  },
  {
    label: 'Frontend Technologies',
    skills: [
      'React 19',
      'Next.js',
      'Vite',
      'Tailwind CSS',
      'KaTeX/React-Markdown',
    ],
  },
];

// ===== Projects (resume order: most recent first) =====
export const projects: Project[] = [
  {
    id: 'incident-parser',
    icon: 'fa-robot',
    title: 'Intelligent Incident Parser (LLM/Groq + Streamlit)',
    tech: 'Python | Streamlit | Groq',
    date: 'Dec 2025',
    github: 'https://github.com/aryanmohan5/incident-parser.git',
    bullets: [
      'Architected an automated parsing engine utilizing Python and the Groq API, achieving a 1–2 second inference latency for processing unstructured system alerts.',
      'Engineered strict prompt constraints and hallucination controls to ensure 100% deterministic JSON schema formatting for relational database integration.',
    ],
    metrics: [
      { label: 'Latency: 1–2s', icon: 'fa-tachometer-alt' },
      { label: 'Deterministic JSON: 100%', icon: 'fa-check-double' },
    ],
  },
  {
    id: 'weather-classification',
    icon: 'fa-cloud',
    title: 'Weather Image Classification (Deep Learning/CV)',
    tech: 'PyTorch | ResNet-101 | XGBoost',
    date: 'Nov 2024',
    github: 'https://github.com/aryanmohan5/Weather-Image-Classification.git',
    bullets: [
      'Achieved 92% accuracy across 11 classes by fine-tuning a PyTorch ResNet-101 deep learning model for computer vision.',
      'Implemented a Genetic Algorithm for advanced feature selection and integrated XGBoost, significantly optimizing model inference and performance.',
    ],
    metrics: [
      { label: 'Accuracy: 92%', icon: 'fa-bullseye' },
      { label: 'Classes: 11', icon: 'fa-layer-group' },
      { label: 'Model: ResNet-101 + XGBoost', icon: 'fa-project-diagram' },
    ],
  },
  {
    id: 'text-to-image',
    icon: 'fa-robot',
    title: 'Text-to-Image Generator (Generative AI)',
    tech: 'Python | Hugging Face | Stable Diffusion',
    date: 'Jan 2024',
    github: 'https://github.com/aryanmohan5/Text-to-Image-Generation.git',
    bullets: [
      'Developed a low-latency Generative AI pipeline leveraging Stable Diffusion and Hugging Face to synthesize high-resolution images from natural language prompts.',
      'Optimized model inference and GPU utilization to improve generation speed while maintaining high image fidelity.',
    ],
    metrics: [
      { label: 'Stable Diffusion', icon: 'fa-wand-magic-sparkles' },
      { label: 'High-Resolution Output', icon: 'fa-image' },
    ],
  },
];

// ===== Experience =====
export const experiences: Experience[] = [
  {
    id: 'edviseme',
    role: 'Full Stack AI Engineer',
    company: 'EdviseMe',
    duration: 'May 2026 – Present',
    location: 'Bengaluru, Karnataka',
    bullets: [
      'Architected an "LLM-as-a-Judge" grading engine and asynchronous job-queue using Vector Stores, LangGraph, and Chain-of-Thought prompting, permanently eliminating hallucinations while significantly reducing API latency and costs.',
      'Engineered a GPT-4o Vision-powered extraction script to audit MongoDB Atlas clusters, intercepting a >50% data corruption failure rate across 3,490 records and replacing a flawed legacy pipeline with structured JSON outputs.',
    ],
    tags: ['LangGraph', 'Vector Stores', 'GPT-4o Vision', 'MongoDB Atlas', 'CoT Prompting'],
  },
  {
    id: 'armax',
    role: 'Founder & AI Engineer',
    company: 'ARMAX Solutions',
    duration: 'May 2025 – April 2026',
    location: 'Remote',
    bullets: [
      'Founded a digital agency to build responsive frontend templates (HTML/CSS/JS) and prototype interactive, LangChain-powered GenAI features for dynamic user portfolios.',
    ],
    tags: ['LangChain', 'GenAI', 'HTML/CSS/JS', 'Frontend'],
  },
  {
    id: 'here-technologies',
    role: 'Web Scraping Intern',
    company: 'HERE Technologies (Volkswagen Group)',
    duration: 'June 2024 – July 2024',
    location: 'Bengaluru, India (Remote)',
    bullets: [
      'Engineered Python web scraping pipelines utilizing Scrapy and Requests to automate the extraction of large-scale geospatial datasets across multiple domains.',
      'Validated and structured GIS data to enhance spatial accuracy for internal downstream location services.',
    ],
    tags: ['Python', 'Scrapy', 'Requests', 'GIS Data'],
  },
  {
    id: 'plasmid',
    role: 'Data Science Intern',
    company: 'Plasmid Innovation Ltd.',
    duration: 'May 2024 – June 2024',
    location: 'Bengaluru, India (Remote)',
    bullets: [
      'Trained machine learning models for industrial data analysis utilizing Pandas, Scikit-learn, and NumPy to identify global purchasing trends.',
      'Developed data cleaning and feature engineering pipelines to process unstructured data for reliable predictive inputs.',
    ],
    tags: ['Machine Learning', 'Pandas', 'Scikit-learn', 'NumPy'],
  },
];

// ===== Education =====
export const education: Education = {
  institution: 'University of Petroleum and Energy Studies (UPES)',
  location: 'Dehradun, India',
  degree:
    'B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
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

// ===== Certifications (resume condenses these; richer descriptions preserved) =====
export const certifications: Certification[] = [
  {
    id: 'genai-foundations',
    title: 'Generative AI Foundations',
    issuer: 'Microsoft (Instabase)',
    date: '2023',
    description:
      'Completed comprehensive training in Generative AI fundamentals through Instabase, a San Francisco-based AI company specializing in applied AI automation platforms.',
    bullets: [
      'Covered transformer architectures and diffusion models',
      'Hands-on with text-to-image generation systems',
      'Practical applications of generative AI in industry',
    ],
  },
  {
    id: 'ai-102',
    title: 'AI-102: Azure AI Solution Design',
    issuer: 'Microsoft Official Course',
    date: '2024',
    description:
      'Completed via Skill Sage and UPES under Microsoft Solutions Partner Program (Data & AI Azure).',
    bullets: [
      'Azure Cognitive Services implementation',
      'Building AI solutions with Azure Machine Learning',
      'Natural language processing with Azure',
    ],
  },
  {
    id: 'deloitte-forage',
    title: 'Deloitte Data Analytics Simulation',
    issuer: 'Forage',
    date: '2025',
    bullets: [
      'Built interactive dashboards using Tableau for data visualization',
      'Performed advanced data classification in Excel',
      'Derived actionable business insights from complex datasets',
    ],
  },
  {
    id: 'sfedu-dbms',
    title: 'Databases and DBMS',
    issuer: 'ICTIS, Southern Federal University, Russia',
    date: '2024',
    description:
      'Completed a 72-hour online course under MoU between UPES and SFedU, focusing on database systems and relational DBMS concepts.',
    bullets: [
      'Database design and normalization',
      'SQL query optimization',
      'Transaction management and concurrency control',
    ],
  },
];
