import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Burger from './Components/Burger/Burger';
import Product from './Components/Product/Product';
import counterSlice from './store/counter';

function App() {
  
  const count = useSelector( store => store.counter.count )
  const dispacth = useDispatch()

  return (
   <div className='app'>
     <h1>{count}</h1>
     <button onClick={ () => dispacth( counterSlice.actions.increment() )}>INCREMENT</button>
     <button onClick={ () => dispacth( counterSlice.actions.decrement() )}>DECREMENT</button>
     <button onClick={ () => dispacth( counterSlice.actions.increaseByNumber(5) )}>INCREMENT BY 5</button>
     <button onClick={ () => dispacth( counterSlice.actions.increaseByNumber(10) )}>INCREMENT BY 10</button>
    <hr></hr>
    <Burger />
    <hr/>
    <Product />
   </div>
  );
}

export default App;
