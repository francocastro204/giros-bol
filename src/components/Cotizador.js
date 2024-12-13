"use client";

import { useState } from "react";
import { constants } from "@/constants";

const Cotizador = () => {
    const [nombreRemitente, setNombreRemitente] = useState("");
    const [montoCLP, setMontoCLP] = useState("");

    // Manejar cambio en el campo Monto a Enviar
    const handleMontoChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
        const numericValue = parseInt(rawValue, 10); // Convertir a número entero

        if (isNaN(numericValue)) {
            setMontoCLP(""); // Si no es un número, limpiar
        } else if (numericValue > 2000000) {
            setMontoCLP("2000000"); // Límite máximo
        } else {
            setMontoCLP(rawValue); // Actualizar valor
        }
    };

    // Formatear número con separadores de miles
    const formatMiles = (num) => {
        return new Intl.NumberFormat("es-CL").format(num);
    };

    // Calcular la tasa dinámica según el monto ingresado
    const calculateTasaBase = (monto) => {
        if (monto <= 99999) return 0.0100;
        if (monto <= 499999) return 0.0103;
        if (monto <= 999999) return 0.0104;
        return 0.0105; // Para montos hasta 2.000.000
    };

    // Calcular el monto en BOB
    const montoBOB = montoCLP
        ? (parseFloat(montoCLP) * calculateTasaBase(parseInt(montoCLP, 10))).toFixed(2)
        : "0.00";

    // Enviar a WhatsApp
    const handleSendToWhatsApp = () => {
        const phoneNumber = constants.whatsappNumber; // Número configurado
        const message = `Hola, mi nombre es *${nombreRemitente}*. Quiero enviar *${formatMiles(montoCLP)} CLP* y recibir *${formatMiles(montoBOB)} BOB* en Bolivia. Espero su confirmación para continuar con la transacción. ¡Gracias!`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="cotizador mt-6 mb-20 max-w-lg mx-auto p-6 shadow-md rounded bg-white">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSendToWhatsApp();
                }}
                className="text-start"
            >
                <div className="mb-4">
                    <label htmlFor="nombreRemitente" className="block font-bold mb-2">
                        Nombre del Remitente:
                    </label>
                    <input
                        id="nombreRemitente"
                        type="text"
                        value={nombreRemitente}
                        onChange={(e) => setNombreRemitente(e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="montoCLP" className="block font-bold mb-2">
                        Monto a Enviar (CLP):
                    </label>
                    <input
                        id="montoCLP"
                        type="text"
                        value={formatMiles(montoCLP)}
                        onChange={handleMontoChange}
                        placeholder="Ejemplo $100.000"
                        className="w-full p-2 border rounded"
                        required
                    />
                    {montoCLP && parseInt(montoCLP, 10) < 10000 && (
                        <p className="text-red-600 text-sm">El monto mínimo es de $10.000 CLP.</p>
                    )}
                    {montoCLP && parseInt(montoCLP, 10) > 2000000 && (
                        <p className="text-red-600 text-sm">El monto máximo es de $2.000.000 CLP.</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="montoBOB" className="block font-bold mb-2">
                        Monto a Recibir (BOB):
                    </label>
                    <input
                        id="montoBOB"
                        type="text"
                        value={`${formatMiles(montoBOB)} BOB`}
                        readOnly
                        className="w-full p-2 border bg-gray-100 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-green-700"
                >
                    Continuar en WhatsApp
                </button>
                <p className="mt-4 italic text-gray-700">
                    Con Giros Bol, tu dinero llega rápido y seguro.
                </p>
            </form>
        </div>
    );
};

export default Cotizador;