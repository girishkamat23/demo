import React from 'react';
import ContactItem from './ContactItem';



// contact: alias/aka

const ContactList = ({ contacts: contactList, deleteContact, addContact }) => {
    
    return (
        <div>
            {
                contactList.length ?
                contactList.map((item, index) => {
                    return <ContactItem key={`${item.id}-${index}`} contact={item} deleteContact={deleteContact} />
                    })  
                :
                <h3 className='no-data'>No contacts to display!!</h3>
            }
        </div>
    )
}

export { ContactList };