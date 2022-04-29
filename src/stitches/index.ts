import { createStitches } from '@stitches/react';
import { gray, blue, red, green, blackA, purple, whiteA } from '@radix-ui/colors';

const { styled, globalCss } = createStitches({
  theme: {
    fonts: {
      inter: 'Inter',
    },
    colors: {
      ...blackA,
      ...whiteA,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...purple,
    },
  },
});

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Inter',
  },
  '@import': [
    `url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap')`,
  ],
});
export { globalStyles, styled };
