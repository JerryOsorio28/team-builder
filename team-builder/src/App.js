import React, {useState} from 'react';
import './App.css';
import Form from './components/form';
import MemberList from './components/memberlist'


import './styles.css'


function App() {

  const [memberlist, setMemberList] = useState([])
  const [editMember, setEditMember] = useState(false)
  const [newValue, setNewValue] = useState({})
  
  

  function EditMember (value){
    const newMemberList = memberlist.map(event => {
      if (event === newValue){
        return value;
      }else{
        return event;
      }

    })
    setMemberList(newMemberList)
  }

  return (
    <div className="App">
      <h1>Add Team Members</h1>
      <Form 
        memberlist={memberlist} 
        setMemberList={setMemberList}
        editMember={editMember}
        setEditMember={setEditMember}
        newValue={newValue}
        setNewValue={setNewValue}
        EditMember={EditMember}
      />
      <div className='List'>
      <h3>Members List:</h3>
      <MemberList 
      prop={memberlist}
      setEditMember={setEditMember}
      setNewValue={setNewValue}/>
      </div>
    </div>
  );
}

export default App;
