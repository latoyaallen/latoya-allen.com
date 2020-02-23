import React from 'react';

const IntroQuote__container = {
  paddingTop: '20%',
  paddingRight: '11%',
  paddingLeft: '11%',
}

const IntroQuote__text = {
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const IntroQuote__attribution= {
  paddingTop: '11%',
  fontSize: '3.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const IntroQuote__comingSoon = {
  paddingTop: '20%',
  fontSize: '3.4em',
  color: 'pink',
  textAlign: 'center',
  margin: 0,
}

const IntroQuote = () => (
  <div style={IntroQuote__container}>
    <p style={IntroQuote__text}>The two things you can't fake are good food and good music.</p>
    <p style={IntroQuote__attribution}>Etta James</p>
    <p style={IntroQuote__comingSoon}> coming soon-ish</p>
  </div>
)

export default IntroQuote;
