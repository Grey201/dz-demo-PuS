import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  size?: 'm' | 's' | 'l';
}
