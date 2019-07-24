import React, {useState} from 'react';

function Form(){

    const [teamMember, setTeamMember] = useState();

    function nameHandler(event){
        const name = {...teamMember, [event.target.id]: event.target.value}
        console.log('Name: ', event.target.value)

        setTeamMember(name);
    }

    function emailHandler(event){
        const email = {...teamMember, [event.target.id]: event.target.value}
        console.log('E-mail: ', event.target.value)

        setTeamMember(email);
    }

    function roleHandler(event){
        const role = {...teamMember, [event.target.id]: event.target.value}
        console.log('Role: ', event.target.value)

        setTeamMember(role);
    }

    function addTeamMember (event){
        event.preventDefault(teamMember);
        console.log('Member Added: ', teamMember)
    }
 
    return (
        <form className='form' onSubmit = {event => addTeamMember(event)}>
            <div className='input'>
                <label>Name: </label>
                <input 
                    type='text'
                    id='name'
                    onChange={nameHandler}
                />    
            </div>
            <div className='input'>
                <label>Email: </label>
                <input 
                    type='text'
                    id='email'
                    onChange={emailHandler}
                />   
            </div>
            <div className='input'>
                <label>Role: </label>
                <input 
                    type='text'
                    id='role'
                    onChange={roleHandler}
                />    
            </div>
            <button>Add Team Member</button>
        </form>
    )
};

export default Form;