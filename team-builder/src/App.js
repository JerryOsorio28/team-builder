import React, {useState} from 'react';
import './App.css';
import Form from './components/form';
// import MemberList from './components/memberlist'


import './styles.css'


function App() {

  const [teamList, setTeamList] = useState([]);
  
  function Testing (props){
    console.log(props)
  }

  return (
    <div className="App">
      <h1>Add Team Members</h1>
      <Form />
      <div className='List'>
        <h3>Team List:</h3>
        <ul>
          <li>
            {/* <MemberList /> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
