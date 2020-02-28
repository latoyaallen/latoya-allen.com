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
    paddingTop: '6%',
    paddingLeft: '2%',
    width: '0',
    height: '100',
    transition: '.4s ease',
    color: 'white',
    // we need to keep these here, or they add extra space on the page
    fontWeight: 'bold',
    fontSize: '2.4em',

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
        <div className={this.state.active ? css(styles.Tootlip__menu) :  null}>
          <Categories
            handleCategory={this.handleCategory}
          />
        </div>
      </div>
    );
  }
}

export default Tootlip;

