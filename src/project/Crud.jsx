import { useState } from "react"
export const Crud = () => {
    const [InputValue , setInputValue] = useState([]);
    const [task , setTask] = useState(InputValue);
    const [datetime , setDateTime] = useState('');
    const settime = setTimeout(() => {
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString(); 
        setDateTime(`${date} ${time}`);
    }, 1000);
    const now =new Date();
    const handleInputChange = (value) =>{
        setInputValue(value.target.value);
    };
    const handleFormSubmit = (events)=>{
        events.preventDefault();
        if(!InputValue) return;
        if(task.includes(InputValue))
        {
            setInputValue("");
            return;
        }
        setInputValue("");
        setTask((prevTask) => [...prevTask, InputValue]);
    }
    const handleDeleteButtons = (data)=>{
        const updatedtask = task.filter((curtask) => curtask !== data);
        alert("data removed");
        setTask(updatedtask);
    }
    return(
        <section>
            <h3>PerForm Crud Opration</h3>
            <h3>{datetime}</h3>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <input 
                        name="userName"
                        type="text"
                        placeholder="Enter Name"
                        value={InputValue}
                        onChange={handleInputChange}
                     /><br/>
                    <button type="submit">Save</button>
                </form>
            </section>
            <section>
                <ul>
                    {
                        task.map((curtask) => {
                        return <li key={curtask}>
                                    {curtask}
                                    <button>ok</button>
                                    <button onClick={ ()=> {handleDeleteButtons(curtask)}}>Delete</button>
                                </li>
                        })
                    }
                </ul>
                <button onClick={() =>{setTask([])}}>Clear</button>
            </section>
        </section>
    )
}