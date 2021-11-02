// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ContactList as ContactList1 } from './components/ContactList';
import { v4 as uuid } from 'uuid';
import Modal from './components/Modal';
//functional components
//class components
//JSX- JavaScript XML- syntactic sugar
// create destory- lifecycle phases- mount, update, unmount

class App extends React.Component{

  constructor(props) {
    super(props);
    console.log('Props', props);
  }

  state = {
    counter: 0,
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

  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  //   console.log("getDerivedStateFromProps");
  // }

  // shouldComponentUpdate() {
  //   return null
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  // }


  //lifecycle methods

  // incrementCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // }

  // decrementCounter = () => {
  //   let obj = {counter: this.state.counter - 1}
  //   this.setState(obj)
  // }

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
    
    console.log(e)
    this.setState({
      modal: {
        ...this.state.modal,
        ...obj
      }
    })

  }

  render() {
    return (
      <div className='container'>
        {/* <Counter
          count={this.state.counter} //1
          increment={this.incrementCounter}
          decrement={this.decrementCounter}
        /> */}

        {console.log(this.state.contacts)}

        <div className='action-header'>
                <button onClick={this.setShowModal}>Add Contact</button>
        </div>
        <ContactList1
          contacts = {this.state.contacts}
          deleteContact = {this.deleteContact}
          addContact = {this.addContact}
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
    )
  }
}

export default App;


//props- properties
// import { App } from 'app'; //normal export
// import App from 'app'; //default export


// state- JS-Object
// props- JS-Object

//props are immutable object
//state can be mutated
