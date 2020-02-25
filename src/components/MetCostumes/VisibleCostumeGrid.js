import React from 'react';
import CostumeCard from './CostumeCard';

const visiblePhotoGrid__container = {
  paddingTop: '20px',
  textAlign: 'center',
}

const VisibleCostumeGrid = (props) => (
  <div style={visiblePhotoGrid__container}>
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
