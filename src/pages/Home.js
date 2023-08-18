import { TypeAnimation } from "react-type-animation";
import UserConnections from "../components/UserConnections";
import "../styles/Home.css";

function Home() {
    return <>
        <div className="home">
            <div className="about">
                <h2>
                    <TypeAnimation sequence={[
                        "👋 my name is ",
                        1000,
                        "👋 my name is TheTrojanHorse",
                        1500,
                        "👋 my name is",
                        500,
                        "👋 my name is luxkatana"
                    ]}/>
                    </h2>

                <div className="prompt">
                    <p>Young programming enthousiast </p>
                    <UserConnections/>
                </div>

            </div>
            <div className="skills">
                <h1>
                    Skills
                </h1>
                <ol className="list">
                    <li>
                        <h2>
                            Back-End
                        </h2>
                        <span>
                            Django, mySQL
                        </span>
                    </li>

                    <li>
                        <h2>
                            Languages
                        </h2>
                        <span>
                            Python, C and lua(roblox luau)
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    </>

}


export default Home;
