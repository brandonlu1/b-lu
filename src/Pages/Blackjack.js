import "../CSS/Assets/page.css";
import "../CSS/Assets/assets.css";

export default function BlackJack(props){
    return(
    <div className="home--container">
        {/* <div className="home--about--me">
            <p className="title2">ABOUT ME</p>
            <img src = {LU_IMAGE} alt = "BRANDON LU" className="split--image"/>


        </div> */}
        <div className="home--projects">
            <p className="title2">BLACK JACK</p>
            <div className="page--text--body">
                &emsp;&emsp;Black Jack has been my favorite game ever since I was little. I remember my friends and I used to an online version of the game every day during our free periods in high school. 
                Ever since I started coding, doing a project involving the card game has always been on my checklist. During the winter of my freshman year of college, I finally found the
                time to take a crack at it.
                <br/>
                <br/>
                &emsp;&emsp;I used the Black Jack web application as a way to practice retreiving data from a database while creating something I was genuinely interested in.
                In order to make the application, I built a ReactJS frontend, and an Express backend that stored data in a MongoDB collection. 
                The user would create an account that is given a certain amount of virtual currency. The player can then use their balance to bet in games of Black Jack. Depending on whether or not they win, 
                currency will be awarded to the player account.
            
                <br/>
                <br/>
                &emsp;&emsp;The hardest part of the project was getting started: I had 
                no idea how I would create a card game using JavaScript, or how to engineer the game logic needed. It took a bit of time to piece everything together, but implementation came quickly after I sorted everything out. In total, the app 
                took roughly two and a half weeks to complete. Right now, the only game implemented is Black Jack, but I plan on implementing more card games in the future.
                <br/>
                <br/>
                <strong>Technologies Used: </strong>ReactJS, Node,js, Express, MongoDB, Deck of Cards API

            </div>
        </div>
    </div>)
}