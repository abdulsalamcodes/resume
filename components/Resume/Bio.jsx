/* eslint-disable no-console */
import React from 'react';
import styles from './Resume.module.scss';

const Resume = () => {
  const education = [
    {
      title: 'JavaScript Course on Udemy',
      certificate: 'Certificate of Completion',
      achievements: ['Learnt the core features of JavaScript', 'Build practice projects'],
    },
    {
      title: 'React Course on Udemy',
      certificate: 'Certificate of Completion',
      achievements: ['Learnt the core features of React', 'Build practice projects'],
    },
    {
      title: 'Web Development Course on Udemy',
      certificate: 'Certificate of Completion',
      achievements: ['Learnt HTML, CSS, and JavaScript', 'Learnt the basics of frontend and backend development', 'Build practice projects'],
    },
  ];

  return (
    <div>
      <div className={styles.user__bio}>
        <h3 className={styles.subheading}>Personal Profile</h3>
        <p>
          I am a Frontend developer with high
          interest in building web Applications.
          As a solution-oriented personnel,
          my approach is always about breaking
          down the process into small pieces,
          and going through the process till the final.
        </p>
      </div>

      <div className={styles.user__bio}>
        <h3 className={styles.subheading}>Educational Training</h3>
        {education.map((item) => (
          <div className={styles.education}>
            <h4>{item.title}</h4>
            <p>{item.certificate}</p>
            <ul>
              {item.achievements.map((achievement) => <li>{achievement}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Resume;
