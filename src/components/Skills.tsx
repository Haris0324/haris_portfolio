'use client';

import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

const skillsData = [
  {
    icon: '⚛️',
    color: 'cyan',
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    icon: '🖥️',
    color: 'purple',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose'],
  },
  {
    icon: '🔐',
    color: 'green',
    title: 'Auth & Payments',
    tags: ['JWT', 'Passport.js', 'NextAuth.js', 'Google OAuth', 'Stripe API'],
  },
  {
    icon: '🚀',
    color: 'amber',
    title: 'Tools & AI',
    tags: ['Git & GitHub', 'Vercel', 'Redis', 'Gemini AI', 'JavaScript', 'Python'],
  },
];

export default function Skills() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.section}>
      <div className="section-wrap">
        <div className={`section-header reveal`} ref={(el) => { cardsRef.current[0] = el; }}>
          <div className="section-eyebrow">Technical Arsenal</div>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {skillsData.map((skill, i) => (
            <div
              key={skill.title}
              className={`${styles.card} reveal`}
              ref={(el) => { cardsRef.current[i + 1] = el; }}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`${styles.icon} ${styles[skill.color]}`}>
                {skill.icon}
              </div>
              <h3 className={styles.title}>{skill.title}</h3>
              <div className={styles.tags}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
