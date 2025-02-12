import styles from './CardCategory.module.css';
import { CardCategoryProps } from './CardCategory.props';
import LikeIcon from './like.svg';

export default function CardCategory({ tag, date, rating }: CardCategoryProps) {
  return (
    <div className={styles.category}>
      <p>{tag}</p>
      <p className={styles.date}>{date}</p>
      <span>{rating}</span>
      <LikeIcon />
    </div>
  );
}
