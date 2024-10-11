import useBodies from "../../hooks/useBodies";
import './RandomBtn.css';

const RandomBtn = () => {
    const { randomBody } = useBodies();

    return (
        <button className="randomBtn" onClick={() => randomBody}>Random</button>
    )
}

export default RandomBtn;