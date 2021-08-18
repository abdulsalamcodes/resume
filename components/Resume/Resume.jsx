/* eslint-disable no-console */
import React from 'react';
import styles from './Resume.module.scss';
import Profile from './Profile';
import Bio from './Bio';
import Experience from './Experience';
import Footer from './Footer/Footer';

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
  </div>
);

export default Resume;
