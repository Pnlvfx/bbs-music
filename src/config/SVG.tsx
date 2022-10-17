import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Rect, Stop} from 'react-native-svg';

export const HomeIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"
        fillOpacity={1}
      />
    </Svg>
  );
};

export const SearchIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      aria-hidden="true"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
        fillOpacity={1}
      />
    </Svg>
  );
};

export const LibraryIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
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

export const PlayIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      width={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
    </Svg>
  )
}

export const PauseIcon = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
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
        fill={props.style.fill ? props.fill : "#FFF"}
        fillOpacity={0.95}
      />
      <Rect
        x={3}
        y={2}
        width={6}
        height={16}
        rx={1}
        ry={1}
        fill={props.style.fill ? props.fill : "#FFF"}
        fillOpacity={0.95}
      />
    </Svg>
  )
}

export const BluGradient = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
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

export const DropdownIcon = (props: any) => {
  return (
    <Svg
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      {...props}
    >
      <Path
        fill="#818384"
        d="M11.0584 4.0602L6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3z"
      />
    </Svg>
  )
}

export const TrashIcon = (props: any) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
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