import { useState } from "react";

export const useCounterHook =(initialValue)=>{
    const [state,setState] = useState(initialValue);
    const increment =()=>{
        setState(pre =>pre +1);
    }

    const decrement =()=>{
        setState(pre =>pre -1);
    }

    return {state,increment,decrement};
}