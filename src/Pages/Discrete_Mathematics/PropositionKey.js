import "../../CSS/Pages/propositionVisualizer.css";
export default function PropositionKey(props){
    return(
    <div className="proposition--key--container" id= {props.name} onClick = {props.onClick}>
        <p className="proposition--key--text">{props.name}</p>
    </div>)
}
