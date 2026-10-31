import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cuboid,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Palette,
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

function SectionLabel({ children, index }) {
  return <p className="section-label">// {index} . {children}</p>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <h1 className="hero-name">Hello, I&apos;m<br /><em>Sathira Samadith</em></h1>
            <p className="hero-lede hero-roles" aria-label="Full Stack Developer, Graphic Designer and Freelancer">
              <span>Full Stack Developer</span>
              <span>Graphic Designer and Freelancer</span>
            </p>
            <p className="hero-description">I am an undergraduate pursuing a BSc (Hons) in Computing and Information Systems, passionate about full-stack web development, graphic design, and freelance digital solutions. I bridge the gap between technical software architecture and compelling visual design to build scalable, high-performance web applications and cohesive brand identities.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Download CV <ArrowDown size={17} /></a>
              <a className="button button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/sathirasamadith988" target="_blank" rel="noreferrer" aria-label="GitHub"><svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sathirasamadith500%40gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><Mail size={17} /></a>
              <a href="#work" aria-label="Projects"><ExternalLink size={17} /></a>
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
          <div className="section-heading"><SectionLabel index="02">Skills & architecture</SectionLabel><h2>Dual capability <em>matrix</em></h2></div>
          <div className="skill-grid">
            <SkillPanel title="The engineer" subtitle="Logic & data" skills={engineerSkills} color="violet" />
            <SkillPanel title="The creative" subtitle="Aesthetics & motion" skills={creativeSkills} color="coral" />
          </div>
          <div className="about-strip" id="about"><GraduationCap size={28} /><div><p className="project-type">Academic profile & leadership</p><p>Undergraduate at Computing & Information Systems, BSc (Hons), SUSL. Equipped with strong interpersonal leadership skills to run collaborative projects and coordinate design-to-code pipelines.</p></div><span>CIS undergrad</span></div>
        </section>

        <section className="contact-section container" id="contact">
          <SectionLabel index="03">Contact</SectionLabel><h2>Let&apos;s build something <em>intelligent.</em></h2><p>Have an interesting project, ML implementation concept, or need a multidisciplinary creative technologist on your team? Let&apos;s talk.</p>
          <a className="email-link" href="mailto:sathirasamadith500@gmail.com"><Mail size={20} /> sathirasamadith500@gmail.com <ArrowUpRight size={18} /></a>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><span>© 2026 Sathira Samadith. Custom coded from scratch.</span><a href="https://github.com/sathirasamadith988" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19} /></a></div></footer>
    </div>
  );
}

function SkillPanel({ title, subtitle, skills, color }) {
  return <div className={`skill-panel skill-${color}`}><div className="skill-title"><span className="skill-mark" /><h3>{title}<small>{subtitle}</small></h3></div><ul>{skills.map(([label, Icon]) => <li key={label}><Icon size={18} /> <span>{label}</span></li>)}</ul></div>;
}

export default App;
