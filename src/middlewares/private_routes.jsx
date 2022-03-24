import { Navigate } from "react-router-dom";

const PrivateRoutes =({children})=>{
    const authed = localStorage.getItem('token');
    return authed === null ? <Navigate to="/login"></Navigate> : children;
}