// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { ContactList as ContactList1 } from './components/ContactList';
import Modal from './components/Modal';
import CounterButton from './playground/CounterButton';
import CounterHeader from './playground/CounterHeader';
import CounterHOC from './playground/CounterHOC';
import ContactBook from './components/ContactBook';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { Route, Routes, BrowserRouter, Link, NavLink } from 'react-router-dom';
//functional components
//class components
//JSX- JavaScript XML- syntactic sugar
// create destory- lifecycle phases- mount, update, unmount

class App extends Component{

  // constructor(props) {
  //   super(props);
  // }
  
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

  render() {
    return (
      <div className='container'>
        {/* <Counter
          count={this.state.counter} //1
          increment={this.incrementCounter}
          decrement={this.decrementCounter}
        /> */}

        
      
        <BrowserRouter>
          <header>
            <ul className='header-list'>
              <NavLink to='/'  id='link' activeClassName='active'> Home </NavLink>
              <NavLink to='/contactbook'   id='link' activeClassName='active'> Contact Book </NavLink>
              <NavLink to='/aboutus'  id='link' activeClassName='active' > About Us </NavLink> 
            </ul>
          </header>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contactbook' element={<ContactBook />}></Route>
              <Route path='/aboutus' element={<AboutUs />}></Route>
            </Routes>
        </BrowserRouter>

        {/* HOC */}
        {/* <CounterButton></CounterButton>
        <CounterHeader></CounterHeader> */}
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

// Higher Order Components HOC- HOC is basically a function that takes in a Component and returns a new Component(Enhanced Component)

// Routing


