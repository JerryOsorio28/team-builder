import React from 'react';
import './App.css';
import Form from './components/form';

import './styles.css'

function App() {

  return (
    <div className="App">
      <h1>Add Team Members</h1>
      <Form />
      <div className='list'>
        <h3>Members List:</h3>
        <ul>
    
        </ul>  
      </div>
      
    </div>
  );
}

export default App;
