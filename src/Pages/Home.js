import "../CSS/Pages/home.css";
import "../CSS/Assets/assets.css";
import LU_IMAGE from "../Assets/IMG_4155.JPG";
import ProjectCard from "../Components/ProjectCard";

const projects = [
    {name:"The Internship Initiative", route:"/the-internship-initiative"},
    {name:"Black Jack", route:"/black-jack"},
    {name:"One Word Story", route:"/one-word-story"},
    {name:"Ploop", route:"/ploop"},

]

export default function Home(props){
    return(
    <div className="home--container">
        {/* <div className="home--about--me">
            <p className="title2">ABOUT ME</p>
            <img src = {LU_IMAGE} alt = "BRANDON LU" className="split--image"/>


        </div> */}
        <div className="home--projects">
            <p className="title2">PROJECTS</p>
            <div className="home--mapping">{projects.map((project)=> <ProjectCard name={project.name} route={project.route}/>)}</div>

        </div>
    </div>)
}