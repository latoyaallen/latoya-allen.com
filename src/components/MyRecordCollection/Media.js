import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import YouTubeIFrame from './YouTubeIFrame';

const styles = StyleSheet.create({
  Media__container: {
    paddingBottom: '11%',
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
      paddingBottom: '11%',
    },
    [TABLET_LANDSCAPE]: {
      paddingBottom: '11%',
    },
    [LAPTOPS]: {
      paddingBottom: '11%',
    }
  },
});

const Media = (props) => (
  <div className={css(styles.Media__container)}>
    <YouTubeIFrame
      src={props.src}
      height={props.height}
      width={props.width}
      title={props.title}
    />
  </div>
)

export default Media;
