'use client';

import { useEffect, useRef } from 'react';
import styles from './Education.module.css';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const educationData = [
  {
    year: '2023 — 2027',
    degree: 'BS Computer Science',
    school: 'COMSATS University Islamabad · 7th Semester',
    cgpa: '3.80',
  },
  {
    year: '2022',
    degree: 'Intermediate (Pre-Engineering)',
    school: 'Punjab College, Multan',
    cgpa: null,
  },
  {
    year: '2020',
    degree: 'Matriculation',
    school: 'Nishat School for Boys, Multan',
    cgpa: null,
  },
];

export default function Education() {
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
    <section id="education" className={styles.section}>
      <div className="section-wrap">
        <div className="section-header reveal" ref={(el) => { refs.current[0] = el; }}>
          <div className="section-eyebrow">Academic Background</div>
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {educationData.map((edu, i) => (
            <div
              key={edu.degree}
              className={`${styles.card} reveal`}
              ref={(el) => { refs.current[i + 1] = el; }}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.year}>{edu.year}</div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              {edu.cgpa && (
                <span className={styles.cgpaBadge}>
                  <StarIcon />
                  CGPA: {edu.cgpa}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
