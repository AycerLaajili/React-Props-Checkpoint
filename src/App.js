import './App.css';
import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


function handleName(fullName){
  alert(`My name is: ${fullName}.`);
}
function App() {

  return (
    <Fragment>
      <Profile bio='Here is my bio!' profession='Software Developer' handleName={handleName}> {/* I removed fullName to check for default props */}
         
      </Profile>
    </Fragment>
  );
}

export default App;
