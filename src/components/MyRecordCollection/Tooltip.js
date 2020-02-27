import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import {
  MOBILE_PORTRAIT,
  MOBILE_LANDSCAPE,
  TABLET_PORTRAIT,
  TABLET_LANDSCAPE,
  LAPTOPS,
} from '../../lib/breakpoints';

//https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition

const styles = StyleSheet.create({
  Tootlip__container: {
    cursor: 'pointer',
    position: 'absolute',
    right: 40,
    [MOBILE_PORTRAIT]: {
      right: 20,
    },
    [MOBILE_LANDSCAPE]: {
      cursor: 'pointer',
      position: 'absolute',
      left: 10,
    },
    [TABLET_PORTRAIT]: {
    },
    [TABLET_LANDSCAPE]: {
    },
    [LAPTOPS]: {
    }
  },
  Tootlip__circle: {
    height: '25px',
    width: '25px',
    backgroundColor: '#40c7c7',
    borderRadius: '50%',

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
  handleOpenToggle(e) {
    e.preventDefault();
    console.log("Hovering!");
  }

  handleCloseToggle(e) {
    e.preventDefault();
    console.log("Byee!");
  }

  render() {
    return (
      <div className={css(styles.Tootlip__container)}>
        <p className={css(styles.Tootlip__circle)} onMouseEnter={this.handleOpenToggle} onMouseLeave={this.handleCloseToggle}></p>
      </div>
    );
  }
}

export default Tootlip;

