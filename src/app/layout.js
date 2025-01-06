"use client";
import React, { useEffect } from 'react';
import { GoogleAnalytics } from "nextjs-google-analytics";
import "@/styles/global.css";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/Header";
import { initGTM } from "../../gtm";
import { constants } from "@/constants";

const RootLayout = ({ children }) => {
    const currentYear = new Date().getFullYear();
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
    const TitlePage = `${constants.nombreEmpresa} - ${constants.fraseEmpresa}`;
    const infoCopyRight = `${currentYear} ${TitlePage}. ${constants.copyRight}`;
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": constants.nombreEmpresa,
        "description": constants.descripcionEmpresa,
        "url": constants.urlEmpresa,
        "logo": constants.logoEmpresa,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": constants.oficinaCopiapo,
            "addressLocality": "Copiapó",
            "addressRegion": "Atacama",
            "postalCode": "1530000",
            "addressCountry": "CL"
        },
        "telephone": constants.whatsappNumber,
        "email": constants.corporateEmail,
        "sameAs": [
            "https://www.facebook.com/GirosBol", // Actualiza con tus redes sociales reales
            "https://www.instagram.com/GirosBol"
        ],
        "areaServed": ["Bolivia", "Chile"],
        "currenciesAccepted": "CLP, BOB",
        "paymentAccepted": "Transferencia bancaria, Criptomonedas (USDT)",
        "priceRange": "$"
    };

    useEffect(() => {
        initGTM(); // Inicializa Google Tag Manager
    }, []);

    return (
        <html lang="es">
            <head>
                <title>{TitlePage}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content={constants.descripcionEmpresa}
                />
                <meta
                    name="keywords"
                    content="envío de dinero, Bolivia, remesas, Giros Bol, enviar dinero a Bolivia, servicios financieros seguros"
                />
                <meta name="author" content="Giros Bol" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
                {/* Datos estructurados en JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <meta property="og:title" content={TitlePage} />
                <meta property="og:description" content={constants.descripcionEmpresa} />
                <meta property="og:image" content={constants.logoEmpresa} />
                <meta property="og:url" content={constants.urlEmpresa} />
                <meta property="og:type" content="website" />

            </head>
            <body className="bg-gray-100">
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                <AuthProvider>
                    {/* Google Analytics */}
                    <GoogleAnalytics trackPageViews />
                    <Header />
                    <main>{children}</main>
                    <footer className="bg-morado text-white text-center py-4 text-xs md:text-base">
                        {infoCopyRight}
                    </footer>
                </AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;
