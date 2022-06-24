import React from 'react';

import './style/App.scss';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="App">
      <div className="title">Beta Todo</div>
     <TodoList/>
    </div>
  );
}

export default App;
