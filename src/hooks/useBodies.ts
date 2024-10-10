import { useEffect, useState } from "react";
import { Body } from "../types/types";
import { fetchBodies } from "../services/fetch";
import { useNavigate } from "react-router-dom";

const useBodies = () => {
    const [bodies, setBodies] = useState<Body[]>([]);
    const navigate = useNavigate();

    const fetch = async () => {
        const data = await fetchBodies();
        setBodies(data);
    }

    useEffect(() => {
        fetch();

        return console.log('unmounting');
    }, []);

    const seeDetails = (body: Body) => {
        navigate('/details', {state: {body}});
    }

    const orderBy = (key: keyof Body) => {
        const sorted = [...bodies].sort((a, b) => {
            if (a[key] > b[key]) return 1;
            if (a[key] < b[key]) return -1;
            return 0;
        });

        setBodies(sorted);
    }

    const filterBy = (key: boolean) => {
        const filtered = bodies.filter(body => body.isPlanet === key);
        setBodies(filtered);
    }

    return {
        bodies,
        seeDetails,
        orderBy,
        filterBy
    };
}

export default useBodies;