import React from 'react';
import { Provider } from 'react-redux'
import configureStore from "Store"
import Todo from 'Todo/DumbComponents';
import './App.css';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
