import React from 'react';
import { ContactList } from './ContactList';
import Modal from './Modal';
import { v4 as uuid } from 'uuid';


class ContactBook extends React.Component{
    
    state = {
        contacts: [
          {
            id: 1,
            name: 'Moiez Shaikh',
            address: 'Pune',
            age: 28,
            mobile: '9098927836'
          },
          {
            id: 2,
            name: 'Pooja Kamat',
            address: 'Pune',
            age: 28,
            mobile: '7809826787'
          },
          {
            id: 3,
            name: 'Girish Kamat',
            address: 'Pune',
            age: 32,
            mobile: '8937827836'
          },
          {
            id: 4,
            name: 'Siddhant Gorle',
            address: 'Pune',
            age: 21,
            mobile: '9098098836'
          }
        ],
        modal: {
          name: '',
          address: '',
          age: '',
          mobile: ''
        },
        showModal: false
      }
    
    
  deleteContact = (id) => {
    let newContacts = [...this.state.contacts];
    
    let index = newContacts.findIndex((item) => item.id === id);
    
    newContacts.splice(index, 1);
    
    this.setState({
      contacts: newContacts
    })
  }
  
  addContact = () => {
    let newContacts = [...this.state.contacts];

    let contact = { ...this.state.modal, id: uuid() };

    newContacts.push(contact);

    this.setState({
      contacts: newContacts
    }, () => {
      this.setState({
        modal: {
          name: '',
          address: '',
          age: '',
          mobile: ''
        },
        showModal: false
      })
    })

  }

  //toggle this.showModal
  setShowModal = () => {
    this.setState({
      showModal: !this.state.showModal,
      modal: {
        name: '',
        address: '',
        age: '',
        mobile: ''
      },
    })
  }

  onChangeListener = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    let obj = {};
    obj[id] = value;
    
    // console.log(e)
    this.setState({
      modal: {
        ...this.state.modal,
        ...obj
      }
    })

  }
    
    render() {
        return (
            <div>
                <div className='action-header'>
                    <button className='btn-primary' onClick={this.setShowModal}>Add Contact</button>
                </div>
                <ContactList
                    contacts={this.state.contacts}
                    deleteContact={this.deleteContact}
                    addContact={this.addContact}
                />
                <Modal
                    showModal={this.state.showModal}
                    setShowModal={this.setShowModal}
                    name={this.state.modal.name}
                    address={this.state.modal.address}
                    age={this.state.modal.age}
                    mobile={this.state.modal.mobile}
                    onChangeListener={this.onChangeListener}
                    addContact={this.addContact}
                />
            </div>
        );
    }
}

export default ContactBook;