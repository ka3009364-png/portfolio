import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  GitBranch,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Rocket,
  Send,
  ServerCog,
  Sparkles,
  Sun,
  TerminalSquare,
  X,
  Zap
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Kota Akshitha',
  email: 'ka3009364@gmail.com',
  phone: '8247768558',
  linkedin: 'https://www.linkedin.com/in/akshitha-kota-8254a3301/',
  github: 'https://github.com/ka3009364-png'
};

const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact'];

const skills = [
  { name: 'Java', level: 86, icon: Code2 },
  { name: 'Python', level: 84, icon: TerminalSquare },
  { name: 'HTML', level: 90, icon: Sparkles },
  { name: 'CSS', level: 88, icon: Zap },
  { name: 'JavaScript', level: 80, icon: Rocket },
  { name: 'SQL', level: 78, icon: Database },
  { name: 'Data Structures & Algorithms', level: 76, icon: ServerCog }
];

const projects = [
  {
    title: 'Student Portfolio Manager',
    tag: 'Web Application',
    description:
      'A web-based application designed to manage and showcase student portfolios efficiently. It allows users to store academic records, project details, and achievements in a structured format. Built with a focus on usability and clean UI.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SQL']
  },
  {
    title: 'Hospital Management System',
    tag: 'Operations Platform',
    description:
      'A comprehensive system for managing hospital operations including patient records, appointment scheduling, and staff management. Focused on improving efficiency and reducing manual work.',
    stack: ['Java', 'SQL', 'Web UI']
  },
  {
    title: 'Zomato Data Analysis',
    tag: 'Data Analytics',
    description:
      'A data analysis project using Python to analyze restaurant data, customer preferences, and trends. Implemented data cleaning, visualization, and insights extraction.',
    stack: ['Python', 'Pandas', 'Visualization']
  },
  {
    title: 'Weather Alerts System',
    tag: 'API Integration',
    description:
      'A real-time weather monitoring system that provides alerts based on weather conditions. Designed to notify users about critical weather changes using API integration.',
    stack: ['JavaScript', 'API', 'Alerts']
  }
];

const certifications = [
  'AI/ML Certification - EduSkills (AICTE)',
  'Python Full Stack Internship - EduSkills',
  'Full Stack Development - CogniFiz',
  'IoT Certification - Infosys'
];

