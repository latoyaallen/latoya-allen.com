import React from 'react';

const Title__container = {
  paddingTop: '11%',
  paddingRight: '3%',
  paddingLeft: '3%',
}

const Title__text = {
  fontSize: '11.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const Title = () => (
  <div style={Title__container}>
    <p style={Title__text}>My Record Collection</p>
  </div>
)

export default Title;
