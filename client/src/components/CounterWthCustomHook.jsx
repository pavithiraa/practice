import { useCounterHook } from "./Reuseable/useCounterhook";

const CounterWthCustomHook = () => {
const {state, increment,decrement} = useCounterHook(0);
return(
<div>
    <p>Custom Hook Count: {state}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
</div>
)}
export default CounterWthCustomHook