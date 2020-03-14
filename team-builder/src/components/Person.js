import React from 'react';

function Person (props){
    const {person} = props

    return(
        <div>
            <div>{person.name}</div>
            <div>{person.email}</div>
            <div>{person.role}</div>   
        </div>
     
    )
};

export default Person;