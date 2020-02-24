import React from 'react';
import YouTubeIFrame from './YouTubeIFrame';

const Media__container = {
  display: 'flex',
  paddingBottom: '11%',
}

const Media__text = {
  paddingBottom: '11%',
  fontSize: '4.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const Media = (props) => (
  <div style={Media__container}>
    <p style={Media__text}>{props.text}</p>
    <YouTubeIFrame
      src={props.src}
      height={props.height}
      width={props.width}
      title={props.title}
    />
  </div>
)

export default Media;
