import React from 'react';
import DizzyG__AfroCuban
 from '../../images/DizzyG__AfroCuban.png';

const Image__style = {
  paddingTop: '11%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
}

const Image = (props) => (
  <div onScroll={props.onScroll}>
    <img src={DizzyG__AfroCuban} style={Image__style} id="image" alt="Vinyl" />
  </div>
)

export default Image;
