"use client";

import { useState } from "react";

const CreateRemesaPage = () => {
    const [destinatario, setDestinatario] = useState("");
    const [monto, setMonto] = useState("");

    const handleCreateRemesa = (e) => {
        e.preventDefault();
        // Lógica para enviar los datos de la remesa (puedes conectar con una API aquí)
        alert(`Remesa creada para ${destinatario} con un monto de ${monto} CLP.`);
        setDestinatario("");
        setMonto("");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Crear Nueva Remesa</h1>
            <form onSubmit={handleCreateRemesa} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="destinatario" className="block font-bold mb-2">
                        Destinatario:
                    </label>
                    <input
                        type="text"
                        id="destinatario"
                        value={destinatario}
                        onChange={(e) => setDestinatario(e.target.value)}
                        placeholder="Nombre del destinatario"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="monto" className="block font-bold mb-2">
                        Monto (CLP):
                    </label>
                    <input
                        type="number"
                        id="monto"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        placeholder="Ej: 100000"
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Crear Remesa
                </button>
            </form>
        </div>
    );
};

export default CreateRemesaPage;
