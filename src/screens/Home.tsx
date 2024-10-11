
import BodySmall from "../components/BodieSmall/BodieSmall";
import Filters from "../components/Filters/Filters";
import RandomBtn from "../components/RandomBtn/randomBtn";
import useBodies from "../hooks/useBodies";
import './Home.css';

const Home = () => {
    const { bodies, loading } = useBodies();

    return (
        <>
        <h1>Celestial bodies</h1>

        <h3>Bodies</h3>

        <Filters/>

        {loading && <p>Loading... This might take a while</p>}

        <div className="bodiesContainer">
            {bodies.map((body) => {
                return (
                    <BodySmall key={body.id} body={body}/>
                )
            })}
        </div>

        <RandomBtn/>

        </>
    )
}

export default Home;