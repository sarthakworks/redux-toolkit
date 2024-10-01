import { useState } from 'react';
import './App.css';
import { Counter } from './counter/Counter';
import { Stopwatch } from './stopwatch/Stopwatch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="grid-container">
      <div class="grid-item">
        <Counter />
      </div>
      <div class="grid-item">
        <Stopwatch />
      </div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
    </div>
  );
}

export default App;
