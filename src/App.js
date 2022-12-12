import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { decrement, increment, loggedt, increment5 } from './actions';

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

     {logged && (
        <div>
          <Button onClick={() => dispatch(increment())}>+</Button>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button onClick={() => dispatch(increment5())}>+5</Button>
          </div>
          )}

    </div>
  );
}

export default App;
