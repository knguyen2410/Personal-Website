import { Download, ExternalLink, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { profile, type ProfileLink } from "./content/profile";

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

function App() {
  const resumeLink = profile.links.find((link) => link.icon === "resume");

  return (
    <>
      <header className="site-header">
        <a className="site-title" href="#top" aria-label={`${profile.name} homepage`}>
          {profile.name}
        </a>
        <nav aria-label="Primary navigation">
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#publications">Publications</a>
          <a href="#teaching">Teaching</a>
          <a href="#achievements">Achievements</a>
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
              <Phone aria-hidden="true" size={17} />
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
            </li>
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
          <Section id="education" title="Education">
            <div className="resume-list">
              {profile.education.map((item) => (
                <article className="resume-entry" key={`${item.institution}-${item.degree}`}>
                  <div className="resume-entry-header">
                    <h3>{item.institution}</h3>
                    <time>{item.date}</time>
                  </div>
                  <p className="resume-title">{item.degree}</p>
                  <p>
                    <strong>Focus:</strong> {item.focus}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="skills" title="Technical Skills">
            <div className="skill-list resume-list">
              {profile.skillGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.skills.join(", ")}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <div className="resume-list">
              {profile.experience.map((item) => (
                <article className="resume-entry" key={`${item.organization}-${item.title}`}>
                  <div className="resume-entry-header">
                    <h3>
                      {item.organization} <span>|</span> {item.title}
                    </h3>
                    <time>{item.date}</time>
                  </div>
                  <ul className="bullet-list">
                    {item.bullets.map((bullet) => (
                      <li key={`${item.organization}-${bullet.label ?? bullet.text}`}>
                        {bullet.label ? <strong>{bullet.label}:</strong> : null} {bullet.text}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section id="publications" title="Publications">
            <div className="publication-group">
              <h3>Papers</h3>
              <ol className="numbered-list">
                {profile.papers.map((paper) => (
                  <li key={paper.label}>
                    <span>{paper.label}</span>
                    <p>{paper.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="publication-group">
              <h3>Patents</h3>
              <ol className="numbered-list">
                {profile.patents.map((patent) => (
                  <li key={patent.label}>
                    <span>{patent.label}</span>
                    <p>{patent.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <Section id="teaching" title="Teaching Experience">
            <ul className="bullet-list">
              {profile.teaching.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section id="achievements" title="Achievements">
            <ul className="bullet-list">
              {profile.achievements
                .filter((achievement) => achievement.title !== "Teaching Assistant at NJIT")
                .map((achievement) => (
                  <li key={achievement.title}>
                    <strong>{achievement.title}</strong>
                    {achievement.detail ? ` - ${achievement.detail}` : null}
                  </li>
                ))}
            </ul>
          </Section>
        </div>
      </main>
    </>
  );
}

export default App;
