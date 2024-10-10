
import BodySmall from "../components/BodieSmall/BodieSmall";
import useBodies from "../hooks/useBodies";

const Home = () => {
    const { bodies } = useBodies();

    return (
        <>
        <h1>Celestial bodies</h1>

        <h3>Bodies</h3>

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