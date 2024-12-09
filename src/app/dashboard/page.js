"use client";

import { useAuth } from "../../context/AuthContext";
import Link from "next/link";

const DashboardPage = () => {
    const { user } = useAuth();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p className="mb-4">Bienvenido, {user?.name} ({user?.role}).</p>
            <nav className="mb-8">
                <Link href="/dashboard/remesas">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4">
                        Remesas
                    </button>
                </Link>
                {user.role === "admin" && (
                    <Link href="/dashboard/admin-tools">
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                            Herramientas de Administración
                        </button>
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default DashboardPage;
