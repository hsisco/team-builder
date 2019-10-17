import React, { useState } from 'react';
import './App.css';

function App() {
  const [tm, setTM] = useState({name: "", email: "", role: ""});

  const handleChange = event => {
    setTM({...tm, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTM({name: "", email: "", role: ""})
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;
