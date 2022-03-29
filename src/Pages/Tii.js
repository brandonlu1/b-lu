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
            <p className="title2">THE INTERNSHIP INITIATIVE</p>
            <div className="page--text--body">
                &emsp;&emsp;<av href="https://interninit.com">The Internship Initiative</av> was a web application me and my friends made during the COVID-19 pandemic. The 
                purpose of the application was to present high school students with work experience opportunities. The application is split up
                into two sections: the student portal and the business portal. Students send their applications to companies using the student portal, which are then
                showcased on a company's business portal. From there, the company can start the hiring process. 
                <br/>
                <br/>
                &emsp;&emsp;The Internship Initiative was my introduction into programming. I had taken programming classes at my high school, but the extent of my coding knowledge was 
                no more than simple console programs. Before this project, I never touched JavaScript and I had no experience in web development, so it was an interesting experience for me to
                learn as I built the platform. For the most part, I handled the frontend development for the application. I created numerous Figma designs before choosing one to implement. In total I spent 
                four months developing the two portals, splitting the work with my friend.
                By the end, we created and deployed the web application and marketed it towards high schools across New England. While over 50 schools expressed interest in the platform, it remains unpopulated.
                <br/>
                <br/>
                <strong>Technologies Used: </strong> ReactJS, HTML, CSS, JavaScript, Node.js, Redux, Figma, DynamoDB, AWS

            </div>
        </div>
    </div>)
}