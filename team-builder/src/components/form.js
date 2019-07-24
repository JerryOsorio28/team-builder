import React, {useState} from 'react';
// import styled from ''

function Form(){

    const [teamMember, setTeamMember] = useState();

    function nameHandler(event){
        const name = {[event.target.id]: event.target.value}
        console.log('Name: ', event.target.value)

        setTeamMember(name);
    }

    function emailHandler(event){
        const email = {[event.target.id]: event.target.value}
        console.log('E-mail: ', event.target.value)

        setTeamMember(email);
    }

    function roleHandler(event){
        const role = {[event.target.id]: event.target.value}
        console.log('Role: ', event.target.value)

        setTeamMember(role);
    }
 
    return (
        <form>
            <label>Name: </label>
            <input 
                type='text'
                id='name'
                onChange={nameHandler}
            />
            <label>Email: </label>
            <input 
                type='text'
                id='email'
                onChange={emailHandler}
            />
            <label>Role: </label>
            <input 
                type='text'
                id='role'
                onChange={roleHandler}
            />
        </form>
    )
};

export default Form;