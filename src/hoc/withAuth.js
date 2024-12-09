"use client";

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
    const ProtectedComponent = (props) => {
        const { user } = useAuth();
        const router = useRouter();

        // Verifica si el usuario está autenticado
        useEffect(() => {
            if (!user) {
                router.push("/"); // Redirige al Landing Page si no está autenticado
            }
        }, [user, router]);

        // No renderiza nada mientras redirige
        if (!user) return null;

        // Renderiza el componente si el usuario está autenticado
        return <WrappedComponent {...props} />;
    };

    // Añadir un displayName para facilitar la depuración
    ProtectedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

    return ProtectedComponent;
};

export default withAuth;
