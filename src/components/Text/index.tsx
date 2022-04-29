import { styled } from 'stitches';

const Text = styled('p', {
  fontFamily: '$inter',
  fontSize: 13,
  fontWeight: 400,
  lineHeight: '18.6px',
  color: '$gray12',

  variants: {
    variant: {
      heading: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: '22.4px',
      },
      title: {
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '20px',
      },
      subtitle: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '18.6px',
      },
      caption: {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '16.5px',
      },
    },
    type: {
      primary: {
        color: '$blue10',
      },
      secondary: {
        color: '$blue6',
      },
      subtitle: {
        color: '$gray10',
      },
      success: {
        color: '$green10',
      },
      danger: {
        color: '$red10',
      },
    },
  },
});

export default Text;
