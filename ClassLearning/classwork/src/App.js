import './App.css';
import Header from './components/header';
import Contactus from './components/contactus';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Landingpage from './components/landingpage';
import Mainpage from './components/Mainpage';
import Profile from './components/Profile';
import Allcontext from './context/Allcontext';




function App() {
  // const [name, setName] = useState('Swatantra')
  // const [Incnum, setNum]=useState(0)
  // const [showtitlepage, setshowtitlepage] = useState(true)

  // const contactDetails = {
  //   name: 'Swatantra',
  //   phone: '6336822372',
  //   email: 'xyz@gmail.com'
  // }

  // function handleClick(){
  //   setName('Chaurasia')
  // }

  // function RevertClick(){
  //   setName('Swatantra')
  // }

  // function Increment(){
  //   setNum(Incnum+1)
  // }

  // function Decrement(){
  //   setNum(Incnum-1)
  // }

  const contactDetails = {
    name: 'Swatantra',
    phone: '439483494',
    email: 'xyz@gmail.com'

  }

  const [global, setGlobal] = useState('Global')


  return (
    // <div>
    //   {/* <Header name={name} setName={setName} showtitlepage={showtitlepage} setshowtitlepage={setshowtitlepage}></Header> */}

    //   {/* <Contactus name={name}></Contactus> */}
    //   {/* My Name is {name}
    //   <button onClick={handleClick}>Click me</button> */}
    //   {/* <button onClick={RevertClick}>Revert me</button> */}

    //   {/* This is my Counter {Incnum}
    //   <button onClick={Increment}>Increment</button>
    //   <button onClick={Decrement}>Decrement</button> */}

    //   {/* <Contactus name={contactDetails.name}
    //     phone={contactDetails.phone} email={contactDetails.email}>
    //   </Contactus> */}
    // </div>

    // <Routes>
    //   <Route path= '/'  element = {<Mainpage/>} />
    //   <Route path= '/login'  element = {<Login/>} />
    //   <Route path= '/register'  element = {<Signup/>} />
    // </Routes>
    <div>
      <All.Provider>
      <Header></Header>
      <Contactus>
        
      </Contactus>
       Details coming from profile
      <Profile></Profile>
      </All.Provider>
    </div>

  );
}

export default App;
