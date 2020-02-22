import React from 'react';
import VisibleCostumeGrid from './VisibleCostumeGrid'

class CostumeGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      costumes: [],
    };
  }

  async componentDidUpdate(prevProps, prevState) {

    // if we removed this check, the compnent would keep sending requests for ids, because
    // the component updates a lot.  Not sure why tho!

    if (prevProps.ids !== this.props.ids) {

      const ids = this.props.ids;

      if(ids[0]) {
        const firstUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[0]}`
        const secondUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[1]}`
        const thirdUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[2]}`
        const fourthUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[3]}`
        const fifthUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[4]}`
        const sixthUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[5]}`
        const seventhUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[6]}`
        const eighthUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${ids[7]}`

        const promises = [
          fetch(firstUrl) , fetch(secondUrl) , fetch(thirdUrl), fetch(fourthUrl),
          fetch(fifthUrl), fetch(sixthUrl), fetch(seventhUrl), fetch(eighthUrl),
        ];


        await Promise.all(promises)
          .then(res => Promise.all([
            res[0].json(), res[1].json(), res[2].json(), res[3].json(),
            res[4].json(), res[5].json(), res[6].json(), res[7].json(),
          ]))
          .then(res => this.setState({ costumes: res}));
      }
    }
  }


  render() {
    return (
      <div>
        <VisibleCostumeGrid
          costumes={this.state.costumes}
        />
      </div>
    );
  }
}
export default CostumeGrid;
