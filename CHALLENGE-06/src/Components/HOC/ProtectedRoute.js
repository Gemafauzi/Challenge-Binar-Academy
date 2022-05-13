import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const user = useSelector((store) => store.user.data);

	// jika user tidak login kembalikan
	if (user !== null) {
		return <Outlet />;
	} // jika login maka arahkan ke tujuan
	else {
		return <Navigate to="/login" />;
	}
};

export default ProtectedRoute;
