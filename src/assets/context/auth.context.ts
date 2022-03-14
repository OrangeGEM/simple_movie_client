import { createContext } from 'react'

function noop(obj: any) {}

export const AuthContext = createContext({
    token: <null | string>null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})

