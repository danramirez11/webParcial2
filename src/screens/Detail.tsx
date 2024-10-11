import { useLocation } from "react-router-dom";
import { Body } from "../types/types";

const Detail = () => {
    const location = useLocation();
    const body: Body = location.state.body;
    console.log(body);

    return (
        <>
        <div className="banner">
            <h1>{body.name}</h1>
            <h3>{body.englishName}</h3>

            <div className="tags">
                <p className="tag">{body.moons > 0 ? `${body.moons} moons` : 'no moons'} </p>
                <p className="tag">
                {body.isPlanet ? 'is a planet' : 'not a planet'}
                </p>
                <p className="tag">
                Density: {body.density}
                </p>
                <p className="tag">
                Gravity: {body.gravity}
                </p>
            </div>
        </div>

        <div>
            <p>Aphelion: {body.aphelion}</p>
            <p>Perihelion: {body.perihelion}</p>
            <p>Semimajor axis:{body.aphelion}</p>
        </div>

        </>
    )
}

export default Detail;