import axios from 'axios'
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('currentUser') || null))

    const login = async (userData) => {
        const res = await axios.post('https://btkss.onrender.com/api/auth/login', userData)
        setUser(res.data)
    }

    const logout = async () => {
        await axios.post('https://btkss.onrender.com/api/auth/logout')
        setUser(null)
    }

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(user))
    }, [user])

    return <UserContext.Provider value={{ login, logout, user }} >
        {children}
    </UserContext.Provider>
}