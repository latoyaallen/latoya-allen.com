import React from 'react'

const videoContainer = {
  paddingTop: '13%',
  paddingLeft: '3%',
}


const YouTubeIFrame = (props) => (
  <div style={videoContainer}>
    <iframe
      src={props.src}
      height={props.height}
      width={props.width}
      title={props.title}
    />
  </div>
)

export default YouTubeIFrame;
