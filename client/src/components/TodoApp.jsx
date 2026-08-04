import { useState } from "react"

const TodoApp = () => {
      const [task,setTask]= useState('');
      const [list, setList] = useState([]);
      const handleText =()=>{
          if(task.trim() !==""){
                setList(prev => [...prev, task]);
                setTask(''); // Clear the input field after adding a task
          }else{
                alert('Please enter a task before adding it to the list.');
          }
      }

      const handleEdit = (index) => {
        let editItem = list[index];
        setTask(editItem);
        setList(pre=>pre.filter((_, i) => i !== index));
      }

      const handleDelete=(index)=>{
        setList(prev =>prev.filter((_,i)=>i !== index))
      }
  return (
    <div>   
        <h3>Todo App</h3>
        <input  type='text' placeholder='Enter your task' value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleText()} />
        <button onClick={handleText}>+</button>
        {list.length > 0 && <div style={{margin: '10px 0', fontWeight: 'bold'}}>LISTS</div>}
        {list.map((listItem, i)=>(
            <div>
                <ul>
                    <li key={i}><span style={{marginRight: '10px'}}>{listItem}</span><button style={{border:"1px solid #969393", padding:"5px", borderRadius:"4px"}} onClick={() => handleEdit(i)}>E</button> <button style={{border:"1px solid #969393", padding:"5px", borderRadius:"4px"}} onClick={() => handleDelete(i)}>D</button></li> 
                </ul>
            </div>
        )
        
        )}
    </div>)}

export default TodoApp