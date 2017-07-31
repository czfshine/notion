import React from 'react';
import Ico from '../components/ico';

import togglenotebook from '../actions/sidebar';
let Notebooks = ({ dispatch }) => {
  return (
    <ul className="nav nav-sidebar">
      <li>
        <a
          className="mdl-navigation__link"
          onClick={e => {
            e.preventDefault();
            dispatch(togglenotebook(1));
            console.log(e);
          }}
        >
          团队页面
        </a>
      </li>
      <li>
        <a className="mdl-navigation__link" href="#">
          <Ico name="chevron-right" />
          <Ico name="book" />
          页面1
        </a>
      </li>
      <li>
        <a className="mdl-navigation__link" href="#">
          <Ico name="chevron-right" />
          <Ico name="book" />
          页面2
        </a>
      </li>
    </ul>
  );
};

export default Notebooks;
