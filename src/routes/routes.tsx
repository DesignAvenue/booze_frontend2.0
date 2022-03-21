import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import Home from "../views/home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={
                    <Home/>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;