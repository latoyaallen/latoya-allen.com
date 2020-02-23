import React from 'react';
import AfroCubanJazzImage from './AfroCubanJazzImage';
import YouTubeIFrame from './YouTubeIFrame';

const AfroCubanJazz__container = {
  paddingTop: '11%',
  paddingRight: '3%',
  paddingLeft: '3%',
}

const AfroCubanJazz__title = {
  paddingTop: '11%',
  paddingBottom: '11%',
  fontSize: '11.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const AfroCubanJazz__details = {
  paddingTop: '11%',
  paddingBottom: '11%',
  fontSize: '7.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const AfroCubanJazz__additionalText = {
  paddingTop: '11%',
  paddingBottom: '11%',
  fontSize: '4.4em',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}

const AfroCubanJazz__videoContainer = {
  display: 'flex',
  paddingBottom: '11%',
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

    //
    // if we have entered the Afro Cuban Jazz section,
    // rotate the image on scroll
    // else
    // reset the image to its original location
    //

    if (titleLocation.top < - 600  && titleLocation.top > - 1150) {
      image.style.transform = "rotate("+window.pageYOffset+"deg)";
    } else {
      image.style.transform = "rotate(0deg)";
    }
  }
  render() {
    return (
      <div style={AfroCubanJazz__container}>
        <p style={AfroCubanJazz__title} id="AfroCubanJazz__title">Dizzy Gillespie Y Machito: Afro-Cuban Jazz Moods</p>
        <AfroCubanJazzImage
          onScroll={this.handleScroll}
        />
        <p style={AfroCubanJazz__details}> Recorded at Generation Studios, New York</p>
        <p style={AfroCubanJazz__details}> June 4 & 5, 1975.</p>
        <div style={AfroCubanJazz__videoContainer}>
          <p style={AfroCubanJazz__additionalText}> "It adds up to a paltry 32 minutes of music, yet one can forgive the short length, this being all there is of a historic recording session." ~ Richard S. Ginell</p>
          <YouTubeIFrame
            src={"https://www.youtube.com/embed/kBUjYwDC2oA"}
            height={550}
            width={650}
            title={"Dizzy Gillespie - Oro, Incienso y Mirra"}
          />
        </div>
      </div>
    )
  }
}

export default AfroCubanJazz;
