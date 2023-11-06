import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {
  const [tempObj, setTempObj] = useState({
    scale: 'celsius',
    temperature: 0,
  });

  const celsius = 0;
  const fahrenheit = 0;
  const kelvin = 0;

  function onCelsiusChange() {

  }
  function onFahrenheitChange() {

  }
  function onKelviChange() {

  }

  return (
    <div style={{ "textAlign": "center" }}>
      <h2>Celsius: <Child temperature={celsius} onTempeatureChange={onCelsiusChange} /></h2>
      <h2>Fahrenheit: <Child temperature={fahrenheit} onTempeatureChange={onFahrenheitChange} /></h2>
      <h2>Kelvin: <Child temperature={kelvin} onTempeatureChange={onKelviChange} /></h2>
    </div>
  );
}

export default App;
