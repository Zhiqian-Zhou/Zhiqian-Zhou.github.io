// Single source of truth for all site content. Each fact lives in exactly one section.
// Keep in sync with the CV PDF in public/.

export const site = {
  url: 'https://zhiqian-zhou.github.io/',
  quote: 'The best models are not just accurate but useful.',
  cv: 'ZhiqianZhou_CV.pdf',
  availability: 'Open to ML / Data Science internships',
  lastUpdated: 'October 2026'
}

export const person = {
  monogram: 'ZZ',
  name: 'Zhiqian Zhou',
  greeting: 'Hello, I’m',
  roles: ['Machine Learning', 'LLM Agents & RAG', 'Multimodal Models'],
  location: 'Lausanne, Switzerland',
  email: 'zhiqian.zhou@epfl.ch',
  handNote: ['Learn', 'Build', 'Explore'],
  bio: [
    'I’m a first-year M.S. student in Data Science at EPFL, after a B.S. in Artificial Intelligence at UPC BarcelonaTech (GPA 9/10, top 3%). My research interest is making small language and vision-language models work well under limited compute — from GUI grounding (WinDOM, ICML 2026 workshop) to structured LLM outputs and multi-agent pipelines. I also enjoy building ML systems end to end in Python and PyTorch, from raw data to a working demo.'
  ]
}

export const links = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/Zhiqian-Zhou' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/zhiqian-zhou-196350300/' },
  { id: 'email', label: 'Email', href: 'mailto:zhiqian.zhou@epfl.ch' }
]

// Nav labels match section headings; scroll-spy ids are the section ids.
export const nav = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
  { id: 'cv', label: 'CV', external: true }
]

export const publications = [
  {
    id: 'windom',
    title: 'WinDOM: Self-Family Distillation for Small-Model GUI Grounding',
    authors: ['C. Li Chen', 'Z. Zhou', 'H. Chen', 'N. Chauvin'],
    me: 'Z. Zhou',
    venue: 'ICML 2026 Second Workshop on Agents in the Wild: Safety, Security, and Beyond',
    type: 'Workshop paper',
    tldr:
      'A 54k-sample GUI grounding corpus with bounding boxes read directly from the DOM of a Windows 11 web reimplementation, plus a teacher-free recipe (self-family distillation followed by GRPO) that improves a 2B model by +5.4 points out-of-distribution on average across ScreenSpot-Pro, OSWorld-G and ScreenSpot-V2.',
    bibtex: `@article{chen2026windom,
  title   = {WinDOM: Self-Family Distillation for Small-Model GUI Grounding},
  author  = {Chen, Chengheng Li and Zhou, Zhiqian and Chen, Hao and Chauvin, Nicolas},
  journal = {arXiv preprint arXiv:2606.25964},
  year    = {2026}
}`,
    links: [
      { label: 'paper', title: 'Paper on OpenReview', href: 'https://openreview.net/forum?id=wqful6F0Em' },
      { label: 'arXiv', title: 'Preprint on arXiv', href: 'https://arxiv.org/abs/2606.25964' },
      { label: 'code', title: 'Code on GitHub', href: 'https://github.com/ChenghengLi/WinDOM' },
      { label: 'project', title: 'Project website', href: 'https://windom.chlc.top' }
    ]
  }
]

export const researchExperience = [
  {
    title: 'AI Research Assistant',
    org: 'Sparsity Technologies & DAMA-UPC, Barcelona',
    period: 'Jul – Sep 2025\nMar – May 2026',
    bullets: [
      'Optimized structured-output generation for LLMs under limited compute.',
      'Built a multimodal knowledge graph of flight and rail schedules to model disruption propagation.'
    ],
    links: [{ label: 'code', title: 'Rail disruption prediction code on GitHub', href: 'https://github.com/Zhiqian-Zhou/Sparsity-TravelWise' }]
  },
  {
    title: 'Bachelor’s Thesis — HomeCraft: Text-to-Building Generation in a Voxel World',
    org: 'UPC BarcelonaTech',
    period: 'Feb 2026 – Jun 2026',
    note: 'Advisor: Prof. Ramon Sangüesa',
    bullets: [
      'Built a multi-agent LLM pipeline that turns one text prompt into a complete voxel building.',
      'Benchmarked open-weight LLMs with confidence intervals and significance tests.',
      'Fine-tuned a small distilled model for efficient generation.'
    ],
    links: [{ label: 'code', title: 'HomeCraft thesis code on GitHub', href: 'https://github.com/Zhiqian-Zhou/HomeCraft_tfg' }]
  }
]

