import React from 'react';
import Title from './Title';
import IntroQuote from './IntroQuote';
import VisibleRecords from './VisibleRecords';
import Tooltip from './Tooltip';
import records from '../../data/records';

class MyRecordCollection extends React.Component {
  render() {
    return (
      <div>
        <Tooltip />
        <Title
          title={"My Record Collection"}
        />
        <IntroQuote />
        <VisibleRecords
          records={records}
        />
      </div>
    )
  }
}

export default MyRecordCollection;
