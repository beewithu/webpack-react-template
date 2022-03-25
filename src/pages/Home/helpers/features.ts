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
    imgSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/7b13ad77495861.5c8936f77b23c.png',
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
