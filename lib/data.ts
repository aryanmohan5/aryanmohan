// Content is sourced from the latest resume PDF
// (public/Aryan_Mohan_AI_Engineer_Resume.pdf) and the public GitHub repos at
// https://github.com/aryanmohan5.

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
export const resumeHref = `${BASE}/Aryan_Mohan_AI_Engineer_Resume.pdf`;

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
      text: 'AI Engineer | Generative AI · LLM Agents · RAG on Google Cloud',
    },
    { type: 'cmd', text: 'cat stack.txt' },
    {
      type: 'out',
      text: 'Gemini · Vertex AI · Vector Search · LangChain · LangGraph · Cloud Run · Next.js · MongoDB Atlas',
    },
    { type: 'cursor', text: '' },
  ],
};

// ===== Profile Summary (from resume SUMMARY) =====
export const profileSummary = {
  heading: 'PROFILE SUMMARY',
  body: 'AI Engineer building production generative AI applications, LLM agents and RAG architectures on Google Cloud (Gemini on Vertex AI, Vertex AI Vector Search, LangChain, serverless Cloud Run). Led a zero-downtime AWS-to-Google Cloud migration and moved 8 AI agent services from OpenAI to Gemini with security, governance and cost controls built in. Presents architecture, demos and trade-offs to investors and prospective clients.',
  coreStrengths:
    'Gemini on Vertex AI | RAG & Vector Search | LLM Agents & Multi-Agent Workflows | LLM-as-a-Judge Evaluation | Serverless Google Cloud (Cloud Run) | Security, IAM & AI Governance',
};

