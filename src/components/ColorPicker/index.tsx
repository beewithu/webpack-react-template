import { styled } from 'custom-stitches';
import { FC, ReactElement } from 'react';
import { SketchPicker } from 'react-color';
import { Root, Trigger, Content } from '@radix-ui/react-popover';

const StyledPopoverTrigger = styled(Trigger, {
  padding: 16,
  borderRadius: 8,
  boxShadow: '0px 4px 35px 5px rgba(0, 0, 0, 0.05)',
  border: 'none',
});

interface Props {
  color?: string;
  onChange: (hex: string) => void;
}

const ColorPicker: FC<Props> = ({ color, onChange }: Props): ReactElement => {
  return (
    <>
      <Root>
        <StyledPopoverTrigger
          css={{
            backgroundColor: color,
          }}
        ></StyledPopoverTrigger>
        <Content side="bottom" sideOffset={5}>
          <SketchPicker color={color} onChange={({ hex }) => onChange(hex)} />
        </Content>
      </Root>
    </>
  );
};

export default ColorPicker;
