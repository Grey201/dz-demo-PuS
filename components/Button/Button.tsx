'use client';

import { JSX, useCallback, useState } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import { patchLike } from '@/api/posts';

export default function Button({
  children,
  className,
  appearance = 'primary',
  isLiked = false,
  ...props
}: ButtonProps): JSX.Element {
  const [isPostLiked, setIsPostLiked] = useState<boolean>(isLiked);

  const handleClick = useCallback(() => {
    const newLikeStatus = !isPostLiked;
    setIsPostLiked(newLikeStatus);
    patchLike(newLikeStatus);
  }, [isPostLiked]);

  return (
    <button
      className={cn(styles.button, className, {
        [styles.ghost]: appearance == 'ghost',
        [styles.like]: appearance == 'like',
        [styles.primary]: appearance == 'primary',
        [styles.dark]: isPostLiked,
      })}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
