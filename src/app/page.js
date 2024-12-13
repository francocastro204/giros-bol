"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cotizador from "@/components/Cotizador";
import { constants } from "@/constants";


// Hero Section
const Hero = () => {
    return (
        <section id="cotiza" className="pt-24 pb-24 text-center pl-4 pr-4" style={{ backgroundImage: 'url(/images/bg-santa-cruz-bolivia-giros-bol.jpg)', backgroundSize: 'scroll', backgroundPosition: 'center' }}>
            <h2 className="text-3xl md:text-4xl mt-20  font-bold text-white mb-20 hero-text">Envía dinero a Bolivia y más allá, de forma rápida, segura y confiable</h2>
            <Cotizador />
        </section>
    );
};
const ConoceGirosBol = () => {
    // Inicia AOS
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Duración del fade-in
    }, []);

    return (
        <section id="nosotros" className="bg-white py-16 text-center pl-4 pr-4">
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-libre-baskerville" data-aos="fade-up">
                Conoce Giros Bol
            </h2>

            {/* Mensaje de marca */}
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto mb-12" data-aos="fade-up">
                En GirosBol, entendemos que la familia es lo más importante. Por eso, nos
                esforzamos por brindar servicios financieros que te permitan cuidar y proteger
                a tus seres queridos, mientras valorizamos y recompensamos tu trabajo y esfuerzo.
                ¡Únete a nuestra comunidad y descubre por qué en GirosBol, tu trabajo vale más!
            </p>

            {/* Valores con iconos */}
            <div className="flex flex-col md:flex-row justify-center gap-10 mb-20 mt-20" data-aos="fade-up">
                <div className="text-center w-full md:w-auto">
                    <span className="text-4xl">🔒</span>
                    <p className="text-black font-bold">Confianza y Seguridad</p>
                </div>
                <div className="text-center w-full md:w-auto">
                    <span className="text-4xl">💡</span>
                    <p className="text-black font-bold">Innovación y Tecnología</p>
                </div>
                <div className="text-center w-full md:w-auto">
                    <span className="text-4xl">🤝</span>
                    <p className="text-black font-bold">Servicio al Cliente</p>
                </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto" data-aos="fade-up">
                {/* Misión */}
                <div className="text-center">
                    <h3 className="text-xl font-bold font-libre-baskerville mb-4">Nuestra Misión</h3>
                    <p className="text-gray-600">
                        Brindar servicios financieros seguros y accesibles, conectando familias y
                        asegurando tranquilidad en cada transacción.
                    </p>
                </div>

                {/* Visión */}
                <div className="text-center">
                    <h3 className="text-xl font-bold font-libre-baskerville mb-4">Nuestra Visión</h3>
                    <p className="text-gray-600 text-base">
                        Ser líderes en servicios de envío de dinero en Bolivia y más allá,
                        reconocidos por nuestra innovación y confianza.
                    </p>
                </div>
            </div>
        </section>
    );
};

const Contacto = () => {
    return (
        <section className="bg-white py-16 text-center pl-4 pr-4">
            {/* Título */}
            <h2 className="text-2xl font-bold mb-6 font-libre-baskerville text-morado">¡Estamos aquí para ti!</h2>

            {/* Dirección */}
            <p className=" text-gray-700 mb-4 text-base">
                {'Visita nuestra oficina ubicada en '}
                <strong>{constants.oficinaCopiapo}</strong>
            </p>

            {/* Teléfono */}
            <p className=" text-gray-700 mb-4 text-base">
                {'Llámanos o Escríbenos al WhatsApp al '}
                <a href={`tel:${constants.whatsappNumber}`} className="text-green-600 hover:underline">
                    {constants.whatsappNumber}
                </a>
            </p>

            {/* Correo */}
            <p className="text-base text-gray-700 mb-4">
                {'Mándanos un correo con tus dudas o consultas '}
                <a href={`mailto:${constants.corporateEmail}`} className="text-green-600 hover:underline">
                    {constants.corporateEmail}
                </a>
            </p>
        </section>
    );
};


// Landing Page
const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Secciones */}
            <Hero />
            <ConoceGirosBol />
            <Contacto />
        </div>
    );
};

export default LandingPage;
