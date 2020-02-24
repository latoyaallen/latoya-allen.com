import React from 'react';

const Image__style = {
  paddingTop: '11%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%',
}

const Image = (props) => (
  <div onScroll={props.onScroll}>
    <img src={props.img} style={Image__style} id="image" alt="Vinyl" />
  </div>
)

export default Image;
