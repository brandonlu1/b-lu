import "../CSS/Pages/home.css";
import "../CSS/Assets/assets.css";
import "../"
import LU_IMAGE from "../Assets/IMG_4155.JPG";
import ProjectCard from "../Components/ProjectCard";

const projects = [
    {name:"The Internship Initiative", route:"/the-internship-initiative"},
    {name:"Black Jack", route:"/black-jack"},
    //{name:"One Word Story", route:"/one-word-story"},
    //{name:"Ploop", route:"/ploop"},


]

export default function Home(props){
    return(
    <div className="home--container">

        <div className="home--projects">
        <p className="title2">ABOUT ME</p>
            <img src = {LU_IMAGE} alt = "BRANDON LU" className="split--image"/>
            <div className="">
                <p className="title3">
                    <br/>
                    &emsp;&emsp;Hi, I'm Brandon. I am currently a first year student studying Computer Science at RIT.
                    I am currently interested in web development, but I plan on exploring all sorts of fields.
                    Feel free to look at some of my previous projects below or check me out on <a href="https://github.com/brandonlu1">Github</a> or <a href="https://www.linkedin.com/in/brandon-lu-b6079b163/">LinkedIn</a>.
                 </p>
            </div>
            <p className="title2">PROJECTS</p>
            <div className="home--mapping">{projects.map((project)=> <ProjectCard name={project.name} route={project.route}/>)}</div>

        </div>
    </div>)
}