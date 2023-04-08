import { ClassName } from './helpers';

export interface Avatar extends UserLevelIndicator, ClassName {
  image: string;
  imageAlt: string;
}

export interface UserLevelIndicator {
  level: number;
  size?: 'small' | 'big';
}
