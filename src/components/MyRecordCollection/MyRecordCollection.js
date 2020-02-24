import React from 'react';
import Title from './Title';
import IntroQuote from './IntroQuote';
import BasicRecord from './BasicRecord';

class MyRecordCollection extends React.Component {
  render() {
    return (
      <div>
        <Title
          title={"My Record Collection"}
        />
        <IntroQuote />
        <BasicRecord />
      </div>
    )
  }
}

export default MyRecordCollection;
