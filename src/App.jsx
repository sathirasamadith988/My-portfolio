import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cuboid,
  GraduationCap,
  Layers3,
  MapPin,
  Mail,
  Menu,
  Palette,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    type: 'FULL-STACK DEVELOPMENT',
    title: 'Digital products that work beautifully',
    description: 'Responsive web experiences built with thoughtful architecture, clear interfaces, and dependable front-end and back-end foundations.',
    label: 'Code & interfaces',
    icon: Code2,
    accent: 'violet',
    href: 'https://github.com/sathirasamadith988',
  },
  {
    number: '02',
    type: 'GRAPHIC DESIGN',
    title: 'Visual identities with a point of view',
    description: 'Brand systems, campaign visuals, and digital compositions designed to make ideas clearer, more memorable, and more compelling.',
    label: 'Brand & visual work',
    icon: Palette,
    accent: 'coral',
  },
];

const engineerSkills = [
  ['Python / PyTorch / TensorFlow', Code2],
  ['Machine learning & dataset training', Layers3],
  ['Full stack development', BriefcaseBusiness],
  ['Systems architecture & problem solving', Sparkles],
];

const creativeSkills = [
  ['Graphic design & visual typography', Palette],
  ['3D modeling & spatial asset creation', Cuboid],
  ['Video editing & motion graphics', Layers3],
  ['Brand identity & content creation', Sparkles],
];

const softSkills = [
  ['Communication & collaboration', Sparkles],
  ['Leadership & project coordination', BriefcaseBusiness],
  ['Creative problem solving', BrainCircuit],
  ['Adaptability & continuous learning', GraduationCap],
];

