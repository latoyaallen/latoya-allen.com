import React from 'react';
import AfroCubanJazzImage from './AfroCubanJazzImage';
const AfroCubanJazz__container = {
  paddingTop: '11%',
  paddingRight: '3%',
  paddingLeft: '3%',
}

const AfroCubanJazz__text = {
  paddingTop: '11%',
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

class AfroCubanJazz extends React.Component {
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
    //image.style.transform = "scale(1,3)";
    console.log("it gets here");
  }
  render() {
    return (
      <div style={AfroCubanJazz__container}>
        <p style={AfroCubanJazz__text}>Afro Cuban Jazz</p>
        <AfroCubanJazzImage
          onScroll={this.handleScroll}
        />
      </div>
    )
  }
}

export default AfroCubanJazz;
