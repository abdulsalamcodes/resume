import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <hr />
    <div className={styles.links}>
      <div>
        Official Website:
        <a href="https://abdulsalam.netlify.app/">
          <span>www.abdulsalam.netlify.app</span>
        </a>
      </div>
      <div>
        {' '}
        <span>@Abdulsalam</span>
        {' '}
        on Slack
      </div>
    </div>
  </div>
);

export default Footer;
