import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';

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
    const pathname = window.location.pathname.substring(1,9);
    if(pathname === 'projects') {
      this.setState({view: 'projects'});
    } else {
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
