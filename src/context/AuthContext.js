"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const users = [
        {
            email: "dev.francoscm@gmail.com",
            name: "Franco Castro",
            password: "girosbol",
            role: "admin",
        },
        {
            email: "francocastro204@gmail.com",
            name: "Franco Castro",
            password: "girosbol",
            role: "creator",
        },
    ];

    const login = (email, password) => {
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("user", JSON.stringify(foundUser));
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/");
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
