import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";
import { profile, type ProfileLink, type Project } from "./content/profile";

const iconForLink = {
  github: Github,
  mail: Mail,
  resume: Download,
  external: ExternalLink,
};

function LinkButton({ link, variant = "secondary" }: { link: ProfileLink; variant?: "primary" | "secondary" }) {
  const Icon = iconForLink[link.icon];

  return (
    <a
      className={`link-button ${variant}`}
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
    >
      <Icon aria-hidden="true" size={18} />
      <span>{link.label}</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-visual" aria-hidden="true">
        <span>0{index + 1}</span>
        <strong>{project.focus}</strong>
      </div>
      <div className="project-body">
        <div>
          <p className="project-focus">{project.focus}</p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <dl className="project-details">
          <div>
            <dt>Approach</dt>
            <dd>{project.approach}</dd>
          </div>
          <div>
            <dt>Signal</dt>
            <dd>{project.impact}</dd>
          </div>
        </dl>
        <div className="project-stack" aria-label={`${project.title} technology stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={`${project.title}-${link.label}`}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function App() {
  const primaryLinks = profile.links.slice(0, 2);
  const resumeLink = profile.links.find((link) => link.icon === "resume");

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={`${profile.name} homepage`}>
          <span>K</span>
          {profile.name}
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(247, 246, 241, 0.95) 0%, rgba(247, 246, 241, 0.84) 42%, rgba(247, 246, 241, 0.18) 100%), url(${profile.heroImage})`,
          }}
        >
          <div className="hero-inner">
            <p className="eyebrow">{profile.role}</p>
            <h1>{profile.name}</h1>
            <p className="hero-headline">{profile.headline}</p>
            <div className="hero-summary">
              {profile.summary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="hero-actions">
              {resumeLink ? <LinkButton link={resumeLink} variant="primary" /> : null}
              {primaryLinks.map((link) => (
                <LinkButton key={link.label} link={link} />
              ))}
            </div>
            <div className="signal-row" aria-label="Profile focus areas">
              {profile.signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading eyebrow="Selected work" title="Projects that show the research loop" />
          <div className="project-grid">
            {profile.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section section-band" id="research">
          <SectionHeading eyebrow="Technical work" title="Research habits I want visible" />
          <div className="research-list">
            {profile.research.map((item) => (
              <article className="research-item" key={item.title}>
                <BookOpen aria-hidden="true" size={22} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section" id="experience">
          <div>
            <SectionHeading eyebrow="Background" title="Experience and education" />
            <div className="timeline">
              {profile.timeline.map((item) => {
                const Icon = item.label === "Education" ? GraduationCap : BriefcaseBusiness;

                return (
                  <article className="timeline-item" key={`${item.label}-${item.title}`}>
                    <Icon aria-hidden="true" size={22} />
                    <div>
                      <p>{item.label}</p>
                      <h3>{item.title}</h3>
                      <span>{item.organization}</span>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Stack" title="Skills grouped for scanning" />
            <div className="skill-grid">
              {profile.skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <FileText aria-hidden="true" size={20} />
                  <h3>{group.title}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to research engineering roles.</h2>
            <p>
              I am especially interested in teams that care about strong evaluation, clean experiment design,
              and research work that can survive contact with real users.
            </p>
          </div>
          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={18} />
              {profile.email}
            </a>
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" size={18} />
              GitHub
            </a>
            <a href={profile.resumePath}>
              <Download aria-hidden="true" size={18} />
              Resume
            </a>
          </div>
          <p className="location">
            <MapPin aria-hidden="true" size={16} />
            {profile.location}
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
