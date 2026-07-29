
import { useEffect, useState } from "react";
export const useCustomHook =(url)=>{
    const [data,setData ] = useState(null);
    const [loading,setLoading] = useState(false);

useEffect(()=>{       
       setLoading(true)
        fetch(url).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setData(data);
            setLoading(false);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    },[url])

    return { data, loading};
}