const learning = ['Advanced Java', 'System Design basics', 'React'];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header
        theme={theme}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen((value) => !value)}
        onTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header({ theme, menuOpen, onMenu, onTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Kota Akshitha home">
        <span>KA</span>
        <strong>Akshitha</strong>
      </a>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => menuOpen && onMenu()}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button className="icon-button menu-button" type="button" onClick={onMenu} aria-label="Toggle menu">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">
            <Sparkles size={16} /> Fresher Software Developer
          </span>
          <h1>
            <span className="typing">Kota Akshitha</span>
            <span className="role-line">building clean, scalable web experiences.</span>
          </h1>
          <p>
            Aspiring full stack developer with a strong foundation in Java, Python, web technologies,
            SQL, and Data Structures. Focused on practical problem-solving and recruiter-ready work.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a className="secondary-button" href="/Kota_Akshitha_Resume.pdf" download>
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="contact-strip" aria-label="Contact links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Network size={17} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={17} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          aria-label="Developer profile visual"
        >
          <div className="profile-orbit">
            <div className="avatar-card">
              <div className="photo-frame">
                <img src="/ak_pic.jpeg" alt="Kota Akshitha" />
              </div>
              <p>Software Developer</p>
              <strong>Java • Python • React</strong>
            </div>
            <FloatingBadge className="badge-one" icon={Code2} text="Clean Code" />
            <FloatingBadge className="badge-two" icon={Database} text="SQL Ready" />
            <FloatingBadge className="badge-three" icon={Rocket} text="Job Ready" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBadge({ icon: Icon, text, className }) {
  return (
    <div className={`floating-badge ${className}`}>
      <Icon size={17} />
      {text}
    </div>
  );
}

function About() {
  return (
    <AnimatedSection className="about" id="about">
      <SectionHeading kicker="About Me" title="A fresher with practical engineering instincts." />
      <div className="about-layout">
        <div className="glass-panel large-copy">
          <p>
            Kota Akshitha is an aspiring software developer with a strong foundation in Java, Python,
            and web technologies. She is passionate about building efficient, scalable, and
            user-friendly applications. With a good understanding of Data Structures and Algorithms,
            she enjoys solving real-world problems and continuously improving her technical skills.
            She is eager to contribute to a dynamic development team and grow as a full stack developer.
          </p>
        </div>
        <div className="stats-grid">
          <Metric value="4+" label="Projects" />
          <Metric value="7" label="Core Skills" />
          <Metric value="4" label="Certifications" />
          <Metric value="1" label="Internship" />
        </div>
      </div>
    </AnimatedSection>
  );
}

function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionHeading kicker="Skills" title="A balanced foundation across code, data, and web." />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.article
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-top">
              <span>
                <skill.icon size={21} />
              </span>
              <strong>{skill.name}</strong>
            </div>
            <div className="progress-track" aria-label={`${skill.name} ${skill.level} percent`}>
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15 }}
              />
            </div>
            <small>{skill.level}%</small>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Projects() {
  return (
    <AnimatedSection id="projects">
      <SectionHeading kicker="Projects" title="Recruiter-friendly project work with clear outcomes." />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.07 }}
            whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
          >
            <div className="project-meta">
              <span>{project.tag}</span>
              <Code2 size={19} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="card-actions">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitBranch size={17} /> GitHub
              </a>
              <a href="#contact">
                <ArrowUpRight size={17} /> Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Certifications() {
  return (
    <AnimatedSection id="certifications">
      <SectionHeading kicker="Certifications" title="Proof of structured learning and growth." />
      <div className="timeline-grid">
        {certifications.map((item) => (
          <div className="timeline-item" key={item}>
            <span>
              <Award size={20} />
            </span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading kicker="Experience" title="Internship exposure with hands-on development practice." />
      <div className="experience-layout">
        <article className="glass-panel experience-card">
          <BriefcaseBusiness size={28} />
          <h3>Python Full Stack Internship</h3>
          <ul>
            <li>Completed Python Full Stack Internship with hands-on development experience.</li>
            <li>Gained practical exposure to real-world project development and problem-solving.</li>
          </ul>
        </article>
        <article className="learning-panel">
          <BookOpen size={26} />
          <h3>Currently Learning</h3>
          <div>
            {learning.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </AnimatedSection>
  );
}

function Contact() {
  const contactLinks = useMemo(
    () => [
      { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
      { label: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
      { label: 'LinkedIn Profile', href: profile.linkedin, icon: Network },
      { label: 'GitHub Profile', href: profile.github, icon: GitBranch }
    ],
    []
  );

  return (
    <AnimatedSection id="contact">
      <SectionHeading kicker="Contact" title="Ready for fresher software developer opportunities." />
      <div className="contact-layout">
        <div className="contact-card">
          <h3>Let’s connect</h3>
          <p>
            Open to internships, entry-level developer roles, and project opportunities where strong
            fundamentals and a learning mindset matter.
          </p>
          <div className="contact-list">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <link.icon size={18} /> {link.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" action={`mailto:${profile.email}`} method="post" encType="text/plain">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about the opportunity" required />
          </label>
          <button className="primary-button" type="submit">
            <Send size={18} /> Send Message
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
}

function SectionHeading({ kicker, title }) {
  return (
    <div className="section-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

function AnimatedSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric-card">
      <strong>{value}</strong>
      <span>{label}</span>
      <CheckCircle2 size={18} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>Kota Akshitha</strong>
        <span>
          <MapPin size={15} /> India
        </span>
      </div>
      <p>Built with React, Framer Motion, and responsive modern CSS.</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
