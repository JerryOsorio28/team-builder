import React, {useState} from 'react';
import './App.css';
import Form from './components/form';


import './styles.css'


function App() {

  const [teamList, setTeamList] = useState();
  // console.log(teamList)

  return (
    <div className="App">
      <h1>Add Team Members</h1>
      <Form teamlist={teamList} setTeamList={setTeamList}/>
      <div className='List'>
        <h3>Team List:</h3>
        <ul>
          <li>
            {/* <List list ={list}/> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
