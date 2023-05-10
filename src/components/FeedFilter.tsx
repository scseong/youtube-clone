import React from 'react';
import styles from './FeedFilter.module.css';

const filterItems = [
  '전체',
  '믹스',
  '음악',
  '실시간',
  '게임',
  '피트니스',
  '요리',
];

export default function FeedFilter() {
  return (
    <div className={styles.filter}>
      <ul>
        {filterItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
