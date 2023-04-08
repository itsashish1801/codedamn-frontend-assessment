import { StaticImageData } from 'next/image';

export default interface Stat {
  title: string | number;
  subtitle: string;
  image: StaticImageData;
  imageAlt: string;
}
