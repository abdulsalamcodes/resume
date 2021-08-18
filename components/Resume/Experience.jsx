/* eslint-disable no-console */
import React from 'react';
import styles from './Resume.module.scss';

const Resume = () => {
  const careers = [
    {
      title: 'Frontend Developer',
      company: 'Nativebrands',
      description: ['Collaborate to create software solutions to solve pain points for various clients',
        'Modifies code to fix errors'],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'HNGi7',
      description: ['Built websites with HTML, CSS, and JavaScript',
        'Lead groups of fellow developers to deliver web solutions'],
    },
  ];
  const skills = ['Frontend Development', 'Communication', 'Leadership skills', 'Team Management'];
  const tools = ['HTML & CSS', 'JavaScript', 'React & Nextjs', 'Redux', 'Firebase', 'Material UI', 'VSCode', 'Figma'];
  return (
    <div className={styles.experience__wrapper}>
      <div className={styles.user__experience}>
        <h3 className={styles.subheading}>Career Summary</h3>
        {careers.map((career) => (
          <div>
            <h4>{career.title}</h4>
            <p>{career.company}</p>
            <ul>{career.description.map((item) => <li>{item}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className={styles.user__skills}>
        <h3 className={styles.subheading}>Professional Skills</h3>
        <ul>
          {skills.map((skill) => <li>{skill}</li>)}
        </ul>
      </div>

      <div className={styles.user__tools}>
        <h3 className={styles.subheading}>Tools/Frameworks</h3>
        <ul>
          {tools.map((skill) => <li>{skill}</li>)}
        </ul>
      </div>

    </div>
  );
};

export default Resume;
