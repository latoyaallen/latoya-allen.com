import React from 'react';

const CostumePhoto__wrapper = {
  align: 'center',
  paddingBottom: '10px',
}

const CostumePhoto__img = {
  maxHeight: '350px',
  maxWidth: '250px',
  align: 'center',
}

const CostumePhoto = (props) => (
  <div style={CostumePhoto__wrapper}>
    <img style={CostumePhoto__img} src={props.primaryImageUrl} alt="Oops! Where did the costume go?" />
  </div>
);

export default CostumePhoto;
