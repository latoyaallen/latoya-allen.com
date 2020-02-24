import React from 'react'

const videoContainer = {
  paddingBottom: '11%',
}

const YouTubeIFrame__center ={
  textAlign: 'center',
}

const YouTubeIFrame = (props) => (
  <div style={videoContainer}>
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
