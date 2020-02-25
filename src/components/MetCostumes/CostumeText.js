import React from 'react';

const CostumeText__linkStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'white',
  fontStyle: 'oblique',
  fontWeight: 'bold',
}

const CostumeText__linkText = {
  color: 'grey',
  align: 'center',
  fontSize: '1.8em',

}

const CostumeText = (props) => (
  <div>
    <div style={CostumeText__linkText}>
      <a
        style={CostumeText__linkStyle}
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