export const projects = [
  {
    id: 'aimsafe',
    title: 'AImSafe',
    subtitle: 'Worker Safety Monitoring',
    description:
      'A real-time, privacy-preserving computer vision system that tracks up to five workers, detects fatigue (PERCLOS, gaze drift), unsafe lifting postures, and collision risk, and fuses these signals into a REBA safety score. An LLM agent gives natural-language safety coaching and sends MQTT commands to equipment during critical hazards.',
    year: 2026,
    award: '1st Prize · MERIThON UPC',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'LLM agent', 'MQTT'],
    links: [{ label: 'code', href: 'https://github.com/ChenghengLi/AImSafe-Public' }]
  },
  {
    id: 'aividence',
    title: 'AIvidence',
    subtitle: 'Multi-Agent Misinformation Hunter',
    description:
      'A four-agent LLM + RAG pipeline for algorithmic fact-checking and source credibility scoring, with transparent reasoning logs so that every verdict can be audited.',
    year: 2025,
    award: '1st Prize · MERIThON UPC',
    tags: ['LLM', 'RAG', 'LangChain', 'Python'],
    links: [{ label: 'code', href: 'https://github.com/ChenghengLi/AIvidence' }]
  },
  {
    id: 'nextbuy',
    title: 'NextBuy',
    subtitle: 'Smart Demand Signals for Inibsa',
    description:
      'A B2B alert system for dental clinics that flags churn risks and growth opportunities: LightGBM + XGBoost models (Precision@5% > 0.90) produce daily alerts prioritized by impact, and Gemini turns TreeSHAP explanations into sales actions.',
    year: 2026,
    award: '3rd Prize · INTERHACK BCN',
    tags: ['Python', 'LightGBM', 'XGBoost', 'SHAP', 'Gemini'],
    links: [{ label: 'code', href: 'https://github.com/ChenghengLi/NextBuy' }]
  },
  {
    id: 'addad',
    title: 'ADDAD',
    subtitle: 'Smadex Creative Intelligence',
    description:
      'A low-latency system for the Smadex challenge: a soft-voting ensemble (XGBoost, CatBoost, LightGBM; test macro-F1 0.677) gives ad creatives a health score, a fine-tuned SmolVLM writes structured JSON critiques, and a Flux LoRA + DPO pipeline generates visual rebuilds from a single screenshot.',
    year: 2026,
    event: 'HackUPC',
    tags: ['XGBoost', 'CatBoost', 'LightGBM', 'SmolVLM', 'Diffusion'],
    links: [{ label: 'code', href: 'https://github.com/xuyaooo/smadex-creative' }]
  },
  {
    id: 'cupme',
    title: 'CUPME',
    subtitle: 'Enterprise RAG Chatbot for Siemens Energy',
    description:
      'A retrieval-augmented chatbot over Siemens Energy’s technical documentation that grounds its answers in retrieved passages to minimize hallucinations.',
    year: 2024,
    tags: ['RAG', 'LangChain', 'FastAPI'],
    links: [{ label: 'code', href: 'https://github.com/randreu27/Chatbot-Ultra-Pro-Max-Energy-CUPME' }]
  }
]

export const education = [
  {
    title: 'M.S. in Data Science',
    org: 'EPFL, Lausanne',
    period: 'Sep 2026 – Jun 2028 (expected)',
    note: 'Focus: Machine Learning and Multimodal Foundation Models'
  },
  {
    title: 'Exchange Semester in AI',
    org: 'Beihang University (BUAA), Beijing',
    period: 'Sep 2025 – Jan 2026',
    note: 'GPA 96/100 · Coursework: Foundation Models, Intelligent Security, Medical Image Computing, Digital Image and Video Processing',
    bullets: [
      'Benchmarked ResNet-50 vs. DeiT-Small on HAM10000: DeiT-Small had higher accuracy, but ResNet-50 led by 0.025 macro-F1 on rare lesions.',
      'Built a multimodal fusion model for fetal ultrasound analysis.',
      'Evaluated the adversarial robustness of deep models under FGSM and PGD attacks.'
    ]
  },
  {
    title: 'B.S. in Artificial Intelligence',
    org: 'UPC BarcelonaTech',
    period: 'Sep 2022 – Jun 2026',
    note: 'GPA 9/10 (top 3%) · Coursework: Algebra, Probability and Statistics, Optimization, Data Management'
  }
]

export const awards = [
  { year: '2026', label: '1st Prize, MERIThON UPC 2026', detail: 'Project: AImSafe' },
  { year: '2026', label: '3rd Prize, INTERHACK BCN 2026', detail: 'Project: NextBuy (Inibsa challenge)' },
  { year: '2025', label: '1st Prize, MERIThON UPC 2025', detail: 'Project: AIvidence' },
  { year: '2024', label: 'Schneider Electric Impact Maker Award', detail: 'Best mid-degree female AI student, UPC' },
  {
    year: '2022 – 2026',
    label: 'Distinction (top 5%) in five UPC courses',
    detail: 'High Performance Computing · Speech and Dialogue Processing · Knowledge and Automated Reasoning · Systems Modeling and Simulation · Calculus'
  },
  { year: '2021', label: 'High School Honors (Matrícula de Honor)', detail: 'GPA 9.8/10', lang: 'es' }
]

export const skills = [
  { title: 'Programming', items: ['Python (advanced)', 'C++', 'SQL', 'R', 'MATLAB'] },
  { title: 'ML & Data', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas'] },
  { title: 'GenAI & Agents', items: ['LangChain', 'RAG', 'ReAct', 'MCP', 'Tool Use'] },
  { title: 'Vision & NLP', items: ['CNNs', 'Vision Transformers', 'OpenCV', 'MediaPipe'] },
  { title: 'MLOps & Tools', items: ['Git', 'Docker', 'FastAPI', 'Weights & Biases', 'Jira'] }
]

export const languages = [
  { name: 'Chinese', level: 'Native' },
  { name: 'Spanish', level: 'Bilingual' },
  { name: 'Catalan', level: 'Bilingual' },
  { name: 'English', level: 'Professional' }
]

export const leadership = {
  role: 'Event Planning Committee Member',
  org: 'UPC Chinese Student Association (AECH)',
  period: '2023 – 2026',
  text: 'Co-organized networking events for 100+ attendees as part of a 10-person committee. Hosted a Tsinghua University delegation and co-led seminars comparing Spanish and Chinese engineering education.'
}

export const hobbiesIntro = 'Outside work, I box, dance, travel, and cook my way through Swiss and Chinese food.'

export const hobbies = [
  { id: 'fondue', name: 'Fondue', note: 'Lausanne winters' },
  { id: 'dumplings', name: 'Jiaozi', note: 'a taste of home' },
  { id: 'boxing', name: 'Boxing', note: 'focus & discipline' },
  { id: 'dancing', name: 'Dancing', note: 'rhythm & practice' },
  { id: 'travel', name: 'Travel', note: 'cities & cuisines' }
]
