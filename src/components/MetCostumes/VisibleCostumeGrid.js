import React from 'react';
import CostumeCard from './CostumeCard';

const VisiblePhotoGrid__container = {
  paddingTop: '20px',
  textAlign: 'center',
}

const VisibleCostumeGrid = (props) => (
  <div style={VisiblePhotoGrid__container}>
    {props.costumes.map(d => (
      <div key={d.id}>
        <CostumeCard
          title={d.title}
          culture={d.culture}
          primaryImageUrl={d.primaryImageSmall}
          date={d.objectDate}
          url={d.objectURL}
          medium={d.medium}
        />
      </div>
    ))}
  </div>
);

export default VisibleCostumeGrid;
