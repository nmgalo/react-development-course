import './App.css';

import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState(0)

  return (
    <div className="App">
     <div className="buttons">
      <button onClick={() => setInputValue(inputValue - 1)}>-</button>
      <button onClick={() => setInputValue(inputValue + 1)}>+</button>
     </div>
     <input type="number" disabled="t" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
}

export default App;
