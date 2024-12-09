"use client";

import ProtectedRoute from "../../hoc/ProtectedRoute";

const DashboardLayout = ({ children }) => {
    return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default DashboardLayout;
