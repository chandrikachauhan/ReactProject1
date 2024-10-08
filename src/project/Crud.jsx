import { useState } from "react"
import { Form } from "./form";
import { AllData } from "./AllData";
export const Crud = () => {
    const [task , setTask] = useState([]);
    const [datetime , setDateTime] = useState('');
    const settime = setTimeout(() => {
        const now =new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString(); 
        setDateTime(`${date} ${time}`);
    }, 1000);
    const handleFormSubmit = (InputValue)=>{
        if(!InputValue) return;
        if(task.includes(InputValue))return;
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
            <Form addData ={handleFormSubmit}/>
            <section>
                <ul>
                    {
                        task.map((curtask, index) => {
                        return (
                            <AllData 
                                keydata={index}
                                data={curtask}
                                handleDeleteButtons={handleDeleteButtons}
                            />
                        )
                        })
                    }
                </ul>
                <button onClick={() =>{setTask([])}}>Clear</button>
            </section>
        </section>
    )
}