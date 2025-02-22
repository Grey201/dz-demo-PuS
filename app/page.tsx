import { Card } from '@/components';
import CardIm from '../components/Card/card.png';
import Button from '@/components/Button/Button';
import LikeIcon from '../components/CardCategory/like.svg';

export default function Home() {
  return (
    <>
      <Card image={CardIm}>Card text</Card>
      <Button appearance='ghost'>
        <LikeIcon />
      </Button>
    </>
  );
}
