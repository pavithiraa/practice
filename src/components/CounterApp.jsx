import { useState } from "react"

const CounterApp = () => {
    const [count, setCount] = useState(0)

    const handleInputChange=(type)=>{
        if(type === 'increment'){
            setCount(prev => Math.min(prev + 1, 100))
        }else if(type === 'decrement'){ 
            setCount(prev => Math.max(prev - 1, 0))
        }
        
    }
    return(
        <div className="counter-app">
        <h3>Counter App</h3>
        <div className="counter">
        <div>{count === 100 ? <span className="counter-limit">Max limit reached</span>: null    }</div>
        <div>
        <button className="counter-input" onClick={() => handleInputChange('increment')}>+</button>
        <input type="number" value={count} min="0" max='100' readOnly />
        <button className="counter-input" onClick={() => handleInputChange('decrement')}>-</button>
        </div>
        
        </div>
       
        </div>
    )
}


export default CounterApp