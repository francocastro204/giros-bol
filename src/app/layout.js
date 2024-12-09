"use client";

import { AuthProvider } from "../context/AuthContext";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <AuthProvider>
                    <header className="bg-blue-600 text-white p-4">
                        <h1 className="text-xl font-bold">Giros Bol</h1>
                    </header>
                    <main>{children}</main>
                    <footer className="bg-blue-600 text-white text-center py-4">
                        &copy; 2024 Giros Bol. Todos los derechos reservados.
                    </footer>
                </AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;
