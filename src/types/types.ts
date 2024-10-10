type Moon = {
    moon: string;
    rel: string;
}

export type apiBody = {
    id: string;
    name: string;
    englishName: string;
    moons: null | Moon[];
    density: number;
    gravity: number;
    isPlanet: boolean;
    semimajorAxis: number;
    perihelion: number;
    aphelion: number;
}

export type Body = {
    id: string;
    name: string;
    englishName: string;
    moons: number;
    density: number;
    gravity: number;
    isPlanet: boolean;
    semimajorAxis: number;
    perihelion: number;
    aphelion: number;
}

