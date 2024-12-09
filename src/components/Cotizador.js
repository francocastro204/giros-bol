"use client";

import { useState } from "react";
import { constants } from "@/constants";

const Cotizador = () => {
    const [nombreRemitente, setNombreRemitente] = useState("");
    const [montoCLP, setMontoCLP] = useState("");
    const tasaBase = constants.tasaBase;

    // Manejar cambio en el campo Monto a Enviar
    const handleMontoChange = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // Solo números
        if (value.length <= 50) {
            setMontoCLP(value);
        }
    };

    // Formatear número con separadores de miles
    const formatMiles = (num) => {
        return new Intl.NumberFormat("es-CL").format(num);
    };

    // Calcular el monto en BOB
    const montoBOB = montoCLP ? (parseFloat(montoCLP) * tasaBase).toFixed(2) : "0.00";

    // Enviar a WhatsApp
    const handleSendToWhatsApp = () => {
        // const phoneNumber = "+56945332933"; // Cambia esto al número correspondiente
        const phoneNumber = "+56985327289"; // Cambia esto al número correspondiente
        // const message = `Hola, mi nombre es ${nombreRemitente}. Quiero enviar ${formatMiles(montoCLP)} CLP y recibir ${formatMiles(montoBOB)} BOB en Bolivia. Espero su confirmación para continuar con la transacción. ¡Gracias!`;
        const message = `Hola, mi nombre es *${nombreRemitente}*. Quiero enviar *${formatMiles(montoCLP)} CLP* y recibir *${formatMiles(montoBOB)} BOB* en Bolivia. Espero su confirmación para continuar con la transacción. ¡Gracias!`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Renderizar las columnas de información
    const renderInformacion = () => {
        const dataInformacion = [
            { title: "Cotiza", description: "Define el monto de envío en el cotizador y contáctanos por WhatsApp." },
            { title: "Transfiere", description: "Haz tu depósito en nuestras cuentas." },
            { title: "Envía la información", description: "Envíanos comprobante de pago y datos de la cuenta destino." },
            { title: "Recibe", description: "El dinero estará en tu cuenta en minutos." },
        ];

        return (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 px-6">
                {dataInformacion.map((item, i) => (
                    <div key={i} className="text-center pt-6 pb-6">
                        <h2 className="text-5xl font-extrabold text-primary italic opacity-60">{i + 1}</h2>
                        <h3 className="text-lg font-bold pt-4">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id="cotiza" className="py-12 bg-gray-50 columns-2">
            {/* Renderizar las columnas de información */}
            {renderInformacion()}

            {/* Formulario */}
            <div className="mt-8 max-w-lg mx-auto bg-white p-6 shadow-md rounded">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSendToWhatsApp();
                    }}
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
                            placeholder="Ingresa el monto en CLP"
                            className="w-full p-2 border rounded"
                            required
                        />
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
                        Enviar por WhatsApp
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Cotizador;
