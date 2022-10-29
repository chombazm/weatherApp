import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

export const CloudDrizzle = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M12 21v2M16 19v2M8 19v2M12 15v2M16 13v2M8 13v2M20 16.58A5 5 0 0 0 18 7h-1.26A7.998 7.998 0 0 0 2.063 5.005 8 8 0 0 0 4 15.25" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CloudLightning = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9" />
      <Path d="m13 11-4 6h6l-4 6" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const CloudSnow = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M12 22h.01M16 20h.01M8 20h.01M12 18h.01M20 17.58A5 5 0 0 0 18 8h-1.26A7.998 7.998 0 0 0 2.063 6.005 8 8 0 0 0 4 16.25M16 16h.01M8 16h.01" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Cloud = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M12 22h.01M16 20h.01M8 20h.01M12 18h.01M20 17.58A5 5 0 0 0 18 8h-1.26A7.998 7.998 0 0 0 2.063 6.005 8 8 0 0 0 4 16.25M16 16h.01M8 16h.01" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const Thermometer = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const Sun = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const MapPin = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      clipPath="url(#a)"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M12 21v2M18.36 18.36l1.42 1.42M4.22 19.78l1.42-1.42M21 12h2M1 12h2M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM18.36 5.64l1.42-1.42M4.22 4.22l1.42 1.42M12 1v2" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
