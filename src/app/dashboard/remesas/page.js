"use client";

import { useAuth } from "../../context/AuthContext";

const RemesasPage = () => {
    const { user } = useAuth();

    const remesas = [
        { id: 1, destinatario: "Juan Pérez", monto: 50000, estado: "Enviado" },
        { id: 2, destinatario: "María López", monto: 75000, estado: "Pendiente" },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Listado de Remesas</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Destinatario</th>
                        <th className="border border-gray-300 px-4 py-2">Monto (CLP)</th>
                        <th className="border border-gray-300 px-4 py-2">Estado</th>
                        {user.role === "admin" && (
                            <>
                                <th className="border border-gray-300 px-4 py-2">Editar</th>
                                <th className="border border-gray-300 px-4 py-2">Eliminar</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {remesas.map((remesa) => (
                        <tr key={remesa.id}>
                            <td className="border border-gray-300 px-4 py-2">{remesa.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{remesa.destinatario}</td>
                            <td className="border border-gray-300 px-4 py-2">{remesa.monto}</td>
                            <td className="border border-gray-300 px-4 py-2">{remesa.estado}</td>
                            {user.role === "admin" && (
                                <>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                                            Editar
                                        </button>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                            Eliminar
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Crear Nueva Remesa
                </button>
            </div>
        </div>
    );
};

export default RemesasPage;
