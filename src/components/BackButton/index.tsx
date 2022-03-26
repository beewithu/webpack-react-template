import { ChevronLeftIcon } from '@radix-ui/react-icons';
import Text from 'components/Text';
import { styled } from 'custom-stitches';
import { FC, ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  label: string;
  path: string;
}

const Container = styled('div', {
  position: 'absolute',
  top: 0,
  left: 20,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: '$gray12',
  cursor: 'pointer',
});

const BackButton: FC<Props> = ({ label, path }: Props): ReactElement => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(path);
  };

  return (
    <Container onClick={onClick}>
      <ChevronLeftIcon />
      <Text>{label}</Text>
    </Container>
  );
};

export default BackButton;
