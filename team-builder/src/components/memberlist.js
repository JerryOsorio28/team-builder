import React from 'react';

function MemberList (prop){
    console.log(prop)
    return(
     <div>
         {prop.prop.map(event => {
             return (
                 <div className ='memberCard'>
                     <h2>
                      Name: {event.name}   
                     </h2>
                     <p>
                      E-mail: {event.email}   
                     </p>
                     <p>
                      Role: {event.role}  
                     </p>
                     <button id='editButton' type='submit' onClick = {() => {
                         prop.setNewValue(event);
                         prop.setEditMember(true)
                     }}>Edit</button>
                 </div>
             )
         })}

     </div>
    )
};

export default MemberList;