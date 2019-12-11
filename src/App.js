import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'home'};
    this.handleProjects = this.handleProjects.bind(this);
    this.handleHome = this.handleHome.bind(this);
  }

  handleProjects(id) {
    window.location.assign(`/projects/fashion-water`)
    this.setState({view: 'projects'});
  }

  handleHome() {
    window.location.assign(`/`)
    this.setState({view: 'home'});
  }

  componentDidMount() {
    const pathname = window.location.pathname.substring(1,6);
    console.log(pathname);
    if(pathname === 'proje') {
      this.setState({view: 'projects'});
    } else {
      this.setState({view: 'home'});
    }
  }


  render() {
    let view;
    console.log(this.state.view);

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
      {view}
    </div>
  );
}
}

export default App;
