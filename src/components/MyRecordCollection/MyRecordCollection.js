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
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    e.preventDefault();
    var image = document.getElementById("image");
    image.style.transform = "rotate("+window.pageYOffset+"deg)";
    console.log("it gets here");
  }
  render() {
    return (
      <div>
        <Title />
        <IntroQuote />
        <AfroCubanJazz
          onScroll={this.handleScroll}
        />
        <p style={IntroQuote__comingSoon}> coming soon-ish</p>
      </div>
    )
  }
}

export default MyRecordCollection;
