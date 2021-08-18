/* eslint-disable no-console */
import React from 'react';
import styles from './Resume.module.scss';
import Profile from './Profile';
import Bio from './Bio';
import Experience from './Experience';
import Footer from './Footer/Footer';

const companies = [
  { link: 'https://training.zuri.team/', logo: 'https://cutt.ly/sQNeGcC' },
  { link: 'https://hng.tech/', logo: '/hng-internship.jpeg' },
  { link: 'https://ingressive.org/', logo: 'https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png' },
];

const Resume = () => (
  <div className={styles.container}>
    <main className={styles.resume}>
      <h4 className={styles.heading}>Online Resume</h4>
      <section className={styles.resume__card}>
        <div className={styles.layout}>
          <Profile />
          <Bio />
          <Experience />
        </div>
        <Footer />
      </section>
    </main>

    <div className={styles.footnote}>
      <p>
        This project is the stage 2 task of HNGI8 x I4G internship
        <strong> powered by:</strong>
      </p>
      <div className={styles.companies}>
        {companies.map((company) => (
          <div className={styles.company}>
            <a href={company.link}>
              <img src={company.logo} alt={company.name} />
            </a>
          </div>
        ))}
      </div>

    </div>
  </div>
);

export default Resume;
