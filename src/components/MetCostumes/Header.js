import React from 'react';
import LinkToMainSite from '../Links/LinkToMainSite';

const Header__text= {
  color: 'grey',
    fontSize: '1.4em',
}

const Header__titleText= {
  color: '#b4b4b4',
}

const Header__instructionsText= {
  color: 'grey',
  fontStyle: 'oblique',
  fontSize: '1.4em',
}

const Header__container = {
  paddingLeft: '3%',
}

const Header = (props) => (
  <div style={Header__container}>
    <h1 style={Header__titleText}>Met Costumes</h1>
    <p style={Header__text}>Costumes from The Metropolitan Museum of Art Collection API</p>
    <p style={Header__instructionsText}>Refresh the page for more costumes or {<LinkToMainSite/>}.</p>
  </div>
)

export default Header;
