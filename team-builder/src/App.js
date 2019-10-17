import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Form from './Form';

import './App.css';

function App() {
  const [team, setTeam] = useState("");

  return (
    <div className="App">
      <Route exact path="/" component={Form} />

    </div>
  );
}

export default App;
