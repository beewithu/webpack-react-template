import { blue, cyan, green, purple, yellow } from '@radix-ui/colors';

export type Feature = {
  name: string;
  imgSrc?: string;
  isStar?: boolean;
  backgroundColor?: string;
  overlayColor?: string;
};

export const features: Feature[] = [
  {
    name: 'Feature Card #1',
    isStar: true,
    overlayColor: blue.blue4,
  },
  {
    name: 'Carousel',
    isStar: true,
    backgroundColor: purple.purple6,
    overlayColor: yellow.yellow6,
  },
  {
    name: 'Context Menu',
    backgroundColor: green.green6,
    overlayColor: cyan.cyan6,
  },
];
