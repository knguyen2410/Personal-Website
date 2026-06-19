import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { ReactNode } from "react";
import { profile, type ProfileLink, type Project } from "./content/profile";

const iconForLink = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  resume: Download,
  external: ExternalLink,
};

function ProfileLinkItem({ link }: { link: ProfileLink }) {
  const Icon = iconForLink[link.icon];

  return (
    <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
      <Icon aria-hidden="true" size={17} />
      <span>{link.label}</span>
    </a>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section className="content-section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="project-item">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <p>{project.impact}</p>
      <div className="tag-row" aria-label={`${project.title} technology stack`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

function App() {
  const resumeLink = profile.links.find((link) => link.icon === "resume");

  return (
    <>
      <header className="site-header">
        <a className="site-title" href="#top" aria-label={`${profile.name} homepage`}>
          {profile.name}
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          {resumeLink ? <a href={resumeLink.href}>CV</a> : null}
        </nav>
      </header>

      <main className="page-shell" id="top">
        <aside className="profile-sidebar" aria-label="Profile summary">
          <img className="profile-photo" src={profile.profileImage} alt={`${profile.name} portrait`} />
          <h1>{profile.name}</h1>
          <p className="profile-role">{profile.role}</p>
          <ul className="profile-meta">
            <li>
              <MapPin aria-hidden="true" size={17} />
              <span>{profile.location}</span>
            </li>
            <li>
              <Mail aria-hidden="true" size={17} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
          <div className="profile-links">
            {profile.links.map((link) => (
              <ProfileLinkItem key={link.label} link={link} />
            ))}
          </div>
        </aside>

        <div className="content-column">
          <Section id="about" title="About me">
            <p>{profile.summary[0]}</p>
            <p>{profile.summary[1]}</p>
            <p>{profile.headline}</p>
            <div className="interest-row" aria-label="Research interests">
              {profile.signals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </Section>

          <Section id="news" title="Recent News">
            <ol className="news-list">
              {profile.news.map((item) => (
                <li key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="publications" title="Publications">
            <div className="publication-list">
              {profile.research.map((item) => (
                <article className="publication-item" key={item.title}>
                  <BookOpen aria-hidden="true" size={19} />
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
          </Section>

          <Section id="projects" title="Selected Projects">
            <div className="project-list">
              {profile.projects.map((project) => (
                <ProjectItem key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience and Education">
            <div className="timeline-list">
              {profile.timeline.map((item) => {
                const isEducation = item.title.includes("Ph.D.") || item.title.includes("B.S.");
                const Icon = isEducation ? GraduationCap : BriefcaseBusiness;

                return (
                  <article className="timeline-item" key={`${item.label}-${item.title}`}>
                    <Icon aria-hidden="true" size={19} />
                    <div>
                      <p className="item-date">{item.label}</p>
                      <h3>{item.title}</h3>
                      <p className="item-place">{item.organization}</p>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="skill-list">
              {profile.skillGroups.map((group) => (
                <article key={group.title}>
                  <FileText aria-hidden="true" size={18} />
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.skills.join(", ")}</p>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="service" title="Service and Recognition">
            <div className="achievement-list">
              {profile.achievements.map((achievement) => (
                <article key={achievement.title}>
                  <Award aria-hidden="true" size={18} />
                  <div>
                    <h3>{achievement.title}</h3>
                    <p>{achievement.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <p>{profile.contactText}</p>
            <ul className="contact-list">
              <li>
                <Mail aria-hidden="true" size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <Phone aria-hidden="true" size={18} />
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
              </li>
              <li>
                <Github aria-hidden="true" size={18} />
                <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <Linkedin aria-hidden="true" size={18} />
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </main>
    </>
  );
}

export default App;
