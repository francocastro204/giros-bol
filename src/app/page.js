"use client";

import Cotizador from "@/components/Cotizador";

// Hero Section
const Hero = () => {
    return (
        <section id="top" className="pt-24 pb-12 text-center">
            <h2 className="text-3xl font-bold">Envía dinero a Bolivia y más allá</h2>
            <p className="mt-4 text-lg">
                Con Giros Bol, tu dinero llega rápido y seguro.
            </p>
        </section>
    );
};

// Nosotros Section
const Nosotros = () => {
    return (
        <section id="nosotros" className="py-12 bg-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
            <div className="columns-2 pt-6">
                <p className="pt-6 pb-8">Imagen del local</p>
                <p className="pt-6">
                    GirosBol es una empresa líder en el mercado de giros y transferencias de
                    dinero en Bolivia. Nuestra misión es brindar servicios financieros
                    seguros, confiables y accesibles a nuestros clientes, permitiéndoles
                    enviar y recibir dinero de manera fácil y rápida.
                </p>
            </div>
        </section>
    );
};

// Contacto Section
const Contacto = () => {
    return (
        <section id="contacto" className="py-12 bg-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p>Para más información, contáctanos en el WhatsApp: +56945332933</p>
            <p className="mt-2">
                O visítanos en nuestra sucursal en Santiago de Chile.
            </p>
        </section>
    );
};

// Landing Page
const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 mt-6">
            {/* Secciones */}
            <Hero />
            <Cotizador />
            <Nosotros />
            <Contacto />
        </div>
    );
};

export default LandingPage;
