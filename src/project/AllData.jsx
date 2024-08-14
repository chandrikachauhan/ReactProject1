export const AllData = ({keydata,data, handleDeleteButtons}) =>{
    return <li key ={keydata}>
                {data}
                <button>ok</button>
                <button onClick={ ()=> {handleDeleteButtons(data)}}>Delete</button>
            </li>
}