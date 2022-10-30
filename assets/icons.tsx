import * as React from 'react';
import Svg, { SvgProps, Path, G, Defs, ClipPath } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
} & SvgProps;

export const LoactionPin = (props: Props) => (
  <Svg width={21} height={25} fill="none" {...props}>
    <Path
      d="m10.125 24.444-7.16-7.16a10.125 10.125 0 1 1 14.32 0l-7.16 7.16Zm5.569-8.75a7.875 7.875 0 1 0-11.138 0l5.569 5.568 5.569-5.568Zm-5.569-3.32a2.25 2.25 0 1 1 0-4.499 2.25 2.25 0 0 1 0 4.5Z"
      fill="#fff"
    />
  </Svg>
);
export const Notification = (props: Props) => (
  <Svg width={29} height={27} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M5.577 20.25h15.616v-7.84c0-4.369-3.496-7.91-7.808-7.91-4.312 0-7.808 3.541-7.808 7.91v7.84Zm7.808-18c5.544 0 10.039 4.548 10.039 10.16V22.5H3.346V12.41c0-5.612 4.495-10.16 10.039-10.16Zm-2.789 21.375h5.578c0 .746-.294 1.461-.817 1.989a2.777 2.777 0 0 1-1.972.823c-.74 0-1.449-.296-1.972-.823a2.825 2.825 0 0 1-.817-1.99Z"
        fill="#fff"
      />
    </G>
    <Path
      d="M28.3 7.874c0 2.727-2.189 4.926-4.877 4.926-2.689 0-4.878-2.2-4.878-4.926s2.19-4.925 4.878-4.925 4.878 2.2 4.878 4.925Z"
      fill="#FF7C7C"
      stroke="#fff"
      strokeWidth={1.398}
    />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26.77v27H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
