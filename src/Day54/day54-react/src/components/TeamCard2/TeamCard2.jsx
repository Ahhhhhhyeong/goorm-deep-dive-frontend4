import React from 'react';
import { styles } from './TeamCard2.module.scss';

export default function TeamCard2({ image, name, role, level }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt={`${name}'s Profile`} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <p className={styles.level}>{level}</p>
    </div>
  );
}
