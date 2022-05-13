import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
	const user = useSelector((store) => store.user.data);

	// jika user  login sebagai admin maka
	if (user.isAdmin === true) {
		return <Navigate to="/admin" />;
	} // jika bukan admin maka akan dikembalikan
	else {
		return <Outlet />;
	}
};

export default AdminRoute;
