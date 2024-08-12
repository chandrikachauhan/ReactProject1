import { useState } from "react"
import "./style.css"
export const Toggle = () =>{
    const[isOn, setIsOn] = useState(false)
        const toggleButton = () =>{
            setIsOn(!isOn); 
        }
        const checkIsOn = isOn ? "on" : "off";
        const bg ={backgroundColor: isOn ? "#37ebf8":"#aaaaab"};
    return (
        <div className="parent" 
            style={bg}
            onClick={toggleButton}>
            <div className={`child ${checkIsOn}`}>
                <span>{checkIsOn}</span>
            </div>
        </div>
    )
}