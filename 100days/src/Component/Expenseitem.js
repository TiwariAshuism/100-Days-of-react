import "./Expenseitem.css";

function Expenseitem(props) {
    
    return (
        <div className="con">
           
            <div>{props.date.toISOString}</div>
        
        </div>
    )
}

export default Expenseitem;