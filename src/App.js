import React from 'react';
import { Movies } from './Movies';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
          <Movies />
        </div>
      </div>
    </div>
  );
}

export default App;
