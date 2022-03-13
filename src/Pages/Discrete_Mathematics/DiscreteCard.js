import "../../CSS/Assets/page.css";
import "../../CSS/Pages/allSubSets.css";
import "../../CSS/Assets/assets.css";


 export default function DiscreteCard(props){
    return(
    <div className="discrete--card--container">
        <p className="title3">{props.subset}</p>
    </div>)
}

