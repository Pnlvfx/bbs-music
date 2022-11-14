import React from 'react';
import Svg, {Circle, Defs, G, LinearGradient, Path, Rect, Stop, SvgProps} from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => {
  return (
    <Svg
      height={24}
      width={24}
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"
        fillOpacity={1}
      />
    </Svg>
  );
};

export const SearchIcon = (props: SvgProps) => {
  return (
    <Svg
      height={24}
      width={24}
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
        fillOpacity={1}
      />
    </Svg>
  );
};

export const LibraryIcon = (props: SvgProps) => {
  return (
    <Svg
      height={24}
      width={24}
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V6.464a1 1 0 00-.5-.866l-6-3.464zM9 2a1 1 0 00-1 1v18a1 1 0 102 0V3a1 1 0 00-1-1z"
        fillOpacity={1}
      />
    </Svg>
  )
}

export const PlayIcon = (props: SvgProps) => {
  return (
    <Svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
    </Svg>
  )
}

export const PauseIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      width={24}
      height={24}
      {...props}
    >
      <Rect
        x={11}
        y={2}
        width={6}
        height={16}
        rx={1}
        ry={1}
        fill={props.fill ? props.fill : "#FFF"}
        fillOpacity={0.95}
      />
      <Rect
        x={3}
        y={2}
        width={6}
        height={16}
        rx={1}
        ry={1}
        fill={props.fill ? props.fill : "#FFF"}
        fillOpacity={0.95}
      />
    </Svg>
  )
}

export const BluGradient = (props: SvgProps) => {
  return (
    <Svg
      width="600px"
      height="200px"
      {...props}
    >
      <Defs>
        <LinearGradient id="a" x1="50%" y1="100%" x2="50%" y2="0%">
          <Stop offset="1%" stopColor="#1d1d1e" stopOpacity={1} />
          <Stop offset="100%" stopColor="#073abb" stopOpacity={1} />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#a)" />
    </Svg>
  )
}

export const DropdownIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 12 12"
      width={props.width ? props.width : 24}
      height={props.width ? props.width : 24}
      {...props}
    >
      <Path
        fill={props.fill ? props.fill : "#818384"}
        d="M11.0584 4.0602L6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3z"
      />
    </Svg>
  )
}

export const TrashIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      width={24}
      height={24}
      {...props}
    >
      <Path
        d="M16.5 2h-3.79l-.85-.85A.5.5 0 0011.5 1h-3a.5.5 0 00-.35.15L7.29 2H3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM16.5 5h-13a.5.5 0 00-.5.5v12A1.5 1.5 0 004.5 19h11a1.5 1.5 0 001.5-1.5v-12a.5.5 0 00-.5-.5zM6.75 15.5a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0zm4 0a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0zm4 0a.75.75 0 01-1.5 0v-7a.75.75 0 011.5 0z"
        fill="#818384"
      />
    </Svg>
  )
}

export const CloseIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      width={24}
      height={24}
      {...props}
    >
      <Path
        fill="#818384"
        d="M11.649 9.882l6.613-6.615L16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267l6.614 6.616L1.5 16.497l1.767 1.767 6.614-6.614 6.614 6.614 1.767-1.767z"
      />
    </Svg>
  )
}

export const MoreIcon = (props: SvgProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={20}
      height={20}
      {...props}
    >
      <G fill={props.fill ? props.fill : "#818384"}>
        <Circle cx={5} cy={12} r={2} />
        <Circle cx={12} cy={12} r={2} />
        <Circle cx={19} cy={12} r={2} />
      </G>
    </Svg>
  )
}

export const NextIcon = (props: SvgProps) => {
  return (
    <Svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <Path
        d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"
        fillOpacity={1}
        fill={props.fill ? props.fill : "#FFF"}
      />
    </Svg>
  )
}

export const PrevIcon = (props: SvgProps) => {
  return (
    <Svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <Path
        d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"
        fillOpacity={1}
        fill={props.fill ? props.fill : "#FFF"}
      />
    </Svg>
  )
}

export const HeartIcon = (props: SvgProps) => {
  return (
    <Svg
      height={12}
      width={12}
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="Svg-ytk21e-0 jAKAlG"
      {...props}
    >
      <Path
        d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
        fill={props.fill ? props.fill : "#FFF"}
      />
    </Svg>
  )
}

export const HeartIconOutline = (props: SvgProps) => {
  return (
    <Svg
      height={16}
      width={16}
      viewBox="0 0 16 16"
      className="Svg-ytk21e-0 jAKAlG"
      {...props}
    >
      <Path
        d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"
        fillOpacity={1}
        fill="#FFF"
      />
    </Svg>
  )
}

export const SearchIconOpen = (props: SvgProps) => {
  return (
    <Svg
      height={24}
      width={24}
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
        fill="#B3B3B3"
      />
      <Path
        d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 01-2.077 5.816l4.344 4.344a1 1 0 01-1.414 1.414l-4.353-4.353a9.454 9.454 0 01-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
        fill="#B3B3B3"
      />
    </Svg>
  )
}