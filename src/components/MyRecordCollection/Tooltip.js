import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

import TooltipCircle from './TooltipCircle';

//https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition

const styles = StyleSheet.create({
  Tootlip__container: {
    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
  Tootlip__menu: {
    position: 'absolute',
    paddingTop: '5%',
    paddingLeft: '1%',
    width: '0',
    height: '100',
    transition: '.5s ease',
    color: 'white',

    [MOBILE_PORTRAIT]: {
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
});

class Tootlip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(e) {
    e.preventDefault();
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <div>
        <TooltipCircle
          onClick={this.handleMenu}
        />
        <div className={this.state.active ? css(styles.Tootlip__menu) :  null}>
          <div>
            <p>Jazz</p>
            <p>Soul</p>
            <p>Funk</p>
            <p>Rock</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tootlip;

