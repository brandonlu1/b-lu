import "../../CSS/Assets/page.css";
import "../../CSS/Assets/assets.css";
import PropositionKey from "./PropositionKey";
import { useState } from "react";
const propositions = [
    {name:"p"},
    {name:"q"},
    {name:"r"},
    {name:"("},
    {name:")"},
    {name:"∧"},
    {name:"∨"},
    {name:"¬"},
    {name:"→"},
    {name:"⟷"}
]
export default function PropositionVisualizer(props){
    const [proposition, setProposition] = useState("");
    const [termCount, setTermCount] = useState(0);
    const [isValid, setIsValid] = useState(true)
    const [splitProposition, setSplitProposition] = useState([""]);
    return(
    <div className="home--container">
        <div className="home--projects">    
            <p className="title2">TRUTH TABLE VISUALIZER</p>
            <p className="title2">{proposition}</p>
            <p className="title3"> {!isValid ? "Sorry, you entered an invalid proposition." : ""}</p>
            <div className="fr">
                <div className="visualizer--mapping">{propositions.map((p)=> <PropositionKey name={p.name} id = {p.name} onClick = {() => setProposition(proposition + " " + p.name)}/>)}</div>
                <div className="fc">
                    <div className="proposition--delete--container"><p className="title3" onClick={()=>deleteTerm()}>DELETE</p></div> 
                    <div className="proposition--delete--container"><p className="title3" onClick={()=>enter()}>ENTER</p></div>
                </div>
            </div>


        </div>
    </div>)

    function deleteTerm(){
        setProposition(proposition.substring(0,proposition.length-2));
    }
    
    function valid(){
        if (splitProposition.length < 2){
            return false;
        }
        else{
            return true;
        }
    
    }

    function enter(){
        splitProp();
        if (valid()){
            setIsValid(true)
            createTable()
        }
        else{
            setIsValid(false)
        }

    }

    function splitProp(){
        setSplitProposition(proposition.split(" "))
        console.log(splitProposition)
    }
    //Creates the truth table
    function createTable(){
        
    }

}
