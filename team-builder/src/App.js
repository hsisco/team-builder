import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Form from './components/Form';
import Card from './components/Card';

import './App.css';

function App() {
  const [team, setTeam] = useState([
    // {name: "Hana",
    // email: "hana@gmail.com",
    // role: "Data Scientist"}
  ]);

  const newMember = note => {
    setTeam([...team, note])
  }

  return (
    <div className="App">
      <h3>Welcome to the Team!</h3>
      <Form newMember={newMember} />
      <h2>Our Team</h2>
      <Route path="/Card" render={props => <Card {...props}/>} />
    </div>
  );
}

export default App;
