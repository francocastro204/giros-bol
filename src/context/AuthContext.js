"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    // Usuarios permitidos
    const users = [
        {
            email: "dev.francoscm@gmail.com",
            name: "Francisco Castro",
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

    // Manejar inicio de sesión
    const login = (email, password) => {
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );

        if (foundUser) {
            setUser(foundUser);
            localStorage.setItem("user", JSON.stringify(foundUser));
            return true; // Login exitoso
        } else {
            return false; // Credenciales incorrectas
        }
    };

    // Manejar cierre de sesión
    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/"); // Redirige al Landing Page
    };

    // Cargar el usuario desde localStorage al iniciar la app
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
