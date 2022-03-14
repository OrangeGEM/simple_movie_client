import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth.context";


export function RequireAuth(props: any) {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();

    if(!isAuthenticated) {
        return <Navigate to="/" state={{from: location.pathname}} />
    }
    
    return props.children;
}