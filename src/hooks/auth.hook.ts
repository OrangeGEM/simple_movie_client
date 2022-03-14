import { useCallback, useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "../assets/context/auth.context";
import { useHttp } from "./http.hook"

export const useAuth = () => {
    const { request } = useHttp();
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = useCallback((token: string | null) => {
        setToken(token);
        setIsAuthenticated(true);
    }, [])

    const logout = useCallback(() => {
        setToken('')
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }, [])

    useLayoutEffect(() => {
        async function verifyUser() {
            try {
                const localAccessToken = localStorage.getItem('token');
                console.log(localAccessToken);
                if (localAccessToken) {
                    const data = await request(process.env.REACT_APP_GET_USER_URL, "GET", {}, {
                        Authorization: localAccessToken
                    })

                    if (data) {
                        login(localAccessToken);
                    } else {
                        logout();
                    }
                } else {
                    return null;
                }
            } catch (e) {
                console.log(e);
                throw e;
            }
        }
        verifyUser();
    }, [login])

    return { login, logout, token, isAuthenticated }
}