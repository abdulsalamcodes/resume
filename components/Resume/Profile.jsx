import React from 'react';
import styles from './Resume.module.scss';

const contacts = [
  { name: 'Email: ', type: 'link', value: 'mailto: https://cutt.ly/VQBzoIm' },
  { name: 'Phone: ', value: '09064777159' },
  { name: 'LinkedIn :', type: 'link', value: 'https://cutt.ly/tQBzuWR' },
  { name: 'Location: ', value: 'Ife, Osun State, Nigeria' },
];

const Profile = () => (
  <div>
    <div className={styles.user__profile}>
      <h3 className={styles.user__name}>Abodunrin Abdulsalam</h3>
      <h5 className={styles.user__title}>Frontend Developer</h5>
    </div>

    <div className={styles.user__contacts}>
      <h3>Contacts</h3>

      <div>
        {contacts.map((item) => (
          <div className={styles.user__contact} key={item.name}>
            <h4>{item.name}</h4>
            {item.type === 'link' ? (
              <a href={item.value}>{item.value}</a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Profile;
