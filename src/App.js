
import './App.css';
import Box from './components/Box';
import { useState } from 'react';

function App() {

  const [count, updateCount] = useState(0);

  function boxClicked(brother) {
    updateCount (count + 1);

    if (brother === 1) {
      updateCount1 (count1 + 1);
    }
    if (brother === 2) {
      updateCount2 (count2 + 1);
    } 
    if (brother === 3) {
      updateCount3 (count3 + 1);
    }
  }

  const[count1, updateCount1] = useState(0);
  const[count2, updateCount2] = useState(0);
  const[count3, updateCount3] = useState(0);

  return (
    <div className="App">
      <h1>Contador de Clicks</h1>
      <div className="App_children">
        <Box id={1} brotherCount1 = {count2} brotherCount2 = {count3} boxClicked={boxClicked}/>
        <Box id={2} brotherCount1 = {count1} brotherCount2 = {count3} boxClicked={boxClicked}/>
        <Box id={3} brotherCount1 = {count1} brotherCount2 = {count2} boxClicked={boxClicked}/>
      </div>
      <p className='App_father'>Contador Padre:
        <p>total de Clicks
          <h2>{count}</h2>
        </p>
      </p>
    </div>
  );
}

export default App;
