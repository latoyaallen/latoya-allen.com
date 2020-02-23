import React from 'react';
import './AfroCubanJazz.css';
import AfroCubanJazzImage from './AfroCubanJazzImage';
const AfroCubanJazz__container = {
  paddingTop: '11%',
  paddingRight: '3%',
  paddingLeft: '3%',
}

const AfroCubanJazz__text = {
  paddingTop: '11%',
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const AfroCubanJazz = (props) => (
  <div style={AfroCubanJazz__container} onScroll={props.onScroll}>
    <p style={AfroCubanJazz__text}>Afro Cuban Jazz</p>
    <AfroCubanJazzImage />
  </div>
)

export default AfroCubanJazz;
