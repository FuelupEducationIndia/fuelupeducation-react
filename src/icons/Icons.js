import React from 'react';

import ShowMore from './svg-to-js/showMore';
import Search from './svg-to-js/search';

import Favorite from './svg-to-js/favorite';
import Basket from './svg-to-js/basket';
import User from './svg-to-js/user';
import ScrollDown from './svg-to-js/scrollDown';
import CloseWindow from './svg-to-js/closeWindow';
import Next from './svg-to-js/next';
import Prev from './svg-to-js/prev';
import Home from './svg-to-js/home';
import Default from './svg-to-js/default';
import Watsapp from './svg-to-js/watsapp';
import Fb from './svg-to-js/fb';
import Mess from './svg-to-js/mess';
import Ig from './svg-to-js/ig';
import Filter from './svg-to-js/filter';

const Icon = (props) => {
  switch (props.name) {
    case 'show-more':
      return <ShowMore {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'favorite':
      return <Favorite {...props} />;
    case 'basket':
      return <Basket {...props} />;
    case 'user':
      return <User {...props} />;
    case 'scroll-down':
      return <ScrollDown {...props} />;
    case 'close-window':
      return <CloseWindow {...props} />;
    case 'next':
      return <Next {...props} />;
    case 'prev':
      return <Prev {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'watsapp':
      return <Watsapp {...props} />;
    case 'fb':
      return <Fb {...props} />;
    case 'ig':
      return <Ig {...props} />;
    case 'mess':
      return <Mess {...props} />;
    case 'filter':
      return <Filter {...props} />;
    default:
      return <Default {...props} />;
  }
};
export default Icon;
