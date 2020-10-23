import React , { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './components/main';
// import { Provider } from './components/Context';
import fbData from './Config/Firebase';
// const db = firebase.database();
import { Provider } from 'react-redux';
import store from './components/Redux/store';

const data = {
  a:1,b:2
} 

function App() {

  return (
    <div className="App">
    <Provider store={store}>
      <Main/>
    </Provider>
    </div>

  );
}

export default App;