function SectionLabel({ children, index }) {
  return <p className="section-label">// {index} . {children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProfileTab, setActiveProfileTab] = useState('skills');
  const [cursorPosition, setCursorPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    const handlePointerMove = (event) => setCursorPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <span className="cursor-dot" style={{ transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)` }} aria-hidden="true" />
      <header className="site-header">
        <nav className="nav container" aria-label="Primary navigation">
          <a className="brand" href="#top" onClick={closeMenu}>
            SATHIRA.S <span>//</span>
          </a>
          <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a className="nav-home" href="#top" onClick={closeMenu}>Home</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-contact nav-hire" href="#contact" onClick={closeMenu}>Hire me <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <h1 className="hero-name"><span className="hero-outline-text">Hello, I&apos;m</span><br /><em>Sathira Samadith</em></h1>
            <p className="hero-lede hero-roles" aria-label="Full Stack Developer, Graphic Designer and Freelancer">
              <RoleText text="Full Stack Developer" typingDuration="2.8s" typingDelay=".4s" letterStart="3.25s" />
              <RoleText text="Graphic Designer and Freelancer" typingDuration="3.4s" typingDelay="3.5s" letterStart="6.95s" />
            </p>
            <p className="hero-description">I am an undergraduate pursuing a BSc (Hons) in Computing and Information Systems, passionate about full-stack web development, graphic design, and freelance digital solutions. I bridge the gap between technical software architecture and compelling visual design to build scalable, high-performance web applications and cohesive brand identities.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Download CV <ArrowDown size={17} /></a>
              <a className="button button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/sathirasamadith988" target="_blank" rel="noreferrer" aria-label="GitHub"><svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
              <a href="https://www.linkedin.com/in/sathira-samadith-59412938/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img className="linkedin-icon" src="/linkedin-logo.png" alt="" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sathirasamadith500%40gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><Mail size={17} /></a>
              <a href="#skills" aria-label="Skills"><Sparkles size={17} /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="photo-frame"><div className="art-core"><img src="/profile-photo-hero.png" alt="Sathira Samadith" /></div></div>
            <div className="education-badge"><span aria-hidden="true" /> Computing and Information Systems Undergraduate</div>
          </div>
          <div className="tech-stack" aria-label="Tech stack">
            <p className="tech-stack-label">Tech stack</p>
            <div className="tech-stack-grid">
              {['Next.js', 'Node.js', 'React.js', 'HTML', 'JavaScript', 'CSS', 'MySQL', 'Git', 'GitHub', 'Figma', 'Photoshop', 'Illustrator', 'After Effects'].map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading"><SectionLabel index="01">Selected work</SectionLabel><h2>Design <em>& development</em></h2><p>Two disciplines, one approach: make complex ideas useful, distinctive, and ready to meet the real world.</p></div>
          <div className="project-grid">
            {projects.map(({ number, type, title, description, label, icon: Icon, accent, href }) => (
              <article className={`project-card accent-${accent}`} key={title}>
                <div className="project-visual"><div className="visual-grid" />{accent === 'violet' && <div className="code-rain" aria-hidden="true">{['const build = () => {', 'return <Interface />', 'npm run deploy', 'async function solve()', 'git commit -m "ship"', 'design.system.init()', 'export default App', 'while (ideas) create();'].map((line, index) => <span style={{ '--i': index }} key={line}>{line}</span>)}</div>}{accent === 'coral' && <div className="design-art" aria-hidden="true"><span className="art-sun" /><span className="art-panel" /><span className="art-stripe art-stripe-one" /><span className="art-stripe art-stripe-two" /><span className="art-ring" /><span className="art-block art-block-one" /><span className="art-block art-block-two" /><span className="art-dot art-dot-one" /><span className="art-dot art-dot-two" /></div>}<Icon size={62} strokeWidth={1.1} /><span className="project-number">{number}</span><span className="visual-label">{label}</span></div>
                <div className="project-body"><p className="project-type">{type}</p><h3>{title}</h3><p>{description}</p><a href={href || '#contact'} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined}>{href ? 'View GitHub repository' : 'Discuss a similar idea'} <ArrowUpRight size={15} /></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section container" id="skills">
          <div className="profile-heading"><SectionLabel index="02">Skills & background</SectionLabel><h2>Why&nbsp;<em>hire me?</em></h2><p>A multidisciplinary developer and designer who brings technical thinking, visual clarity, and dependable execution to every project.</p></div>
          <div className="profile-layout">
            <div className="profile-tabs" role="tablist" aria-label="Profile information">
              {[
                ['experience', 'Experience'],
                ['education', 'Education'],
                ['skills', 'Skills'],
                ['about', 'About me'],
              ].map(([tab, label]) => (
                <button className={activeProfileTab === tab ? 'is-active' : ''} type="button" role="tab" aria-selected={activeProfileTab === tab} onClick={() => setActiveProfileTab(tab)} key={tab}>{label}</button>
              ))}
            </div>
            <div className="profile-content">
              {activeProfileTab === 'experience' && <ProfilePanel title="My experience" intro="Building practical digital experiences across development, design, and freelance work."><div className="profile-card-grid"><ProfileCard eyebrow="Full-stack development" title="Digital products that work beautifully" description="Responsive web experiences built with thoughtful architecture, clear interfaces, and dependable front-end and back-end foundations." /><ProfileCard eyebrow="Graphic design" title="Visual identities with a point of view" description="Brand systems, campaign visuals, and digital compositions designed to make ideas clearer and more memorable." /></div></ProfilePanel>}
              {activeProfileTab === 'education' && <ProfilePanel title="My education" intro="Currently developing a strong foundation in computing, information systems, and collaborative problem solving."><div className="profile-card-grid"><ProfileCard eyebrow="Current" title="BSc (Hons) in Computing and Information Systems" description="Undergraduate at SUSL, building skills across software development, systems architecture, and digital solutions." /><ProfileCard eyebrow="Focus" title="Technical and creative practice" description="Combining full-stack development, machine learning foundations, graphic design, and visual communication." /></div></ProfilePanel>}
              {activeProfileTab === 'skills' && <ProfilePanel title="My skills" intro="Technical expertise supported by strong communication, collaboration, and problem-solving abilities."><div className="profile-card-grid"><ProfileCard eyebrow="Technical skills" title="Development & design" skills={[...engineerSkills, ...creativeSkills]} /><ProfileCard eyebrow="Soft skills" title="People & process" skills={softSkills} /></div></ProfilePanel>}
              {activeProfileTab === 'about' && <ProfilePanel title="About me" intro="A multidisciplinary creative technologist who bridges software architecture and compelling visual design."><div className="about-profile"><p>I am a <strong>Full-Stack Developer, UI/UX Designer, and Tech Entrepreneur</strong> currently pursuing a BSc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka. As the founder of <strong>VibeAds Studio</strong>, a digital advertising and creative agency, I combine strategic vision with technical execution to deliver impactful brand identities, visual experiences, and custom digital solutions.</p><p>My engineering stack centers on modern web and mobile ecosystems, including <strong>Next.js, React, TypeScript, Flutter, and Firebase</strong>, supported by relational database management in <strong>MySQL and SQL Server</strong>. Backed by hands-on proficiency in design systems with <strong>Figma and Adobe Creative Suite</strong>, I take a human-centered approach to software engineering, ensuring applications are technically resilient, scalable, and intuitive to use.</p><p>Beyond core technical skills, I thrive in collaborative environments where <strong>adaptability, critical thinking, and proactive problem-solving</strong> drive results. Through leading project teams, coordinating with stakeholders, and applying Agile workflows, I ensure seamless communication between design, engineering, and client goals.</p></div></ProfilePanel>}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <SectionLabel index="03">Contact</SectionLabel>
          <div className="contact-layout">
            <form className="contact-form" action="mailto:sathirasamadith500@gmail.com" method="post" encType="text/plain">
              <h2>Let&apos;s work <em>together</em></h2>
              <p>Have a project in mind? Share a few details and let&apos;s create something useful, distinctive, and ready for the real world.</p>
              <div className="contact-fields">
                <input type="text" name="firstName" placeholder="First name" aria-label="First name" required />
                <input type="text" name="lastName" placeholder="Last name" aria-label="Last name" required />
                <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
                <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" />
              </div>
              <select name="service" aria-label="Select a service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Full-stack development</option>
                <option>UI/UX design</option>
                <option>Graphic design</option>
                <option>Digital advertising</option>
              </select>
              <textarea name="message" placeholder="Type your message here..." aria-label="Message" required />
              <button type="submit">Send message <ArrowUpRight size={15} /></button>
            </form>
            <div className="contact-details">
              <h2>Let&apos;s build something <em>intelligent.</em></h2>
              <p>Connect with me about development, design, digital advertising, or a custom digital solution.</p>
              <div className="contact-detail-list">
                <a href="mailto:sathirasamadith500@gmail.com"><span><Mail size={20} /></span><div><small>Email</small><strong>sathirasamadith500@gmail.com</strong></div></a>
                <a href="tel:+94717954537"><span><Phone size={20} /></span><div><small>Phone</small><strong>+94 71 795 45 37</strong></div></a>
                <div><span><MapPin size={20} /></span><div><small>Location</small><strong>Balangoda</strong></div></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><span>© 2026 Sathira Samadith. Custom coded from scratch.</span><a href="https://github.com/sathirasamadith988" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19} /></a></div></footer>
    </div>
  );
}

function SkillPanel({ title, subtitle, skills, color }) {
  return <div className={`skill-panel skill-${color}`}><div className="skill-title"><span className="skill-mark" /><h3>{title}<small>{subtitle}</small></h3></div><ul>{skills.map(([label, Icon]) => <li key={label}><Icon size={18} /> <span>{label}</span></li>)}</ul></div>;
}

function ProfilePanel({ title, intro, children }) {
  return <div className="profile-panel"><div className="profile-panel-heading"><h3>{title}</h3><p>{intro}</p></div>{children}</div>;
}

function ProfileCard({ eyebrow, title, description, skills }) {
  return <article className="profile-card"><p className="profile-card-eyebrow">{eyebrow}</p><h4>{title}</h4>{skills ? <ul>{skills.map(([label, Icon]) => <li key={label}><Icon size={16} /> <span>{label}</span></li>)}</ul> : <p>{description}</p>}</article>;
}

function RoleText({ text, typingDuration, typingDelay, letterStart }) {
  return <span style={{ '--typing-duration': typingDuration, '--typing-delay': typingDelay, '--letter-start': letterStart }}>{[...text].map((character, index) => <span className="role-letter" style={{ '--letter-index': index }} key={`${character}-${index}`}>{character === ' ' ? '\u00a0' : character}</span>)}</span>;
}

export default App;
