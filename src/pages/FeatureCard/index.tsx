import { blue } from '@radix-ui/colors';
import BackButton from 'components/BackButton';
import FeatureCardComponent from 'components/FeatureCard';
import { styled } from 'custom-stitches';
import ComponentDemoLayout from 'layouts/ComponentDemo';
import { FC, ReactElement, useState } from 'react';
import FeatureCardController from './components/Controller';

const Container = styled('div', {
  gridArea: 'component-demo',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
});

const FeatureCard: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('Feature Card');
  const [isStar, setIsStar] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('#fff');
  const [overlayColor, setOverlayColor] = useState<string>(blue.blue4);
  const [titleColor, setTitleColor] = useState<string>('#000');

  return (
    <ComponentDemoLayout>
      <BackButton label="Home" path="/" />
      <Container>
        <FeatureCardComponent
          title={title}
          isStar={isStar}
          imgSrc={imgSrc}
          backgroundColor={backgroundColor}
          overlayColor={overlayColor}
          titleColor={titleColor}
        />
      </Container>
      <FeatureCardController
        title={title}
        onTitleChange={setTitle}
        isStar={isStar}
        onIsStarChange={setIsStar}
        imgSrc={imgSrc}
        onImgSrcChange={setImgSrc}
        backgroundColor={backgroundColor}
        onBackgroundColorChange={setBackgroundColor}
        overlayColor={overlayColor}
        onOverlayColorChange={setOverlayColor}
        titleColor={titleColor}
        onTitleColorChange={setTitleColor}
      />
    </ComponentDemoLayout>
  );
};

export default FeatureCard;
