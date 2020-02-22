import React from 'react';
import CostumeCard from './CostumeCard';

const visiblePhotoGrid__container = {
  paddingTop: '100px',
  paddingLeft: '23%',
  textAlign: 'center',
}

const show = (x) => {
  console.log("costumes");
  console.log(x);
}
// I think we need to do an async update check here too
const VisibleCostumeGrid = (props) => (
  <div style={visiblePhotoGrid__container}>
    {show(props)}
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
