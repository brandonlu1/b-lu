import "../CSS/Components/projectCard.css";
import "../CSS/Assets/assets.css";
import {useNavigate} from 'react-router-dom';

export default function ProjectCard(props){
    const navigate = useNavigate()
    return(<div className="project--card--container" onClick={()=>navigate(props.route)}>
        <p className="title3">{props.name}</p>
    </div>)
}