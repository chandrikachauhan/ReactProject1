import { useState } from "react";

export const Form = ({addData}) => {
    const [InputValue , setInputValue] = useState('');
    const handleInputChange = (value) =>{
        setInputValue(value.target.value);
    };
    const handleFormSubmit = (events) => {
        events.preventDefault();
        addData(InputValue);
        setInputValue("");
    }
    return(
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
    )
}