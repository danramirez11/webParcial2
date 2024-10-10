import { apiBody } from "../types/types";

export const fetchBodies = async () => {
    const response = await fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false');
    const json = await response.json();

    const cleaned = json.bodies.map((body: apiBody) => {
        return {
            id: body.id,
            name: body.name,
            englishName: body.englishName,
            moon: body.moons ? body.moons.length : 0,
            density: body.density,
            gravity: body.gravity,
            isPlanet: body.isPlanet,
            semimajorAxis: body.semimajorAxis,
            perihelion: body.perihelion,
            aphelion: body.aphelion
        }
    })

    return cleaned;
}