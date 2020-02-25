import React from 'react'

const YouTubeIFrame__container = {
  paddingBottom: '11%',
}

const YouTubeIFrame__center ={
  textAlign: 'center',
}

const YouTubeIFrame = (props) => (
  <div style={YouTubeIFrame__container}>
    <p style={YouTubeIFrame__center}>
    <iframe
      src={props.src}
      height={props.height}
      width={props.width}
      title={props.title}
    />
  </p>
  </div>
)

export default YouTubeIFrame;
