import styles from './ReadingTime.module.css';
import ArrowIcon from './arrow.svg';
import { ReadingTimeProps } from './ReadingTime.props';
import Link from 'next/link';

export default function ReadingTime({ time, isRead = true }: ReadingTimeProps) {
  return (
    <div className={styles.wrapper}>
      <p>{time}</p>
      {isRead && (
        <Link className={styles.read} href='test'>
          Читать
          <ArrowIcon />
        </Link>
      )}
    </div>
  );
}
