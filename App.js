// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import { ContactList as ContactList1 } from './components/ContactList';
// import Modal from './components/Modal';
// import CounterButton from './playground/CounterButton';
// import CounterHeader from './playground/CounterHeader';
// import CounterHOC from './playground/CounterHOC';
import ContactBook from './components/ContactBook';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import PNF404 from './components/PageNotFound';
import { Routes, BrowserRouter, NavLink, Route } from 'react-router-dom';
import { List } from './components/todo-list/index';

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



  state = {
    countries: []
  }

  // list of country
  // list of state
  // list of cities

  //getDerivedStatefromProps(){
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

        {console.log(this.state.countries)}
        <select>
          {
            this.state.countries && this.state.countries.length ?
            this.state.countries.map((country) => (
                <option>{country.name}</option>
                )) : null
          }
        </select>
      
        {/* <button onClick={() => { this.fetchCountries() }}>Fetch Country</button> */}
        <BrowserRouter>
          <header>
            <ul className='header-list'>
              <NavLink to='/'  id='link'> Home </NavLink>
              <NavLink to='/contactbook'   id='link'> Contact Book </NavLink>
              <NavLink to='/todolist'  id='link'> To-Do List </NavLink> 
              <NavLink to='/aboutus'  id='link'> About Us </NavLink> 
            </ul>
          </header>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contactbook' element={<ContactBook />}></Route>
              <Route path='/todolist' element={<List />}></Route>
              <Route path='/aboutus' element={<AboutUs />}></Route>
              <Route  path='*' element={<PNF404 />}></Route>
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
// BrowserRouter, HashRouter, MemoryRouter- Link, NavLink
// Routes, Route(path, element)

// Components - Class Based Components(Stateful Components), Functional Components(Stateless Components) 