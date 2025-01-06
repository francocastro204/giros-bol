"use client";

import { useState } from "react";
import { constants } from "@/constants";

const Cotizador = () => {
    const [nombreRemitente, setNombreRemitente] = useState("");
    const [montoCLP, setMontoCLP] = useState("");

    // Manejar cambio en el campo Monto a Enviar
    const handleMontoChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
        const numericValue = parseInt(rawValue, 10);

        if (isNaN(numericValue)) {
            setMontoCLP("");
        } else if (numericValue > constants.montoClpMaximo) {
            setMontoCLP("2000000");
        } else {
            setMontoCLP(rawValue);
        }
    };

    // Formatear número con separadores de miles
    const formatMiles = (num) => {
        return new Intl.NumberFormat("es-CL").format(num);
    };

    // Calcular la tasa dinámica según el monto ingresado
    const calculateTasaBase = (monto) => {
        for (let i = 0; i < constants.tasas.length; i++) {
            if (monto <= constants.tasas[i].max) {
                return constants.tasas[i].rate;
            }
        }
        return constants.tasas[constants.tasas.length - 1].rate;
    };

    // Calcular el monto en BOB
    const montoBOB = montoCLP
        ? (parseFloat(montoCLP) * calculateTasaBase(parseInt(montoCLP, 10))).toFixed(2)
        : "0.00";

    // Enviar a WhatsApp
    const handleSendToWhatsApp = () => {
        const phoneNumber = constants.whatsappNumber;
        const message = `Hola, mi nombre es *${nombreRemitente}*. Quiero enviar *$${formatMiles(montoCLP)} CLP* y recibir *$${formatMiles(montoBOB)} BOB* en Bolivia. Espero su confirmación para continuar con la transacción. ¡Gracias!`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Verificar si el botón debe estar habilitado
    const isButtonDisabled = !(nombreRemitente.trim() && montoCLP && parseInt(montoCLP, 10) >= constants.montoClpMinimo);

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
                    <label htmlFor="nombreRemitente" className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Nombre
                    </label>
                    <input
                        id="nombreRemitente"
                        type="text"
                        value={nombreRemitente}
                        onChange={(e) => setNombreRemitente(e.target.value)}
                        placeholder="Indicanos tu nombre"
                        className="w-full p-2 border rounded text-xs md:text-base text-gray-700"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="montoCLP" className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Monto a Enviar (CLP):
                    </label>
                    <input
                        id="montoCLP"
                        type="text"
                        value={formatMiles(montoCLP)}
                        onChange={handleMontoChange}
                        placeholder="Ejemplo $100.000"
                        className="w-full p-2 border rounded text-xs md:text-base text-gray-700"
                        required
                    />
                    {montoCLP && parseInt(montoCLP, 10) < constants.montoClpMinimo && (
                        <p className="text-red-600 text-xs md:text-base">El monto mínimo es de $10.000 CLP.</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="montoBOB" className="block font-bold mb-2 text-xs md:text-base text-gray-700">
                        Monto a Recibir (BOB):
                    </label>
                    <input
                        id="montoBOB"
                        type="text"
                        value={`${formatMiles(montoBOB)} BOB`}
                        readOnly
                        className="w-full p-2 border bg-gray-100 rounded text-xs md:text-base text-gray-700"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isButtonDisabled}
                    data-gtm-id="continuar-whatsapp"
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
