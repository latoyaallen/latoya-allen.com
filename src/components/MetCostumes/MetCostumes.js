import React from 'react';
import Header from './Header';
import './MetCostumes.css';
//import CostumeGrid from 'CostumeGrid';

const MetCostumes__center = {
  textAlign: 'center',
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
      console.log("foundIds = ");
      console.log(foundIds);
    } catch (error) {
      console.log("Oops! I caught an error.");
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>
          It Gets Here
        </div>
      </div>
    );
  }
}
export default MetCostumes;
