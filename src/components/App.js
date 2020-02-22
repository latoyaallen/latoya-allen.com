import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header/Header';
import Projects from './Projects';

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
  }

  render() {
    let view;

    if(this.state.view === 'home') {
      view =
      <Home />
    }

    if(this.state.view === 'projects') {
      view =
      <Projects />
    }

    return (
      <div>
        <Header />
        {view}
      </div>
    );
  }
}

export default App;
