export type ProfileLink = {
  label: string;
  href: string;
  icon: "github" | "mail" | "resume" | "external";
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

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

export const profile = {
  name: "Khoa Nguyen",
  role: "Research Engineer",
  location: "United States",
  email: "nkhoa2410@gmail.com",
  githubUrl: "https://github.com/knguyen2410",
  resumePath: assetPath("resume.pdf"),
  heroImage: assetPath("research-workspace.png"),
  headline:
    "I build machine learning experiments, evaluation pipelines, and applied AI systems with a bias toward reproducibility.",
  summary: [
    "My work sits between research questions and usable systems: turning papers, benchmarks, and model behavior into things that can be tested, compared, and improved.",
    "This homepage is a compact profile for research engineering roles, with projects and technical work as the main evidence.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/knguyen2410",
      icon: "github",
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
  signals: ["ML experiments", "Evaluation", "Reproducibility", "Applied AI"],
  projects: [
    {
      title: "Representation Learning Toolkit",
      focus: "Model behavior",
      summary:
        "A research sandbox for comparing embedding models across retrieval, clustering, and downstream transfer tasks.",
      approach:
        "Designed shared loaders, metric runners, and report outputs so experiments can be repeated with minimal setup.",
      impact:
        "Replace this with the clearest result: accuracy lift, runtime reduction, benchmark win, or research insight.",
      stack: ["Python", "PyTorch", "NumPy", "scikit-learn"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/knguyen2410",
          icon: "github",
          external: true,
        },
      ],
    },
    {
      title: "Experiment Tracking Pipeline",
      focus: "Reproducibility",
      summary:
        "A compact workflow for logging runs, comparing metrics, and preserving configuration for ML experiments.",
      approach:
        "Structured each run around versioned configs, deterministic seeds, artifact capture, and small report summaries.",
      impact:
        "Replace this with the outcome that matters most: fewer reruns, faster comparison, or cleaner handoff.",
      stack: ["TypeScript", "Python", "SQLite", "GitHub Actions"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/knguyen2410",
          icon: "github",
          external: true,
        },
      ],
    },
    {
      title: "Robust Vision Benchmark",
      focus: "Evaluation",
      summary:
        "A benchmark harness for stress-testing vision models against distribution shifts and noisy labels.",
      approach:
        "Built evaluation splits, augmentation sweeps, and compact plots to expose where models fail consistently.",
      impact:
        "Replace this with the strongest signal: failure mode discovered, benchmark coverage, or model improvement.",
      stack: ["PyTorch", "OpenCV", "Pandas", "Matplotlib"],
      links: [
        {
          label: "Repository",
          href: "https://github.com/knguyen2410",
          icon: "github",
          external: true,
        },
      ],
    },
  ] satisfies Project[],
  research: [
    {
      title: "Paper Reproduction Notes",
      description:
        "Short technical notes that translate papers into runnable experiments, implementation caveats, and observed gaps.",
      tags: ["reproduction", "benchmarks", "implementation"],
    },
    {
      title: "Model Evaluation Memos",
      description:
        "Compact analyses of model behavior, metric selection, and failure cases across applied AI workflows.",
      tags: ["evaluation", "error analysis", "metrics"],
    },
    {
      title: "Applied Systems Experiments",
      description:
        "Prototype systems that connect research ideas to usable tools, with attention to data flow and testability.",
      tags: ["systems", "pipelines", "interfaces"],
    },
  ] satisfies ResearchItem[],
  timeline: [
    {
      label: "Experience",
      title: "Research Engineering Projects",
      organization: "Independent and academic work",
      detail:
        "Built and evaluated ML prototypes, reproducible experiment workflows, and technical writeups for applied research questions.",
    },
    {
      label: "Education",
      title: "Computer Science and Machine Learning",
      organization: "Add university or program",
      detail:
        "Add degree, coursework, research lab, thesis, or relevant academic focus before broad application use.",
    },
  ] satisfies TimelineItem[],
  skillGroups: [
    {
      title: "ML / AI",
      skills: ["PyTorch", "Transformers", "Evaluation", "Representation learning"],
    },
    {
      title: "Research",
      skills: ["Paper reproduction", "Ablations", "Benchmarking", "Error analysis"],
    },
    {
      title: "Engineering",
      skills: ["TypeScript", "Python", "React", "APIs"],
    },
    {
      title: "Data",
      skills: ["Pandas", "SQL", "Data pipelines", "Visualization"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub Actions", "Linux", "Docker"],
    },
  ] satisfies SkillGroup[],
};