// ===== Tech Stack (resume TECHNICAL SKILLS + frontend) =====
export const skillGroups: SkillGroup[] = [
  {
    label: 'Generative AI & Agents',
    skills: [
      'Gemini 2.5 Pro / Flash on Vertex AI',
      'OpenAI (GPT-4o, GPT-4o Vision, Responses API)',
      'LangChain (ChatVertexAI, structured output)',
      'LangGraph',
      'Multi-Agent Workflows',
      'RAG',
      'Prompt Engineering',
      'LLM-as-a-Judge',
      'Chain-of-Thought',
      'Guardrails',
      'PyTorch',
    ],
  },
  {
    label: 'Google Cloud',
    skills: [
      'Vertex AI',
      'Vertex AI Vector Search',
      'gemini-embedding-2',
      'Document AI',
      'Cloud Natural Language API',
      'Cloud Run',
      'Cloud Build',
      'Artifact Registry',
      'Cloud Storage',
      'Secret Manager',
      'IAM / Service Accounts',
      'Direct VPC Egress',
      'Cloud NAT',
      'Global External Load Balancer',
      'Cloud CDN',
      'Cloud Scheduler',
      'Firebase / Identity Platform',
    ],
  },
  {
    label: 'AWS & DevOps',
    skills: [
      'ECS',
      'S3',
      'CloudFront',
      'ALB',
      'Lambda',
      'API Gateway',
      'DynamoDB',
      'CodeBuild',
      'CodePipeline',
      'Secrets Manager',
      'Docker',
      'CI/CD',
      'Git',
    ],
  },
  {
    label: 'Data & Engineering',
    skills: [
      'Python',
      'Node.js / Express',
      'REST',
      'SSE',
      'MongoDB Atlas (aggregations, BulkWrite, zero-downtime migrations)',
      'SQL',
      'ETL',
      'Pandas',
      'Scikit-learn',
      'OAuth / JWT / OTP',
      'RBAC',
      'HMAC Webhooks',
      'Multi-Tenant B2B SaaS',
    ],
  },
  {
    label: 'Frontend',
    skills: ['React 19', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
];

// ===== Projects (resume PROJECTS + public GitHub repos) =====
export const projects: Project[] = [
  {
    id: 'knowledge-assistant',
    icon: 'fa-robot',
    title: 'Knowledge Assistant: Multi-Tenant RAG SaaS',
    tech: 'Next.js 15 | MongoDB Atlas Vector Search | LangChain | Auth.js | TypeScript',
    github: 'https://github.com/aryanmohan5/Knowledge-Assistant',
    featured: true,
    bullets: [
      "Multi-tenant SaaS that turns an organization's PDFs into an embeddable question-answering assistant whose answers cite the exact document and page.",
      'Two-LLM pipeline (Decomposer → Synthesizer) around a deterministic "System 1" rules engine in plain TypeScript, so eligibility and policy-routing decisions are made by tested code, never by the LLM.',
      'Grounding check verifies every citation against retrieved chunks and strips fabricated ones; tenant isolation is enforced by scoped repositories, a Mongoose guard plugin and Atlas Vector Search pre-filters.',
      'Embeddable iframe widget secured by hashed, revocable assistant tokens, per-token CSP frame-ancestors and CORS origin checks; covered by a Vitest suite on an in-memory MongoDB replica set.',
    ],
    metrics: [
      { label: 'Page-level citations', icon: '' },
      { label: 'Tenant-isolated vector search', icon: '' },
      { label: 'OpenAI / Groq providers', icon: '' },
    ],
  },
  {
    id: 'incident-parser',
    icon: 'fa-robot',
    title: 'Intelligent Incident Parser',
    tech: 'Python | Streamlit | Groq | Pydantic',
    github: 'https://github.com/aryanmohan5/incident-parser',
    demo: 'https://www.loom.com/share/56c9a70a8b9a41deb594bfe72989fdc8',
    bullets: [
      'Strict JSON-schema LLM parsing of unstructured system alerts at 1–2 s inference latency, extracting 5 key fields validated with a Pydantic schema.',
    ],
    metrics: [
      { label: 'Latency: 1–2s', icon: '' },
      { label: 'Strict JSON Schema', icon: '' },
    ],
  },
  {
    id: 'weather-classification',
    icon: 'fa-cloud',
    title: 'Weather Image Classification',
    tech: 'PyTorch | ResNet-101 | XGBoost | Genetic Algorithm',
    github: 'https://github.com/aryanmohan5/Weather-Image-Classification',
    bullets: [
      'Fine-tuned a PyTorch ResNet-101 to 92% accuracy across 11 weather classes, comparing Softmax, XGBoost and XGBoost + Genetic Algorithm feature-selection pipelines.',
    ],
    metrics: [
      { label: '92% train · 86% test accuracy', icon: '' },
      { label: 'Classes: 11', icon: '' },
      { label: 'ResNet-101 + XGBoost + GA', icon: '' },
    ],
  },
  {
    id: 'text-to-image',
    icon: 'fa-image',
    title: 'Text-to-Image Generator',
    tech: 'Python | Hugging Face Diffusers | Stable Diffusion | PyTorch',
    github: 'https://github.com/aryanmohan5/Text-to-Image-Generation',
    bullets: [
      'Generative image pipeline turning natural-language prompts into images with Stable Diffusion, with experiments on aspect ratio vs. quality, latency across prompt lengths and generation consistency.',
    ],
    metrics: [
      { label: 'Stable Diffusion', icon: '' },
      { label: 'Latency benchmarks', icon: '' },
    ],
  },
  {
    id: 'saasquatch',
    icon: 'fa-chart-line',
    title: 'SaaSQuatch Acquisition Intelligence',
    tech: 'Python | Streamlit | Pandas',
    github: 'https://github.com/aryanmohan5/SaaSQuatch-Acquisition-Intelligence',
    bullets: [
      'M&A target-identification dashboard for private-equity and corporate-development teams: a 0–100 acquisition score across owner readiness, financial health, valuation and stability, with Hot/Warm/Cold classification, signal detection and CSV export.',
    ],
    metrics: [
      { label: '0–100 scoring', icon: '' },
      { label: '4 weighted dimensions', icon: '' },
    ],
  },
  {
    id: 'fake-news',
    icon: 'fa-newspaper',
    title: 'Fake News Classifier',
    tech: 'Python | NLTK | Scikit-learn',
    github: 'https://github.com/aryanmohan5/Fake-News-Classifier',
    bullets: [
      'NLP pipeline (stop-word removal, CountVectorizer) comparing tuned Multinomial Naive Bayes and Logistic Regression for fake-news detection.',
    ],
    metrics: [
      { label: 'LogReg: 93.6% accuracy', icon: '' },
      { label: 'Naive Bayes: 90.6% accuracy', icon: '' },
    ],
  },
  {
    id: 'retail-recommender',
    icon: 'fa-cart-shopping',
    title: 'Online Retail Recommendation System',
    tech: 'Python | Pandas | Surprise | Scikit-learn',
    github: 'https://github.com/aryanmohan5/Online-Retail-Recommendation-System',
    bullets: [
      'Personalized product recommender on real transactional data: RFM customer segmentation, item-affinity analysis and KNN collaborative filtering with the Surprise library.',
    ],
    metrics: [
      { label: 'RFM segmentation', icon: '' },
      { label: 'KNN collaborative filtering', icon: '' },
    ],
  },
];

// ===== Experience (resume EXPERIENCE + selected earlier EdviseMe highlights) =====
export const experiences: Experience[] = [
  {
    id: 'edviseme',
    role: 'Full-Stack AI Engineer',
    company: 'EdviseMe',
    duration: 'May 2026 – Present',
    location: 'Remote, India',
    bullets: [
      'Gemini agent migration: Led the migration of 8 AI agent services (tutoring chat, quizzes, memory, support, mock-test grading, analytics) from OpenAI to stateless Gemini on Vertex AI via a provider-agnostic LLM layer and session-safe phased rollout.',
      'Enterprise RAG on Vertex AI: Consolidated 81 OpenAI vector stores into one Vertex AI Vector Search index, avoiding 81 endpoints (~$70–110/month each); embedded 75,621 chunks (~60M chars) with gemini-embedding-2 in ~2 hours for ~$1.40.',
      'Grounding LLMs in internal data: Built a retrieval service replacing OpenAI file_search that joins vector hits to MongoDB source data, with a 20-message memory window; verified 100% ingestion and in-domain relevance of 0.73–0.79 vs. ~0.51 for off-domain queries.',
      'Troubleshooting agent behavior: Fixed stateless "amnesia" in the quiz agent with per-turn state injection and auto-retry; moved a 12KB structured-output report schema from Gemini 2.5 Pro to 2.5 Flash, reaching 100% schema validation with lower latency and token cost.',
      'Serverless cloud migration: Ran the zero-downtime AWS-to-Google Cloud production cutover (scoped at 34 engineer-days, core work in <15): Cloud Run, Direct VPC Egress + Cloud NAT, Global Load Balancer, Cloud CDN, Cloud Build CI/CD, blue-green rollback.',
      'Security, governance & compliance: Set up least-privilege IAM, Secret Manager and credential rotation; RBAC-protected LLM token/cost telemetry across 10 AI call sites; child-safety moderation on Cloud Natural Language API (0 false negatives in backtests).',
      'Multimodal document AI: Built a 7-stage Gemini + Document AI pipeline (OCR, LaTeX math, diagram cropping) for exam papers; ran a GPT-4o Vision audit of 6,368 records that caught a ~55% data-integrity failure rate before it reached live AI grading.',
      'LLM-as-a-Judge evaluation: Turned an expensive, hallucination-prone "Solver" into a low-cost "Evaluator" (retrieval + chain-of-thought) that eliminated math and score errors, hardened with idempotent retries and an auto-heal sweep.',
      'Stakeholder advisory & leadership: Co-led an investor pitch and product demos; built a multi-tenant, white-label B2B prototype with role-based access for institutional pitches; ran a 2-hour architecture KT for incoming leadership; lead junior engineers.',
      'Payments security: Rebuilt payments from insecure client-side fulfillment into a server-authorized Razorpay webhook pipeline with HMAC validation and idempotent compare-and-set logic, closing a privilege-escalation exploit that let users self-grant top-tier access.',
      'Data architecture: Seeded the CBSE curriculum (48 subjects, 604 chapters, 3,495 subtopics) into MongoDB Atlas and normalized 572+ corrupted documents across 1,244 legacy paths via zero-downtime BulkWrite.',
    ],
    tags: [
      'Gemini',
      'Vertex AI',
      'Vector Search',
      'Document AI',
      'Cloud Run',
      'LLM-as-a-Judge',
      'RAG',
      'MongoDB Atlas',
    ],
  },
  {
    id: 'armax',
    role: 'Founder & AI Architect (B2B GenAI Consultancy)',
    company: 'ARMAX Solutions',
    duration: 'May 2025 – Apr 2026',
    location: 'Remote',
    bullets: [
      'Founded a B2B generative-AI consultancy, working directly with clients to deliver LLM prototypes and MERN-stack architectures.',
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
      'Automated large-scale geospatial data extraction in Python (Scrapy, Requests) to improve location-service accuracy.',
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
      'Built data-cleaning pipelines and predictive ML models (Pandas, Scikit-learn, NumPy) for global purchasing trends.',
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

// ===== Certifications =====
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
