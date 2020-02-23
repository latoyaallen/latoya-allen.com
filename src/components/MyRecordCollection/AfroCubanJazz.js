import React from 'react';
import AfroCubanJazzImage from './AfroCubanJazzImage';
const AfroCubanJazz__container = {
  paddingTop: '11%',
  paddingRight: '3%',
  paddingLeft: '3%',
}

const AfroCubanJazz__text = {
  paddingTop: '11%',
  fontSize: '5.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const AfroCubanJazz__details = {
  paddingTop: '11%',
  fontSize: '3.4em',
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
    const image = document.getElementById("image");
    const title = document.getElementById("AfroCubanJazz__title");

    const titleLocation = title.getBoundingClientRect();


    // if we have entered the Afro Cuban Jazz section,
    // rotate the image on scroll
    // else
    // reset the image to its original location
    //
    if (titleLocation.top < 200 && titleLocation.top > - 200) {
      image.style.transform = "rotate("+window.pageYOffset+"deg)";
    } else {
      image.style.transform = "rotate(0deg)";
    }
  }
  render() {
    return (
      <div style={AfroCubanJazz__container}>
        <p style={AfroCubanJazz__text} id="AfroCubanJazz__title">Dizzy Gillespie Y Machito: Afro-Cuban Jazz Moods</p>
        <AfroCubanJazzImage
          onScroll={this.handleScroll}
        />
        <p style={AfroCubanJazz__details}> Recorded at Generation Studios, New York, June 4 & 5, 1975, Afro-Cuban Jazz Moods is an album by Dizzy Gillespie and Machito, featuring arrangements by Chico O'Farrill, and released on the Pablo label.</p>
        <p style={AfroCubanJazz__details}> "It adds up to a paltry 32 minutes of music, yet one can forgive the short length, this being all there is of a historic recording session." ~ Richard S. Ginell</p>
      </div>
    )
  }
}

export default AfroCubanJazz;
