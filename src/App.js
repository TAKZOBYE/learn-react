import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      { show && <Counter /> }
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
