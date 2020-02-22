import React from 'react';

const costumePhoto__wrapper = {
  align: 'center',
  paddingBottom: '10px',
}

const costumePhoto = {
  maxHeight: '350px',
  maxWidth: '250px',
  align: 'center',
}

const CostumePhoto = (props) => (
  <div style={costumePhoto__wrapper}>
    <img style={costumePhoto} src={props.primaryImageUrl} alt="Oops! Where did the costume go?" />
  </div>
);

export default CostumePhoto;
