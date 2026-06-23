export type ProfileLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "resume" | "external";
  external?: boolean;
};

export type Project = {
  title: string;
  focus: string;
  summary: string;
  approach: string;
  impact: string;
  stack: string[];
  links: ProfileLink[];
};

export type ResearchItem = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export type TimelineItem = {
  label: string;
  title: string;
  organization: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Achievement = {
  title: string;
  detail: string;
};

export type NewsItem = {
  date: string;
  text: string;
};

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export const profile = {
  name: "Khoa Nguyen",
  role: "Ph.D. Researcher and Research Scientist",
  location: "Newark, New Jersey",
  email: "nk569@njit.edu",
  phone: "(973) 978-6177",
  githubUrl: "https://github.com/knguyen2410",
  linkedinUrl: "https://www.linkedin.com/in/khoanguyen2410",
  resumePath: assetPath("resume.pdf"),
  profileImage: assetPath("profile.jpeg"),
  heroImage: assetPath("research-workspace.png"),
  headline:
    "I build reliable, privacy-preserving LLM and agentic systems for security-critical software and data-sensitive settings.",
  summary: [
    "I am a Ph.D. student in Data Science at the New Jersey Institute of Technology, advised by Dr. NhatHai Phan, and a Research Scientist at OppyAI.",
    "My research connects LLMs, VLMs, post-training, tool-augmented agents, distributed learning, and differential privacy, with a focus on systems that can reason over complex data while operating safely in data-sensitive settings.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/knguyen2410",
      icon: "github",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/khoanguyen2410",
      icon: "linkedin",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:nk569@njit.edu",
      icon: "mail",
    },
    {
      label: "Resume",
      href: assetPath("resume.pdf"),
      icon: "resume",
    },
  ] satisfies ProfileLink[],
  signals: ["Privacy-preserving LLMs", "VLMs and post-training", "Agentic systems", "Software security"],
  news: [
    {
      date: "2026",
      text: "Program Structure-aware Language Models accepted to Findings of ACL 2026.",
    },
    {
      date: "2026",
      text: "NOIR accepted to USENIX Security 2026.",
    },
    {
      date: "Nov 2025",
      text: "Started a research collaboration with AT&T on machine-learning approaches for cellular network maintenance scheduling.",
    },
    {
      date: "2025",
      text: "FedChip published at IEEE ICLAD 2025 and SGFusion published at IEEE BigData 2025.",
    },
    {
      date: "Nov 2024",
      text: "Joined OppyAI Inc. as a Research Scientist, working on privacy-preserving AI systems and distributed training pipelines.",
    },
  ] satisfies NewsItem[],
  projects: [
    {
      title: "NOIR: Privacy-Preserving Generation with LLMs",
      focus: "LLM privacy",
      summary:
        "A privacy-preserving agentic LLM system for protecting sensitive user information while preserving strong model utility in interactive and tool-augmented settings.",
      approach:
        "Developed NOIR, a split-learning LLM framework with local differential privacy, analyzed reconstruction risk through theoretical recovery bounds, and extended the mechanism toward multimodal, tool-use, and agentic systems.",
      impact:
        "Accepted to USENIX Security 2026 and connected to an international patent application on private code generation.",
      stack: ["PyTorch", "Transformers", "Differential privacy", "Split learning"],
      links: [],
    },
    {
      title: "Program Structure-Aware LLM for Targeted Software Testing",
      focus: "Software agents",
      summary:
        "A program-aware agentic framework for targeted test-case generation aligned with specific software behaviors.",
      approach:
        "Conditioned language-model agents on program representations so generated tests target behavior beyond textual semantics.",
      impact:
        "Accepted to Findings of ACL 2026, with higher precision and effectiveness than strong baseline methods.",
      stack: ["LLM agents", "Program analysis", "Fuzzing", "Software security"],
      links: [],
    },
    {
      title: "FedChip: Federated LLM for AI Accelerator Chip Design",
      focus: "Federated LLMs",
      summary:
        "A federated framework for collaborative LLM-based hardware design without centralizing sensitive design data.",
      approach:
        "Built a multi-objective evaluation pipeline for accelerator design quality across distributed participants.",
      impact:
        "Published at IEEE ICLAD 2025, demonstrating practical gains over prior LLM-aided hardware design methods.",
      stack: ["Federated learning", "LLMs", "Hardware design", "Evaluation"],
      links: [],
    },
    {
      title: "Geographic-Aware Federated Learning",
      focus: "Distributed learning",
      summary:
        "A federated learning approach that models structured relationships among decentralized participants under realistic heterogeneity.",
      approach:
        "Developed stochastic geographic gradient fusion to incorporate real-world relational structure across clients.",
      impact:
        "Published at IEEE BigData 2025 and validated on large-scale distributed datasets.",
      stack: ["Federated learning", "Optimization", "Distributed data", "Python"],
      links: [],
    },
  ] satisfies Project[],
  research: [
    {
      title: "Program Structure-aware Language Models",
      description:
        "Khang Tran, Khoa Nguyen, Cristian Borcea, NhatHai Phan. Targeted software testing beyond textual semantics.",
      tags: ["Findings of ACL 2026", "Software testing", "LLM agents"],
    },
    {
      title: "NOIR: Privacy-Preserving Generation of Code with Open-Source LLMs",
      description:
        "Khoa Nguyen, Khiem Ton, NhatHai Phan, Issa Khalil, Khang Tran, Cristian Borcea, Ruoming Jin, Abdallah Khreishah, My T. Thai.",
      tags: ["USENIX Security 2026", "LLM privacy", "Code generation"],
    },
    {
      title: "SGFusion: Stochastic Geographic Gradient Fusion in Federated Learning",
      description:
        "Khoa Nguyen, Khang Tran, NhatHai Phan, Cristian Borcea, Ruoming Jin, Issa Khalil.",
      tags: ["IEEE BigData 2025", "Federated learning", "Distributed optimization"],
    },
    {
      title: "FedChip: Federated LLM for AI Accelerator Chip Design",
      description:
        "Mahmoud Nazzal, Khoa Nguyen, Deepak Vungarala, Ramtin Zand, Shaahin Angizi, Hai Phan, Abdallah Khreishah.",
      tags: ["IEEE ICLAD 2025", "Federated LLMs", "Chip design"],
    },
    {
      title: "System and Method for Private Generation of Code",
      description:
        "International patent application with NhatHai Phan, Khiem Ton, Issa Khalil, My Thai, and Ruoming Jin.",
      tags: ["Patent", "PCT/US25/042391", "Private code generation"],
    },
  ] satisfies ResearchItem[],
  timeline: [
    {
      label: "Nov 2024 - Present",
      title: "Research Scientist",
      organization: "OppyAI Inc. - Newark, NJ",
      detail:
        "Translated core privacy-preserving LLM research into a commercial startup and built distributed ML pipelines spanning data preprocessing, pre-training, SFT/RL post-training, inference, and evaluation on multi-node, multi-GPU infrastructure.",
    },
    {
      label: "Nov 2025 - Present",
      title: "Research Collaborator",
      organization: "AT&T - Bedminster, NJ",
      detail:
        "Designed a graph foundation model for cellular site maintenance scheduling, using large-scale historical LTE and 5G network data to improve operational efficiency and user experience.",
    },
    {
      label: "Sep 2023 - Present",
      title: "Ph.D. in Data Science",
      organization: "New Jersey Institute of Technology",
      detail:
        "Advised by Dr. NhatHai Phan, with research on LLMs, VLMs, SFT/RL post-training, tool-augmented agents, security, privacy, and fuzzing.",
    },
    {
      label: "Sep 2019 - May 2023",
      title: "B.S. in Computer Science",
      organization: "New Jersey Institute of Technology",
      detail: "Undergraduate training in computer science, programming systems, and data science foundations.",
    },
  ] satisfies TimelineItem[],
  skillGroups: [
    {
      title: "Machine Learning",
      skills: ["LLMs", "VLMs", "NLP", "RL", "Distributed training", "GNNs", "Federated learning", "Distillation"],
    },
    {
      title: "Frameworks",
      skills: ["PyTorch", "Transformers", "LLaMA-Factory", "verl", "vLLM", "Ray", "Triton", "DeepSpeed", "Accelerate"],
    },
    {
      title: "Infrastructure",
      skills: ["CUDA", "Linux", "Slurm", "Git", "Docker", "SQL", "Multi-GPU training"],
    },
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "C/C++"],
    },
  ] satisfies SkillGroup[],
  achievements: [
    {
      title: "Teaching Assistant at NJIT",
      detail: "Supported DS110, CS280, DS677, and DS636 across AI foundations, programming languages, deep learning, and analytics.",
    },
    {
      title: "Winner - GfK NextGen Data Science Hackathon 2022",
      detail: "Awarded first place in a data science competition focused on applied analytics.",
    },
    {
      title: "ICPC Greater NY Regional Qualifier 2022",
      detail: "Qualified for the regional contest through competitive programming performance.",
    },
    {
      title: "3rd Prize - Vietnam Science and Engineering Fair 2017",
      detail: "Recognized for early research and engineering work.",
    },
  ] satisfies Achievement[],
  contactHeading: "Open to research engineering, LLM systems, and privacy-preserving AI roles.",
  contactText:
    "I am especially interested in teams building reliable agentic systems, secure ML infrastructure, and privacy-preserving AI that can move from research prototypes into deployed products.",
};
