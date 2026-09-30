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
    type: 'AI BACKEND / UI/UX',
    title: 'SmartCreative AI Engine',
    description: 'A custom web application demonstrating computer vision UI styling and intelligent image enhancement processing loops.',
    label: 'Interactive frame',
    icon: BrainCircuit,
    accent: 'violet',
  },
  {
    number: '02',
    type: '3D MODELING / MOTION',
    title: 'Abstract Motion Design Loop',
    description: 'A visual narrative demonstrating render layering, 3D physics modeling transformations, and creative video sequencing execution.',
    label: '3D render showcase',
    icon: Cuboid,
    accent: 'coral',
  },
  {
    number: '03',
    type: 'FULL STACK / TAILWIND',
    title: 'Next-Gen Custom Architecture Website',
    description: 'A fully reactive, highly responsive deployment showcasing modern OOP principles applied directly to client interfaces.',
    label: 'View repository',
    icon: Code2,
    accent: 'lime',
    href: 'https://github.com/sathirasamadith988',
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
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="availability"><span /> Available for freelance & research</div>
            <p className="eyebrow">COMPUTING × CREATIVITY</p>
            <h1 className="hero-name">Sathira<br /><em>Samadith</em></h1>
            <p className="hero-lede hero-roles" aria-label="Full Stack Developer, Graphic Designer, Freelancer">
              <span>Full Stack Developer</span>
              <span>Graphic Designer &amp; Freelancer</span>
            </p>
            <p className="hero-description">Passionate Full-Stack Developer and creative Graphic Designer dedicated to crafting fast, intuitive, and visually compelling digital products. A freelance problem-solver and critical thinker, I blend technical architecture with purposeful design and collaborative leadership to turn bold ideas into high-impact realities.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View showcase <ArrowDown size={17} /></a>
              <a className="button button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="photo-frame"><div className="art-core"><img src="/profile-photo.png.jpeg" alt="Sathira Samadith" /></div></div>
          </div>
          <div className="scroll-note"><span>Scroll to explore</span><ArrowDown size={15} /></div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading"><SectionLabel index="01">Selected work</SectionLabel><h2>Project <em>concepts</em></h2><p>Experiments at the intersection of a sharp technical mind and a restless visual one.</p></div>
          <div className="project-grid">
            {projects.map(({ number, type, title, description, label, icon: Icon, accent, href }) => (
              <article className={`project-card accent-${accent}`} key={title}>
                <div className="project-visual"><div className="visual-grid" /><Icon size={62} strokeWidth={1.1} /><span className="project-number">{number}</span><span className="visual-label">{label}</span></div>
                <div className="project-body"><p className="project-type">{type}</p><h3>{title}</h3><p>{description}</p><a href={href || '#contact'} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined}>{href ? 'View GitHub repository' : 'Discuss a similar idea'} <ArrowUpRight size={15} /></a></div>
              </article>
            ))}
          </div>
          <div className="coming-soon"><Palette size={28} /><div><h3>Visual design portfolio</h3><p>Graphic works, brand assets, and creative lookbooks are currently syncing to Behance.</p></div><span>Updating soon</span></div>
        </section>

        <section className="section skills-section container" id="skills">
          <div className="section-heading"><SectionLabel index="02">Skills & architecture</SectionLabel><h2>Dual capability <em>matrix</em></h2></div>
          <div className="skill-grid">
            <SkillPanel title="The engineer" subtitle="Logic & data" skills={engineerSkills} color="violet" />
            <SkillPanel title="The creative" subtitle="Aesthetics & motion" skills={creativeSkills} color="coral" />
          </div>
          <div className="about-strip" id="about"><GraduationCap size={28} /><div><p className="project-type">Academic profile & leadership</p><p>BSc (Hons) in Computing & Information Systems undergraduate. Equipped with strong interpersonal leadership skills to run collaborative projects and coordinate design-to-code pipelines.</p></div><span>CIS undergrad</span></div>
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
