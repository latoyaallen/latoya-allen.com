import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import MetCostumes from './MetCostumes/MetCostumes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'home'};
    this.handleHome = this.handleHome.bind(this);
  }

  handleHome() {
    window.location.assign(`/`)
    this.setState({view: 'home'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,24);
    if(pathname === 'projects') {
      this.setState({view: 'projects'});
    }
    if(pathname === 'home') {
      this.setState({view: 'home'});
    }
    if(pathname === 'metcostumes') {
      this.setState({view: 'metcostumes'});
    }
  }

  render() {
    let view;

    if(this.state.view === 'home') {
      view =
        <React.Fragment>
          <Header />
          <Home />
        </React.Fragment>
    }

    if(this.state.view === 'projects') {
      view =
        <React.Fragment>
          <Header />
          <Projects />
        </React.Fragment>
    }

    if(this.state.view === 'metcostumes') {
      view =
      <MetCostumes />
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

export default App;
