"use client";

import { useState } from "react";
import Header from "../components/Header";

// Hero Section
const Hero = () => {
    return (
        <section id="top" className="pt-24 pb-12 text-center">
            <h2 className="text-3xl font-bold">Envía dinero a Bolivia y más allá</h2>
            <p className="mt-4 text-lg">Con Giros Bol, tu dinero llega rápido y seguro.</p>
        </section>
    );
};

// Nosotros Section
const Nosotros = () => {
    return (
        <section id="nosotros" className="py-12 bg-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?</h2>
            <p>
                Somos una empresa dedicada a facilitar el envío de dinero desde Chile a Bolivia
                y próximamente a otros países. Garantizamos rapidez, seguridad y las mejores tasas
                del mercado.
            </p>
        </section>
    );
};

// Cotiza Section
const Cotiza = () => {
    const [nombreRemitente, setNombreRemitente] = useState("");
    const [montoCLP, setMontoCLP] = useState("");

    const handleSendToWhatsApp = () => {
        const phoneNumber = "+56945332933";
        const message = `Hola, mi nombre es ${nombreRemitente} y quiero enviar ${montoCLP} CLP.`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <section id="cotiza" className="py-12 bg-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center">Cotiza tu envío</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSendToWhatsApp();
                }}
                className="max-w-md mx-auto p-6 bg-white shadow rounded"
            >
                <div className="mb-4">
                    <label className="block font-bold mb-2">Nombre:</label>
                    <input
                        type="text"
                        value={nombreRemitente}
                        onChange={(e) => setNombreRemitente(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2">Monto a Enviar (CLP):</label>
                    <input
                        type="number"
                        value={montoCLP}
                        onChange={(e) => setMontoCLP(e.target.value)}
                        placeholder="Ej: 100000"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Enviar por WhatsApp
                </button>
            </form>
        </section>
    );
};

// Contacto Section
const Contacto = () => {
    return (
        <section id="contacto" className="py-12 bg-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>
            <p>Para más información, contáctanos en el WhatsApp: +56945332933</p>
            <p className="mt-2">O visítanos en nuestra sucursal en Santiago de Chile.</p>
        </section>
    );
};

// Landing Page
const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            {/* Secciones */}
            <Hero />
            <Nosotros />
            <Cotiza />
            <Contacto />
        </div>
    );
};

export default LandingPage;
