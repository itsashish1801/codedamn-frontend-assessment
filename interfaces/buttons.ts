import { ReactElement } from 'react';

export interface Button {
  children: string | ReactElement;
  variant?: 'primary' | 'secondary';
  clickHandler?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
