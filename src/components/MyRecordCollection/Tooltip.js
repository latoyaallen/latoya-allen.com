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
import Categories from './Categories';

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
    backgroundColor: 'black',
    marginTop: '5%',
    paddingLeft: '5%',
    width: '100%',
    height: '100%',
    transition: '.4s ease',
    color: 'white',
    // we need to keep these here, or they add extra space on the page
    fontSize: '2.0em',

    [MOBILE_PORTRAIT]: {
    width: '100%',
    height: '100%',
    },
    [MOBILE_LANDSCAPE]: {
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    width: '0',
    }
  },
  Tootlip__none: {
    display: 'none',
  },
  Tooltip__text: {
    cursor: 'pointer',
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
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleMenu(e) {
    e.preventDefault();
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  handleCategory(e) {
    e.preventDefault();
    alert("Coming Soon :) ");
  }

  render() {
    return (
      <div>
        <TooltipCircle
          onClick={this.handleMenu}
        />
        <div className={this.state.active ? css(styles.Tootlip__menu) : css(styles.Tootlip__none)}>
          <Categories
            handleCategory={this.handleCategory}
          />
        </div>
      </div>
    );
  }
}

export default Tootlip;

