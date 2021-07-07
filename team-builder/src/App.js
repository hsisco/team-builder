import React, { useState } from 'react';
// import { Route } from 'react-router-dom';
import Form from './components/Form';
import Card from './components/Card';

import './App.css';

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <h3>Welcome to the Team!</h3>
      <Form team={team}  setTeam={setTeam}/>
      <h2>Our Team</h2>
      <Card team={team}/>
    </div>
  );
}

export default App;
