
import BodySmall from "../components/BodieSmall/BodieSmall";
import Filters from "../components/Filters/Filters";
import useBodies from "../hooks/useBodies";

const Home = () => {
    const { bodies, loading, error } = useBodies();

    return (
        <>
        <h1>Celestial bodies</h1>

        <h3>Bodies</h3>

        <Filters/>

        {loading && <p>This might take a while</p>}

        {error && <p>{error}</p>}

        <div className="bodiesContainer">
            {bodies.map((body) => {
                return (
                    <BodySmall key={body.id} body={body}/>
                )
            })}
        </div>

        </>
    )
}

export default Home;