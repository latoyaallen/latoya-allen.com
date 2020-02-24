import React from 'react';

const RecordingDetails__container = {
  paddingTop: '11%',
  paddingBottom: '11%',
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const RecordingDetails = (props) => (
  <div style={RecordingDetails__container}>
    <p>{props.location}</p>
    <p>{props.day}</p>
    <p>{props.year}</p>
  </div>
)

export default RecordingDetails;
