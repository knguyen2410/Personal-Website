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

export type ExperienceItem = {
  organization: string;
  title: string;
  date: string;
  bullets: {
    label?: string;
    text: string;
  }[];
};

export type EducationItem = {
  institution: string;
  date: string;
  degree: string;
  focus: string;
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

export type PublicationEntry = {
  label: string;
  text: string;
};

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export const profile = {
  name: "Khoa Nguyen",
  role: "Ph.D. Researcher and Research Scientist",
  location: "Newark, New Jersey",
  email: "nkhoa2410@gmail.com",
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
    "My research connects LLMs, VLMs, post-training, tool-augmented agentic systems, AI for software engineering, distributed learning, and differential privacy.",
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
      href: "mailto:nkhoa2410@gmail.com",
      icon: "mail",
    },
    {
      label: "Resume",
      href: assetPath("resume.pdf"),
      icon: "resume",
    },
  ] satisfies ProfileLink[],
  signals: ["Privacy-preserving LLMs", "VLMs and post-training", "Agentic systems", "Software security"],
  education: [
    {
      institution: "New Jersey Institute of Technology",
      date: "September 2023 - Present",
      degree: "Ph.D. in Data Science",
      focus:
        "LLMs, VLMs, Post-Training (SFT & RL), Tool-Augmented Agentic Systems, AI for Software Engineering, Security, Privacy.",
    },
  ] satisfies EducationItem[],
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
      text: "Started a research collaboration with AT&T on graph foundation models for LTE/5G site-maintenance prediction.",
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
        "A distributed privacy-preserving LLM system that protects prompts and responses while supporting large-scale code generation and agentic workflows.",
      approach:
        "Developed NOIR with differential privacy, built a code-data refinement pipeline for SFT, and engineered multi-GPU, multi-node training with LLaMA-Factory, DeepSpeed, Accelerate, and Slurm.",
      impact:
        "Prevented prompt and response reconstruction attacks and achieved a 4x distributed training speedup.",
      stack: ["PyTorch", "Transformers", "Differential privacy", "DeepSpeed", "Accelerate", "Slurm"],
      links: [],
    },
    {
      title: "GLMTest: Program Structure-Aware LLM for Targeted Software Testing",
      focus: "Software agents",
      summary:
        "A graph-augmented LLM framework that generates test cases toward targeted execution branches.",
      approach:
        "Used Code Property Graphs, semantic program analysis, developer-written tests, and branch traces to align generated tests with program structure.",
      impact:
        "Reached 71.9% higher targeted-branch accuracy, 29% higher branch overlap, 2x higher executable-test generation, and 3x more branch-annotated data.",
      stack: ["LLM agents", "Code Property Graphs", "Program analysis", "Software testing"],
      links: [],
    },
    {
      title: "FedChip: Federated LLM for AI Accelerator Chip Design",
      focus: "Federated LLMs",
      summary:
        "A federated PEFT framework for adapting language models to Verilog-based AI accelerator design under PPA constraints.",
      approach:
        "Leveraged LoRA, curated APTPU-Gen with 30k design configurations, and introduced Chip@k for multi-objective code quality evaluation.",
      impact:
        "Boosted optimal hardware generation by 77% over frontier LLM baselines without leaking proprietary intellectual property.",
      stack: ["Federated learning", "LoRA", "Verilog", "Hardware design"],
      links: [],
    },
    {
      title: "Geographic-Aware Federated Learning",
      focus: "Distributed learning",
      summary:
        "A stochastic federated learning algorithm for sharing signal across geographically related mobile-sensing zones.",
      approach:
        "Modeled zone correlations with hierarchical random graphs and MCMC sampling, then fused gradients through attention-weighted sharing.",
      impact:
        "Improved mobile-sensing utility by 3.23% across 2x more zones without slowing convergence.",
      stack: ["Federated learning", "MCMC", "Optimization", "Mobile sensing"],
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
      title: "FedChip: Federated LLM for AI Accelerator Chip Design",
      description:
        "Mahmoud Nazzal, Khoa Nguyen, Deepak Vungarala, Ramtin Zand, Shaahin Angizi, Hai Phan, Abdallah Khreishah.",
      tags: ["IEEE ICLAD 2025", "Federated LLMs", "Chip design"],
    },
    {
      title: "SGFusion: Stochastic Geographic Gradient Fusion in Federated Learning",
      description:
        "Khoa Nguyen, Khang Tran, NhatHai Phan, Cristian Borcea, Ruoming Jin, Issa Khalil.",
      tags: ["IEEE BigData 2025", "Federated learning", "Distributed optimization"],
    },
    {
      title: "System and Method for Private Generation of Code",
      description:
        "International patent application with NhatHai Phan, Khiem Ton, Issa Khalil, My Thai, and Ruoming Jin.",
      tags: ["Patent", "PCT/US25/042391", "Private code generation"],
    },
  ] satisfies ResearchItem[],
  experience: [
    {
      organization: "AT&T",
      title: "Research Collaborator",
      date: "November 2025 - Present",
      bullets: [
        {
          label: "Cellular Network Maintenance Scheduling",
          text:
            "Designed a graph foundation model for LTE/5G site-maintenance prediction using large-scale historical network data, optimizing scheduling efficiency and user experience.",
        },
      ],
    },
    {
      organization: "OppyAI Inc.",
      title: "Research Scientist",
      date: "November 2024 - Present",
      bullets: [
        {
          label: "Multi-Modal & Agentic Systems",
          text:
            "Extended a privacy-preserving split-LLM framework into a production enterprise solution, scaling capabilities from code generation to general chat, multilingual natural language understanding, VLMs, Tool-Augmented Agentic Systems, and MoE architectures.",
        },
        {
          label: "RL for Reasoning Performance Optimization",
          text:
            "Integrated a distributed GRPO training loop into the post-training pipeline, significantly boosting the mathematical, logical, and structural reasoning capacities.",
        },
        {
          label: "Adversarial Security & Robustness",
          text:
            "Conducted vulnerability assessments to design advanced attacks and built an adversarial training pipeline to defend models against privacy exploits.",
        },
      ],
    },
    {
      organization: "New Jersey Institute of Technology",
      title: "Research Assistant",
      date: "September 2023 - Present",
      bullets: [
        {
          label: "Privacy-Preserving LLM System",
          text:
            "Developed NOIR, a distributed LLM system using differential privacy to prevent 100% prompt and response reconstruction attacks. Built an end-to-end data pipeline to clean, refine, and transform raw pre-train code data into high-quality data optimized for large-scale SFT. Engineered a multi-GPU and multi-node distributed training pipeline using LLaMA-Factory, DeepSpeed, Accelerate, on an HPC Slurm cluster, achieving 4x speedup.",
        },
        {
          label: "Structure-Aware Code Intelligence",
          text:
            "Developed GLMTest, a graph-augmented LLM framework that leverages Code Property Graphs and semantic program analysis to improve LLM capabilities on generating test-cases toward targeted execution branches, achieving 71.9% higher targeted-branch accuracy, 29% higher branch overlap, and 2x higher executable-test generation performance than frontier LLM baselines. Curated 3x more branch-annotated dataset from real-world repositories by executing developer-written tests and aligning branch traces with program structure.",
        },
        {
          label: "Federated LLMs for Chip Design",
          text:
            "Developed FedChip, a federated PEFT framework leveraging LoRA to collaboratively adapt language models for Verilog-based AI accelerator design under PPA constraints. Curated APTPU-Gen with 30k design configurations and introduced Chip@k, a statistical evaluation metric for multi-objective code quality, boosting optimal hardware generation by 77% over frontier LLM baselines without leaking proprietary intellectual property.",
        },
        {
          label: "Geographic FL",
          text:
            "Developed SGFusion, a stochastic FL algorithm that models correlations among geographic zones using hierarchical random graphs and MCMC sampling, enabling similar zones to share gradients through attention-weighted fusion; boosted mobile-sensing utility by 3.23% across 2x more zones without slowing convergence.",
        },
      ],
    },
  ] satisfies ExperienceItem[],
  papers: [
    {
      label: "[1]",
      text:
        "K. Tran, Khoa Nguyen, C. Borcea, et al., \"Program Structure-aware Language Models: Targeted Software Testing beyond Textual Semantics,\" Findings of the Association for Computational Linguistics: ACL'26, 2026.",
    },
    {
      label: "[2]",
      text:
        "Khoa Nguyen, K. Ton, N. Phan, et al., \"NOIR: Privacy-Preserving Generation of Code with Open-Source LLMs,\" Proceedings of the 35th USENIX Security Symposium, USENIX Security '26, 2026.",
    },
    {
      label: "[3]",
      text:
        "M. Nazzal, Khoa Nguyen, D. Vungarala, et al., \"FedChip: Federated LLM for Artificial Intelligence Accelerator Chip Design,\" 2025 IEEE International Conference on LLM-Aided Design (ICLAD'25), IEEE, 2025.",
    },
    {
      label: "[4]",
      text:
        "Khoa Nguyen, K. Tran, N. Phan, et al., \"SGFusion: Stochastic Geographic Gradient Fusion in Federated Learning,\" 2025 IEEE International Conference on Big Data (BigData'25), 2025.",
    },
  ] satisfies PublicationEntry[],
  patents: [
    {
      label: "[1]",
      text:
        "N. Phan, Khoa Nguyen, K. Ton, et al., System and Method for Private Generation of Code, International Patent Application, No. PCT/US25/042391, 2025.",
    },
  ] satisfies PublicationEntry[],
  teaching: [
    "Teaching Assistant: Basic Foundations of AI (FA25), Deep Learning (FA24, SP25), Programming Language Concepts (SP24).",
  ],
  timeline: [
    {
      label: "Nov 2024 - Present",
      title: "Research Scientist",
      organization: "OppyAI Inc. - Newark, NJ",
      detail:
        "Extended a privacy-preserving split-LLM framework into a production enterprise solution spanning general chat, multilingual NLU, VLMs, tool-augmented agentic systems, MoE architectures, GRPO post-training, and adversarial robustness.",
    },
    {
      label: "Nov 2025 - Present",
      title: "Research Collaborator",
      organization: "AT&T - Bedminster, NJ",
      detail:
        "Designed a graph foundation model for LTE/5G site-maintenance prediction using large-scale historical network data to optimize scheduling efficiency and user experience.",
    },
    {
      label: "Sep 2023 - Present",
      title: "Research Assistant",
      organization: "New Jersey Institute of Technology",
      detail:
        "Developed NOIR, GLMTest, FedChip, and SGFusion across privacy-preserving LLMs, code intelligence, federated PEFT, and geographic federated learning.",
    },
    {
      label: "Sep 2023 - Present",
      title: "Ph.D. in Data Science",
      organization: "New Jersey Institute of Technology",
      detail:
        "Advised by Dr. NhatHai Phan, with focus on LLMs, VLMs, SFT/RL post-training, tool-augmented agentic systems, AI for software engineering, security, and privacy.",
    },
  ] satisfies TimelineItem[],
  skillGroups: [
    {
      title: "Machine Learning",
      skills: [
        "LLMs",
        "VLMs",
        "Diffusion models",
        "NLP",
        "RL",
        "Distributed training",
        "GNNs",
        "Federated learning",
        "Distillation",
      ],
    },
    {
      title: "Frameworks",
      skills: ["PyTorch", "Transformers", "LLaMA-Factory", "verl", "vLLM", "Ray", "Triton", "DeepSpeed", "Accelerate"],
    },
    {
      title: "Infrastructures & Tools",
      skills: ["CUDA", "Linux", "Slurm", "Git", "Docker", "SQL", "Multi-GPU training"],
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C/C++"],
    },
  ] satisfies SkillGroup[],
  achievements: [
    {
      title: "Winner - GfK NextGen Data Science Hackathon 2022",
      detail: "",
    },
    {
      title: "ICPC Greater NY Regional Qualifier 2022",
      detail: "",
    },
  ] satisfies Achievement[],
  contactHeading: "Open to research engineering, LLM/VLM systems, and privacy-preserving AI roles.",
  contactText:
    "I am especially interested in teams building reliable agentic systems, secure ML infrastructure, post-training pipelines, and privacy-preserving AI that can move from research prototypes into deployed products.",
};
