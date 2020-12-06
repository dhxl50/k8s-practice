import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [data, setData]= useState();
  useEffect(()=>{
    callApi().then(res=>{
      setData(res);
    })
  });
  const callApi = async ()=>{
    const response = await fetch("/api");
    const body = response.json();
    console.log(body);
    return body;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
