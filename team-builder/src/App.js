import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});

  const handleChange = event => {
    setTeamMember({...tm, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTeamMember({name: "", email: "", role: ""})
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;
