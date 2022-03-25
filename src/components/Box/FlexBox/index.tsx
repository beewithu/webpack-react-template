import { styled } from '@stitches/react';

const FlexBox = styled('div', {
  display: 'flex',

  variants: {
    flexStyle: {
      center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      'flex-start': {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      'flex-end': {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
      baseline: {
        alignItems: 'baseline',
        justifyContent: 'baseline',
      },
    },
  },
});

export default FlexBox;
