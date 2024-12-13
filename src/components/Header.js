"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const logoSrc = "/images/logo-giros-bol-transparent.png";
    const fondoTransparente = { backgroundColor: 'rgba(255, 255, 255, 0.8)' };

    return (
        <header className="text-primary p-4 fixed top-0 left-0 w-full z-50 shadow-lg" style={fondoTransparente}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <Image
                        src={logoSrc}
                        alt="Giros Bol Logo"
                        width={170}
                        height={100}
                    />
                </div>

                {/* Navegación */}
                <nav className="flex items-center space-x-6 justify-center">
                    <a href="#cotiza" className="hover:underline ">
                        Cotiza
                    </a>
                    <a href="#nosotros" className="hover:underline ">
                        Nosotros
                    </a>
                    <Link href="/login" className="hidden">
                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-green-600">
                            Iniciar Sesión
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
