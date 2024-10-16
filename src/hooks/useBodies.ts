import { useEffect, useState } from "react";
import { Body } from "../types/types";
import { fetchBodies } from "../services/fetch";
import { useNavigate } from "react-router-dom";

const useBodies = () => {
    const [bodies, setBodies] = useState<Body[]>([]);
    const navigate = useNavigate();
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);

    const randomBody = () => {
        const random = Math.floor(Math.random() * bodies.length);
        const body = bodies[random];
        navigate('/details', {state: {body}});
    }


    const fetch = async () => {
        const data = await fetchBodies().then(data => data).catch(err => setError(err));

        if (data) {
            setBodies(data);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetch();
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
        console.log(sorted);

        setBodies(sorted);
    }

    const filterBy = (key: boolean) => {
        setBodies(p => p.filter(body => body.isPlanet === key));
    }

    return {
        bodies,
        loading,
        error,
        seeDetails,
        orderBy,
        filterBy,
        randomBody
    };
}

export default useBodies;