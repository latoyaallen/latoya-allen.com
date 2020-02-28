import React from 'react';
import AppTitle from './AppTitle';
import IntroQuote from './IntroQuote';
import VisibleRecords from './VisibleRecords';
import Tooltip from './Tooltip';
import records from '../../data/records';

class MyRecordCollection extends React.Component {
  render() {
    return (
      <div>
        <Tooltip />
        <AppTitle
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
