"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const success = login(email, password);
        if (success) {
            router.push("/dashboard"); // Redirige al dashboard si el login es exitoso
        } else {
            setError("Correo o contraseña incorrectos."); // Muestra un mensaje de error
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-6 rounded shadow-md max-w-md w-full"
            >
                <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>
                {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-2">
                        Correo:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Correo"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-bold mb-2">
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
