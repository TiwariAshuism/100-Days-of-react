import "./Table.css";
import React, { useState } from "react";

const Table = (props) =>
{
    const [title, setTitle]=useState(props.title);
    const [newTitle,setNewTitle] = useState('');
    const abc=()=>{
        setTitle(newTitle);
    }
    const bcd=(event)=>{
        setNewTitle(event.target.value);
    }
    return (
        <div className="flex-grid-thirds">
            <div className="col">{props.today}</div>
            <div className="col">{title} </div>
            <div className="col">${props.fee}</div>
            <div className="col">
                <input type='text' value={newTitle} onChange ={bcd} />
                <button onClick={abc}>Click here</button></div>
        </div>
    );
    }
export default Table;