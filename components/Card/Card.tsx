import { JSX } from 'react';
import { CardProps } from './Card.props';
import Image from 'next/image';
import CardCategory from '../CardCategory/CardCategory';
import styles from './Card.module.css';
import P from '../P/P';
import Htag from '../Htag/Htag';
import ReadingTime from '../ReadingTime/ReadingTime';

export const Card = (props: CardProps): JSX.Element => {
  return (
    <section className={styles.card}>
      <Image className={styles.image} src={props.image} alt='' />
      <CardCategory tag='Front-end' date='1 месяц назад' rating={4} />
      <Htag tag='h3'>Как работать с CSS Grid</Htag>
      <P>
        Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
        сеток в CSS. Гриды подойдут и для верстки основных областей страницы...
      </P>
      <ReadingTime time='5 минут' />
    </section>
  );
};
