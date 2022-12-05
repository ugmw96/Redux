import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { decrement, increment, loggedt } from './actions';

function App() {
  const counter = useSelector (state => state.counter);
  const logged = useSelector (state => state.isLogged);
  const dispatch = useDispatch ();

  return (
    <div>
      <Button variant="outlined" color="error" onClick={() => dispatch(loggedt())}>
  Switch user
</Button>

     <h1>Counter {counter}</h1>

     {logged && (<Button onClick={() => dispatch(increment(5))}>+</Button>,
     <Button onClick={() => dispatch(decrement())}>-</Button>)}

    </div>
  );
}

export default App;
