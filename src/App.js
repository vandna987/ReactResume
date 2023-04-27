import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Component2 from './component/component2/component2';
import Component1 from './component/component1/component1';
import Component3 from './component/component3/component3';
import Header from './component/Header/header';
import Profile from './component/profile/profile';
import Skill from './component/Skills/skill';
import Address from './component/Address/address';
import Softskill from './component/Softskills/softskill';
import Hobbies from './component/Hobbies/hobbies';
import Education from './component/Education/education';
import Workexperience from './component/Workexperience/workexperience';
import Project from './component/Project/project';
import Login from './component/Login/login';
function App() {
  let name = "vandna patidar"
  const fullName = {
    fname: "vandna",
    lname: "patel"
  }
  return (

    <div className="App">

      <div id='left'>
        <Header />
        <Profile />
        <Skill />
        <Softskill />
        <Hobbies />
      </div>
      <div id='right'>
        <Address /> 
        <Education />
        <Workexperience/>
        <h3><u>PROJECTS</u></h3>
        <Project/>
      </div>
      {/* <Login/> */}

    </div>

  );
}

export default App;
