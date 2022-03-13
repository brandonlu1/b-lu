import "../../CSS/Assets/page.css";
import "../../CSS/Assets/assets.css";
import { useState } from "react";
import DiscreteCard from "./DiscreteCard";

export default function AllSubSets(props){
    const [subsets, SetSubSets] = useState(["{}"]);
    const [set, setSet] = useState("");
    return(
    <div className="home--container">
        <div className="home--projects">    
            <p className="title2">All Sub Sets</p>

            <div className="fr faic">
                <p className="title2">&#x7B;</p>
                <input type="text" className="discrete--input" onChange={(e)=>setSet(e.target.value)}/>
                <p className="title2"> &#x7D;</p>
                <div className="proposition--delete--container"><p className="title3" onClick={findSubSets()}>ENTER</p></div>
            </div>
            {subsets.map((subset) => 
                <DiscreteCard subset={subset} />
            )}
        </div>
    </div>)

    function findSubSets(){
        let split = set.split(",");
        console.log(split)
    }



}
