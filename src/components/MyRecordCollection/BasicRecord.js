import React from 'react';
import Image from './Image';
import Title from './Title';
import RecordingDetails from './RecordingDetails';
import Media from './Media';

const BasicRecord__container = {
  paddingTop: '11%',
  paddingRight: '3%',
  paddingLeft: '3%',
}

const BasicRecord__title = {
  paddingTop: '11%',
  paddingBottom: '11%',
}

class BasicRecord extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    e.preventDefault();
    const image = document.getElementById("image");
    const title = document.getElementById("BasicRecord__title");

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
      <div style={BasicRecord__container}>
        <div style={BasicRecord__title} id="BasicRecord__title">
          <Title
            title={"Dizzy Gillespie Y Machito: Afro-Cuban Jazz Moods"}
          />
        </div>
        <Image
          onScroll={this.handleScroll}
        />
        <RecordingDetails
          location={"Recorded at Generation Studios, New York"}
          day={"June 4 & 5"}
          year={"1975"}
        />
        <Media
          text={"'It adds up to a paltry 32 minutes of music, yet one can forgive the short length, this being all there is of a historic recording session.' ~ Richard S. Ginell"}
          src={"https://www.youtube.com/embed/kBUjYwDC2oA"}
          height={550}
          width={650}
          title={"Dizzy Gillespie - Oro, Incienso y Mirra"}
        />
      </div>
    )
  }
}

export default BasicRecord;
