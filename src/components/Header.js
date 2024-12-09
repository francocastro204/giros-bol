"use client";

import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold">
                    <a href="#top">Giros Bol</a>
                </h1>

                {/* Links de navegación */}
                <nav className="space-x-4">
                    <a href="#nosotros" className="hover:underline">
                        Nosotros
                    </a>
                    <a href="#cotiza" className="hover:underline">
                        Cotiza
                    </a>
                    <a href="#contacto" className="hover:underline">
                        Contacto
                    </a>
                    <Link href="/login">
                        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                            Iniciar Sesión
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
