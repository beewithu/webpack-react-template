import Checkbox from 'components/Checkbox';
import FeatureCardComponent from 'components/FeatureCard';
import Input from 'components/Input';
import Text from 'components/Text';
import { styled } from 'custom-stitches';
import MainLayout from 'layouts/Main';
import { FC, ReactElement, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';

const Container = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 18,
});

const Controller = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray2',
  padding: '0px 12px 8px 12px',
  maxHeight: 292,
  borderRadius: 5,
  overflow: 'auto',
});

const ColorPreview = styled('button', {
  padding: 8,
  border: 'none',
});

const FlexBox = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 4,
});

const FeatureCard: FC = (): ReactElement => {
  const [title, setTitle] = useState<string>('Feature Card');
  const [isStar, setIsStar] = useState<boolean | undefined>(false);
  const [imgSrc, setImgSrc] = useState<string | undefined>('');
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>('#fff');
  const [overlayColor, setOverlayColor] = useState<string | undefined>('#fff');
  const [titleColor, setTitleColor] = useState<string | undefined>('#000');

  const [isBackgroundColorPickerShow, setIsBackgroundColorPickerShow] = useState<boolean>(false);
  const [isOverlayColorPickerShow, setIsOverlayColorPickerShow] = useState<boolean>(false);
  const [isTitleColorPickerShow, setIsTitleColorPickerShow] = useState<boolean>(false);

  return (
    <MainLayout>
      <Container>
        <FeatureCardComponent
          title={title}
          isStar={isStar}
          imgSrc={imgSrc}
          backgroundColor={backgroundColor}
          overlayColor={overlayColor}
          titleColor={titleColor}
          path="/components/feature-card"
        />
        <Controller>
          <Text variant="caption" type="subtitle">
            Title/Name
          </Text>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <FlexBox>
            <Text variant="caption" type="subtitle">
              Is starred
            </Text>
            <Checkbox type="checkbox" checked={isStar} onChange={(e) => setIsStar(e.currentTarget.checked)} />
          </FlexBox>
          <Text variant="caption" type="subtitle">
            Background Image
          </Text>
          <Input value={imgSrc} onChange={(e) => setImgSrc(e.target.value)} />
          <Text variant="caption" type="subtitle">
            Background Color
          </Text>
          <ColorPreview
            css={{
              backgroundColor,
            }}
            onClick={() => {
              setIsBackgroundColorPickerShow(!isBackgroundColorPickerShow);
            }}
          />
          {isBackgroundColorPickerShow && (
            <SketchPicker color={backgroundColor} onChange={({ hex }) => setBackgroundColor(hex)} />
          )}
          <Text variant="caption" type="subtitle">
            Overlay Color
          </Text>
          <ColorPreview
            css={{
              backgroundColor: overlayColor,
            }}
            onClick={() => {
              setIsOverlayColorPickerShow(!isOverlayColorPickerShow);
            }}
          />
          {isOverlayColorPickerShow && (
            <SketchPicker color={overlayColor} onChange={({ hex }) => setOverlayColor(hex)} />
          )}
          <Text variant="caption" type="subtitle">
            Title Color
          </Text>
          <ColorPreview
            css={{
              backgroundColor: titleColor,
            }}
            onClick={() => {
              setIsTitleColorPickerShow(!isTitleColorPickerShow);
            }}
          />
          {isTitleColorPickerShow && <SketchPicker color={titleColor} onChange={({ hex }) => setTitleColor(hex)} />}
        </Controller>
      </Container>
    </MainLayout>
  );
};

export default FeatureCard;
