'use client';

import { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const projects = [
  {
    emoji: '🛒',
    colorClass: 'cartify',
    name: 'Cartify',
    subtitle: 'Full-Stack E-Commerce Platform',
    url: 'https://cartify-frontend-khaki.vercel.app/',
    desc: 'A scalable MERN-based e-commerce platform with responsive UI, optimized UX, and enterprise-grade features for modern online shopping.',
    features: [
      'Secure authentication via JWT, Passport.js & Google OAuth with role-based access control',
      'Stripe payment gateway with webhook handling for complete order lifecycle management',
      'Advanced product search, filtering, reviews & admin dashboard for inventory control',
      'Optimized RESTful APIs and MongoDB schemas for performance at scale',
    ],
    techs: [
      { label: 'React.js', color: 'cyan' },
      { label: 'Node.js', color: 'cyan' },
      { label: 'Express.js', color: 'cyan' },
      { label: 'MongoDB', color: 'green' },
      { label: 'Stripe API', color: 'purple' },
    ],
    btnGradient: 'linear-gradient(135deg, #00d4ff, rgba(0,212,255,0.7))',
  },
  {
    emoji: '🤖',
    colorClass: 'cvgenius',
    name: 'CV Genius AI',
    subtitle: 'AI-Powered Resume Builder SaaS',
    url: 'https://cv-genius-ai-ten.vercel.app/',
    desc: 'A full-stack AI SaaS platform that generates ATS-optimized resumes using large language models, with subscription billing and intelligent rate limiting.',
    features: [
      'Google Gemini AI transforms unstructured input into professional, ATS-optimized resume content',
      'Secure NextAuth authentication with OAuth and credential-based login flows',
      'Stripe subscription system with webhook automation for access control and billing',
      'Redis (Upstash) caching for global rate limiting — prevents API abuse at scale',
    ],
    techs: [
      { label: 'Next.js', color: 'purple' },
      { label: 'MongoDB', color: 'green' },
      { label: 'Gemini AI', color: 'cyan' },
      { label: 'Stripe', color: 'purple' },
      { label: 'Redis', color: 'green' },
    ],
    btnGradient: 'linear-gradient(135deg, #7c3aed, rgba(124,58,237,0.7))',
  },
];

export default function Projects() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className="section-wrap">
        <div className={`section-header reveal`} ref={(el) => { refs.current[0] = el; }}>
          <div className="section-eyebrow">Featured Work</div>
          <h2 className="section-title">My <span>Projects</span></h2>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} reveal`}
              ref={(el) => { refs.current[i + 1] = el; }}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={styles.header}>
                <div className={styles.top}>
                  <div className={`${styles.emoji} ${styles[p.colorClass]}`}>{p.emoji}</div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    title="Live Demo"
                  >
                    <ExternalIcon />
                  </a>
                </div>
                <h3 className={styles.projectName}>{p.name}</h3>
                <p className={styles.projectSubtitle}>{p.subtitle}</p>
                <p className={styles.projectDesc}>{p.desc}</p>
                <ul className={styles.features}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.footer}>
                {p.techs.map((t) => (
                  <span key={t.label} className={`${styles.badge} ${styles[t.color]}`}>
                    {t.label}
                  </span>
                ))}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visitBtn}
                  style={{ background: p.btnGradient }}
                >
                  Visit Live <ArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
