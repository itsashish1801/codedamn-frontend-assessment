import { ClassName } from './helpers';

export interface Tag {
  variant?: 'basic' | 'color';
  color?: 'primary' | 'success';
  className?: string;
  text: string;
}

export interface TagWithIcon {
  text: string;
  image: string;
  width?: number;
  height?: number;
}

export interface CategoryTag extends ClassName {
  image?: string;
  category: string;
}
