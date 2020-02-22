import React from 'react';
import CostumeText from './CostumeText';
import CostumePhoto from './CostumePhoto';

const costumeCard__border = {
  paddingTop: '5%',
  paddingBottom: '5%',
  borderTop: '1px solid grey',
  width: '70%',
}


const CostumeCard = (props) => (
  <div style={costumeCard__border}>
    <CostumePhoto
      primaryImageUrl={props.primaryImageUrl}
    />
    <CostumeText
      culture={props.culture}
      date={props.date}
      medium={props.medium}
      title={props.title}
      url={props.url}
    />
  </div>
);

export default CostumeCard;
