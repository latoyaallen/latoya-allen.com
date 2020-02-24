import React from 'react';
import BasicRecord from './BasicRecord';

const VisibleRecords = (props) => (
  <div>
    {props.records.map(d => (
      <div key={d.id}>
        <BasicRecord
          title={d.title}
          location={d.location}
          day={d.day}
          year={d.year}
          src={d.src}
          img={d.img}
        />
      </div>
    ))}
  </div>
)

export default VisibleRecords;
