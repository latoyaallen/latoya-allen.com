import React from 'react';

const costumeText__linkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'white',
  fontStyle: 'oblique',
  fontWeight: 'bold',
}

const costumeText__linkText = {
  color: 'grey',
  align: 'center',
}

const CostumeText = (props) => (
  <div>
    <div style={costumeText__linkText}>
      <a
        style={costumeText__linkStyle}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer">
        {props.title}
      </a>
      <p>{props.culture}</p>
      <p>{props.date}</p>
      <p>Made of {props.medium}</p>
    </div>
  </div>
);

export default CostumeText;
