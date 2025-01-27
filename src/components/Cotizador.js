"use client";

import { useState } from "react";
import ReactCountryFlag from 'react-country-flag';
import { constants } from "@/constants";

const Cotizador = () => {
    const [nombreRemitente, setNombreRemitente] = useState("");
    const [telefono, setTelefono] = useState("");
    const [monto, setMonto] = useState("");
    const [monedaEnvio, setMonedaEnvio] = useState("CLP");
    const [numeroOperacion, setNumeroOperacion] = useState(1000);

    const banderaCL = <ReactCountryFlag countryCode="CL" className="emojiFlag" style={{ fontSize: "1.5em" }} />;
    const banderaBO = <ReactCountryFlag countryCode="BO" className="emojiFlag" style={{ fontSize: "1.5em" }} />;

    const handleMonedaChange = (e) => {
        setMonedaEnvio(e.target.value);
        setMonto(""); // Reiniciar monto
    };

    const handleMontoChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, "");
        setMonto(rawValue);
    };

    const formatMiles = (num) => {
        return new Intl.NumberFormat("es-CL").format(num);
    };

    const calculateTasaBase = (monto) => {
        for (let i = 0; i < constants.tasas.length; i++) {
            if (monto <= constants.tasas[i].max) {
                return constants.tasas[i].rate;
            }
        }
        return constants.tasas[constants.tasas.length - 1].rate;
    };

    const calculateTasaBaseBOB = (monto) => {
        for (let i = 0; i < constants.tasasBOB.length; i++) {
            if (monto <= constants.tasasBOB[i].max) {
                return constants.tasasBOB[i].rate;
            }
        }
        return constants.tasas[constants.tasas.length - 1].rate;
    };

    let montoRecibir = "0.00";
    if (monto) {
        if (monedaEnvio === "CLP") {
            montoRecibir = (parseFloat(monto) * calculateTasaBase(parseInt(monto, 10))).toFixed(2);
        } else {
            montoRecibir = (parseFloat(monto) / calculateTasaBaseBOB(parseInt(monto, 10))).toFixed(0);
        }
    }

    const handleSendToWhatsApp = () => {
        const phoneNumber = constants.whatsappNumber;
        const mensajeCambio = monedaEnvio === "CLP" ? "Chile a Bolivia" : "Bolivia a Chile";
        const message = `Hola, mi nombre es *${nombreRemitente}*.\n` +
                        `Mi Número de contacto telefónico es *${telefono}*.\n` +
                        `Quiero enviar *$${formatMiles(monto)} ${monedaEnvio}*.\n` +
                        `Quiero recibir *$${formatMiles(montoRecibir)} ${monedaEnvio === "CLP" ? "BOB" : "CLP"}*.\n` +
                        `Esto es un envío de dinero de ${mensajeCambio}.\n\n` +
                        `Número de operación *#${numeroOperacion}*.\n` +
                        `Espero su confirmación para continuar con la transacción. ¡Gracias!`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const isButtonDisabled = !(nombreRemitente.trim() && telefono.trim() && monto);

    return (
        <div className="cotizador mt-6 mb-20 max-w-lg mx-auto p-6 shadow-md rounded bg-white">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSendToWhatsApp();
                    setNumeroOperacion((prev) => prev + 1);
                }}
                className="text-start"
            >
                <div className="mb-4">
                    <label htmlFor="nombreRemitente" className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Tu Nombre
                    </label>
                    <input
                        id="nombreRemitente"
                        type="text"
                        value={nombreRemitente}
                        onChange={(e) => setNombreRemitente(e.target.value)}
                        placeholder="Indica tu nombre"
                        className="w-full p-2 border rounded text-xs md:text-base text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefono" className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Tu Número de Teléfono
                    </label>
                    <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ejemplo: +56912345678"
                        className="w-full p-2 border rounded text-xs md:text-base text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Selecciona tu tipo de Cambio
                    </label>
                    <select
                        value={monedaEnvio}
                        onChange={handleMonedaChange}
                        className="w-full p-2 border rounded text-xs md:text-base text-gray-700"
                    >
                        <option value="CLP">{banderaCL} CLP</option>
                        <option value="BOB">{banderaBO} BOB</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Monto a Enviar
                    </label>
                    <div className="relative">
                        <span className="absolute left-2 top-2">$</span>
                        <input
                            type="text"
                            value={formatMiles(monto)}
                            onChange={handleMontoChange}
                            placeholder="Ejemplo: $100.000"
                            className="w-full p-2 pl-6 border rounded text-xs md:text-base text-gray-700"
                            maxLength={10}
                        />
                        <span className="absolute right-2 top-2">
                            {monedaEnvio === "CLP" ? banderaCL : banderaBO} {monedaEnvio}
                        </span>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Monto a Recibir
                    </label>
                    <div className="relative">
                        <span className="absolute left-2 top-2">$</span>
                        <input
                            type="text"
                            value={formatMiles(montoRecibir)}
                            readOnly
                            className="w-full p-2 pl-6 border bg-gray-100 rounded text-xs md:text-base text-gray-700"
                            maxLength={10}
                        />
                        <span className="absolute right-2 top-2">
                            {monedaEnvio === "CLP" ? banderaBO : banderaCL} {monedaEnvio === "CLP" ? "BOB" : "CLP"}
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    disabled={isButtonDisabled}
                    className={`w-full py-2 px-4 rounded text-xs md:text-base ${
                        isButtonDisabled
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-primary text-white hover:bg-green-700"
                    }`}
                >
                    Continuar en WhatsApp
                </button>
                <p className="mt-4 italic text-gray-700 text-xs md:text-sm">
                    El valor de la tasa es referencial y puede tener pequeñas variaciones. Sujeto a negocio. Esta simulación no garantiza la tasa final.
                </p>
            </form>
        </div>
    );
};

export default Cotizador;
