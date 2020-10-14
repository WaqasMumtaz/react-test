import React , { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { Provider } from './components/Context';
import fbData from './Config/Firebase';
// const db = firebase.database();
const data = {
  a:1,b:2
} 

function App() {

  return (
    <div className="App">
    <Provider value={data}>
      <Main/>
    </Provider>
    </div>

  );
}

export default App;
