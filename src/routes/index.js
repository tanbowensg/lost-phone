/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import error from './error';
// lock作为文件夹名字一定不能驼峰命名，不然会导致不明的bug
import lock from './lock';
import start from './start';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    lock,
    start,

    // place new routes before...
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  },

};
