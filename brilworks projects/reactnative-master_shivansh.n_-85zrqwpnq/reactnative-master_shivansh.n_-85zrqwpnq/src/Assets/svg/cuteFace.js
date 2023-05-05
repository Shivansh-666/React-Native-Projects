import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function Cuteface(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2654.215 1737.867"
      {...props}>
      <Path
        d="M470.41 1235.7c116.95 508.58 562.97 543.94 829.5 78.871 271.97 484.1 704.4 418.83 813.18-87.03"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={97.908}
      />
      <Circle cx={432.33} cy={408.89} r={364.44} />
      <Circle cx={339.86} cy={324.58} r={206.7} fill="#fff" />
      <Circle cx={440.49} cy={683.58} r={67.992} fill="#fff" />
      <Circle cx={2221.9} cy={408.89} r={364.44} />
      <Circle cx={2129.4} cy={324.58} r={206.7} fill="#fff" />
      <Circle cx={2230} cy={683.58} r={67.992} fill="#fff" />
    </Svg>
  );
}

export default Cuteface;
