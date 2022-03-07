import { createContext } from 'react'
import { isVoidExpression } from 'typescript'

function noop(obj: any) {}

export const AuthContext = createContext({
    token: <null | string>null,
    login: noop,
    logout: noop,
    isAuthenticated: false
})

