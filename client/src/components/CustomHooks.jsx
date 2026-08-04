
import { useCustomHook } from "./Reuseable/useCustomhook";



const CustomHook =()=>{
const {data, loading} = useCustomHook("https://jsonplaceholder.typicode.com/todos/1");
return(
    <div>
        <h3>Custom Hook</h3>
        {loading ? <p>Loading...</p> : <ul>{JSON.stringify(data)}</ul>}
    </div>
)
}
export default CustomHook