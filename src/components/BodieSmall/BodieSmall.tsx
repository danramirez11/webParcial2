
import useBodies from "../../hooks/useBodies";
import { Body } from "../../types/types";
import './BodieSmall.css';

interface BodySmallProps {
    body: Body;
}

const BodySmall = ({body}: BodySmallProps) => {
    const { seeDetails } = useBodies();
    return (
        <div className="bodySmall" onClick={() => seeDetails(body)}>
            <h4>{body.name}</h4>
            <div>
            <label htmlFor="density">Density</label>
            <input name="density" type="range" value={body.density} max={10} readOnly/>
            <label htmlFor="density">{body.density}</label>
            </div>
            
            <div>
            <label htmlFor="gravity">Gravity</label>
            <input name="density" type="range" value={body.gravity} max={10} readOnly/>
            <label htmlFor="gravity">{body.density}</label>
            </div>
            
        </div>
    )
}

export default BodySmall;