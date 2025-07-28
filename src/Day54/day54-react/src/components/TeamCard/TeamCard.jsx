import React from 'react';
import styles from './TeamCard.module.scss';

export default function TeamCard({ name, role, image }) {
  return (
    <div className={styles.card}>
      <img className={styles.avater} src={image} alt={`${name}'s profile`} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
