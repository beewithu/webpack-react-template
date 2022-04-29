import { styled } from 'stitches';

const Input = styled('input', {
  backgroundColor: '$gray2',
  outlineWidth: '1px',
  outlineStyle: 'solid',
  outlineColor: '$gray6',
  borderRadius: '4px',
  padding: '8px',
  border: 'none',
  transitionDuration: '500ms',

  '&:focus': {
    outlineColor: '$gray10',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue2',
        outlineColor: '$blue6',
        '&:focus': {
          outlineColor: '$blue10',
        },
      },
      success: {
        backgroundColor: '$green2',
        outlineColor: '$green6',
        '&:focus': {
          outlineColor: '$green10',
        },
      },
      error: {
        backgroundColor: '$red2',
        outlineColor: '$red6',
        '&:focus': {
          outlineColor: '$red10',
        },
      },
    },
  },
});

export default Input;
