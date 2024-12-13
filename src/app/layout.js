"use client";
import "@/styles/global.css";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Giros Bol</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-gray-100">
                <AuthProvider>
                    <Header />
                    <main>{children}</main>
                    <footer className="bg-morado text-white text-center py-4 text-xs md:text-base">
                        &copy; 2024 Giros Bol. Todos los derechos reservados.
                    </footer>
                </AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;
