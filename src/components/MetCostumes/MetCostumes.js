import React from 'react';
import Header from './Header';
//import CostumeGrid from 'CostumeGrid';

const MetCostumes__container = {
  // backgroundColor: 'black',
  // height: '100vh',
}

class MetCostumes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
    };
  }

  async componentDidMount() {
    const defaultUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=costume"
    try {
      const response = await fetch(defaultUrl);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      const foundIds = json.objectIDs.sort(() => Math.random() - Math.random()).slice(0, 8); // grab 8 ids
      this.setState({ ids: foundIds});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div style={MetCostumes__container}>
        <Header />
        <div>
          It Gets Here
        </div>
      </div>
    );
  }
}
export default MetCostumes;
