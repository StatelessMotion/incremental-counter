import * as React from 'react';
import './style.css';
import {useReducer} from 'react';

export default function App() {

const reducerFunction = (state, value) => {
    
      return state + value;
    
}

const [count, dispatch] = useReducer(reducerFunction, 0);


  return (


    <div>
      <h1>Incremental counter</h1>
      <p>{count}</p>
      <button onClick={() => {dispatch(+1)}}>+</button>
      <button onClick={() => {dispatch(-1)}}>-</button>


    </div>
  );
}
