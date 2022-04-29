import { blue, cyan, green, purple, yellow } from '@radix-ui/colors';

export type Feature = {
  key: string;
  name: string;
  path: string;
  imgSrc?: string;
  isStar?: boolean;
  backgroundColor?: string;
  overlayColor?: string;
  titleColor?: string;
};

const COMPONENTS_PATH = 'components';

const getPath = (path: string): string => {
  return `/${COMPONENTS_PATH}/${path}`;
};

export const features: Feature[] = [
  {
    key: 'feature-card',
    name: 'Feature Card',
    path: getPath('feature-card'),
    isStar: true,
    overlayColor: blue.blue4,
    titleColor: '#000',
  },
  {
    key: 'carousel',
    name: 'Carousel',
    path: getPath('carousel'),
    isStar: true,
    backgroundColor: purple.purple6,
    overlayColor: yellow.yellow6,
    titleColor: '#000',
  },
  {
    key: 'context-menu',
    name: 'Context Menu',
    path: getPath('context-menu'),
    backgroundColor: green.green6,
    overlayColor: cyan.cyan6,
    titleColor: '#000',
  },
];
