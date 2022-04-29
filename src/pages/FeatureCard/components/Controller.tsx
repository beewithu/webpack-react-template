import { styled } from 'stitches';
import { FC, ReactElement } from 'react';
import { SketchPicker } from 'react-color';
import Checkbox from 'components/Checkbox';
import ColorPicker from 'components/ColorPicker';
import Input from 'components/Input';
import Text from 'components/Text';

const Controller = styled('div', {
  gridArea: 'controller',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$gray2',
  padding: '8px 12px 8px 12px',
  overflow: 'auto',
});

interface Props {
  title: string;
  onTitleChange: (title: string) => void;
  isStar: boolean;
  onIsStarChange: (isStar: boolean) => void;
  imgSrc: string;
  onImgSrcChange: (imgSrc: string) => void;
  backgroundColor: string;
  onBackgroundColorChange: (color: string) => void;
  overlayColor: string;
  onOverlayColorChange: (color: string) => void;
  titleColor: string;
  onTitleColorChange: (color: string) => void;
}

const FeatureCardController: FC<Props> = ({
  title,
  onTitleChange,
  isStar,
  onIsStarChange,
  imgSrc,
  onImgSrcChange,
  backgroundColor,
  onBackgroundColorChange,
  overlayColor,
  onOverlayColorChange,
  titleColor,
  onTitleColorChange,
}: Props): ReactElement => {
  return (
    <Controller>
      <Text variant="caption" type="subtitle">
        Title/Name
      </Text>
      <Input value={title} onChange={(e) => onTitleChange(e.target.value)} />
      <Text variant="caption" type="subtitle">
        Is starred
      </Text>
      <Checkbox type="checkbox" checked={isStar} onChange={(e) => onIsStarChange(e.currentTarget.checked)} />
      <Text variant="caption" type="subtitle">
        Background Image
      </Text>
      <Input value={imgSrc} onChange={(e) => onImgSrcChange(e.target.value)} />
      <Text variant="caption" type="subtitle">
        Background Color
      </Text>
      <ColorPicker color={backgroundColor} onChange={onBackgroundColorChange} />
      <Text variant="caption" type="subtitle">
        Overlay Color
      </Text>
      <ColorPicker color={overlayColor} onChange={onOverlayColorChange} />
      <Text variant="caption" type="subtitle">
        Title Color
      </Text>
      <ColorPicker color={titleColor} onChange={onTitleColorChange} />
    </Controller>
  );
};

export default FeatureCardController;
