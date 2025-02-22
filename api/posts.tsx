import { API } from '@/app/api';
import axios from 'axios';

export async function patchLike(likeStatus: boolean) {
  const { data } = await axios.patch(API.post.byAlias, { likeStatus });
  return { props: data };
}
