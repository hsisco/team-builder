import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});

  const handleChange = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTeamMember({name: "", email: "", role: ""})
  };

  return (
    <div className="App">
      <Route exact path="/" component={Form} />

    </div>
  );
}

export default App;
