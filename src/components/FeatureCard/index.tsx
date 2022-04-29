import Text from 'components/Text';
import { styled } from 'stitches';
import { FC, ReactElement } from 'react';
import { StarFilledIcon, StarIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  path: string;
  isStar?: boolean;
  imgSrc?: string;
  backgroundColor?: string;
  overlayColor?: string;
  titleColor?: string;
  width?: string;
  height?: string;
}

const Container = styled('div', {
  position: 'relative',
  width: 420,
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
  right: 20,
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
  bottom: 0,
  borderRadius: 8,
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 81.25%)',
});

const UnstyledLink = styled(Link, {
  color: 'inherit',
  textDecoration: 'inherit',
  cursor: 'inherit',
});

const FeatureCard: FC<Props> = ({
  title,
  path,
  isStar,
  imgSrc,
  backgroundColor,
  overlayColor,
  titleColor,
  width,
  height,
}: Props): ReactElement => {
  return (
    <UnstyledLink to={path}>
      <Container
        css={{
          backgroundColor,
          color: titleColor,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width,
          height,
        }}
      >
        <Overlay
          css={{
            background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${overlayColor} 81.25%)`,
          }}
        />
        <Title>
          <Text
            variant="heading"
            css={{ color: titleColor, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
          >
            {title}
          </Text>
          {isStar ? <StarFilledIcon /> : <StarIcon />}
        </Title>
      </Container>
    </UnstyledLink>
  );
};

export default FeatureCard;
