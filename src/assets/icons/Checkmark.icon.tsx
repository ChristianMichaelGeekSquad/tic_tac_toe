import { ShareIconStyleProps } from 'assets/types';
import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const style: ShareIconStyleProps = {
  enableBackground: 'new 0 0 100 100',
};

const CheckmarkIcon = (props: SvgProps) => {
  return (
    <Svg id="Layer_1" style={style} viewBox="0 0 100 100" {...props}>
      <Path d="m92.2747269 10.9761333c-17.4706726 5.7346497-39.7424393 21.071497-60.2804756 47.3441849l-12.1361065-13.469759c-1.8671017-2.1338234-5.3345575-2.1338234-7.2016525 0l-8.9353827 10.0022927c-1.7337308 2.0004578-1.600369 4.9344673.2667286 6.6681938l27.4729557 26.4060478c2.2671909 2.1338348 6.0013752 1.6003647 7.6017437-1.2002716 14.6700254-26.5394135 30.4069677-46.2772713 57.079743-68.949131 3.200737-2.8006401.2667236-8.1351948-3.8675537-6.8015576z" />
    </Svg>
  );
};

export default CheckmarkIcon;
