import React from 'react';
import Title from './Title';
import IntroQuote from './IntroQuote';
import AfroCubanJazz from './AfroCubanJazz';

const IntroQuote__comingSoon = {
  paddingTop: '20%',
  fontSize: '3.4em',
  color: 'pink',
  textAlign: 'center',
  margin: 0,
}

class MyRecordCollection extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <IntroQuote />
        <AfroCubanJazz />
        <p style={IntroQuote__comingSoon}> Under Construction</p>
      </div>
    )
  }
}

export default MyRecordCollection;
