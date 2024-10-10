import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/details",
        element: <Detail />
    }
]
)

export default router;