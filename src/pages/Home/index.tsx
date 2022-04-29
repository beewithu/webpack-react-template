import FeatureCard from 'components/FeatureCard';
import Text from 'components/Text';
import { styled } from 'stitches';
import MainLayout from 'layouts/Main';
import { FC, ReactElement } from 'react';
import { features } from './helpers';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 420px)',
  gridGap: '18px',
  justifyContent: 'center',
});

const Home: FC = (): ReactElement => {
  return (
    <MainLayout>
      <Text
        css={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: 32,
        }}
      >
        Sandbox's Features
      </Text>
      <Container>
        {features.map((feature) => (
          <FeatureCard
            key={feature.key}
            title={feature.name}
            path={feature.path}
            isStar={feature.isStar}
            imgSrc={feature.imgSrc}
            backgroundColor={feature.backgroundColor}
            overlayColor={feature.overlayColor}
          />
        ))}
      </Container>
    </MainLayout>
  );
};

export default Home;
