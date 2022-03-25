import Text from 'components/Text';
import { styled } from 'custom-stitches';
import { FC, ReactElement } from 'react';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';

interface Props {
  title: string;
  isStar?: boolean;
  imgSrc?: string;
  backgroundColor?: string;
  overlayColor?: string;
}

const Container = styled('div', {
  position: 'relative',
  height: 300,
  borderRadius: 8,
  boxShadow: '0px 4px 35px 5px rgba(0, 0, 0, 0.05)',
  transition: 'transform .2s',
  cursor: 'pointer',

  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const Title = styled('span', {
  position: 'absolute',
  bottom: 0,
  left: 20,
  display: 'flex',
  gap: 5,
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 300,
  borderRadius: 8,
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 81.25%)',
});

const FeatureCard: FC<Props> = ({ title, isStar, imgSrc, backgroundColor, overlayColor }: Props): ReactElement => {
  return (
    <Container
      css={{
        backgroundColor,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
    >
      <Overlay
        css={{
          background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${overlayColor} 81.25%)`,
        }}
      />
      <Title>
        <Text variant="heading">{title}</Text>
        {isStar ? <StarFilledIcon /> : <StarIcon />}
      </Title>
    </Container>
  );
};

export default FeatureCard;
