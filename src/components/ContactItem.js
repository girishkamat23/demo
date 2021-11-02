import React from 'react';

const ContactItem = ({ contact, deleteContact, children }) => {
    
    const {id, name, address, age, mobile} = contact;

    return (
        <div className='contact-item'>
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{age}</p>
            <p>{mobile}</p>
            <button className='btn-delete' onClick={ () => deleteContact(id) }>x</button>
        </div>
    )
}

export default ContactItem;