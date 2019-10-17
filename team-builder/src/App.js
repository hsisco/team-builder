import React, { useState } from 'react';
import './App.css';

function App() {
  const [tm, setTM] = useState({name: "", email: "", password: ""});

  const handleChange = event => {
    setTM({...tm, [event.target.name]: event.target.value});
  };

  return (
    <div className="App">

    </div>
  );
}

export default App;
