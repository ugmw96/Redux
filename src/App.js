import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { decrement, increment } from './actions';

function App() {
  const counter = useSelector (state => state.counter);
  const logged = useSelector (state => state.isLogged);
  const dispatch = useDispatch ();

  return (
    <div>
     <h1>Counter {counter}</h1>

     <Button onClick={() => dispatch(increment())}>+</Button>
     <Button onClick={() => dispatch(decrement())}>-</Button>

    { logged && ( <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
)}
    </div>
  );
}

export default App;
