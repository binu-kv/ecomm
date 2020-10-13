import React from 'react';
import Directory from '../../component/directory/directory.component';

import'./homepage.styles.scss';


const HomePage = () => (
    <div className='homepage'>
      <h2>Welcome to Home page</h2>
      <Directory />
  </div>
);

export default HomePage;