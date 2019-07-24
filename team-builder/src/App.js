import React, {useState} from 'react';
import './App.css';
import Form from './components/form';

function App() {

  const [teamMember, setTeamMember] = useState();

  return (
    <div className="App">
      <h1>Add Team Members</h1>
      <Form />
    </div>
  );
}

export default App;
