import React, { Component } from 'react';

import Header from './header';

 class Home extends Component {
  render() {
    return (
      <div className='home'>
        { Header('Potential Stock Return Calculator','This calculator shows, based on historical values and assuming normal market behavior, what investing in stocks could do over the long run', '*This is a demonstration of potential. This is not to be taken as investing advice. Investing in stocks is risky and returns are not guaranteed.') }
      </div>
    );
  }
}

export default Home;