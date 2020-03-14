import React, {useState , useEffect} from 'react';

function Form(props){

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    useEffect(() =>{
        setTeamMember(props.newValue)},
        [props.newValue])

    function changeHandler(event){
        const name = {...teamMember, [event.target.name]: event.target.value}
        console.log('Input: ', event.target.value)

        setTeamMember(name);
    }

    function addTeamMember (event){
        event.preventDefault(teamMember);
        if (props.editMember == true){
            props.EditMember({...teamMember, [event.target.name]: event.target.value})
            props.setEditMember(false)
        }else{
            props.setMemberList([...props.memberlist, teamMember])
        }
    }
 
    return (
        <form id='form' onSubmit = {addTeamMember}>
            <div className='input'>
                <input 
                    type='text'
                    name='name'
                    onChange={changeHandler}
                />    
            </div>
            <div className='input'>
                <input 
                    type='text'
                    name='email'
                    onChange={changeHandler}
                />   
            </div>
            <div className='input'>
                <input 
                    type='text'
                    name='role'
                    onChange={changeHandler}
                />    
            </div>
            <button>Add Team Member</button>
        </form>
    )
};

export default Form;