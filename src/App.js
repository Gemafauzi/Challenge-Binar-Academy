import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import axios from "axios";
import { useDispatch } from "react-redux";
import userSlice from "./Components/Challenge/store/userSlice";
import ProtectedRoute from "./Components/HOC/ProtectedRoute";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		try {
			const token = localStorage.getItem("carShopAccessToken");
			const userData = jwtDecode(token);

			axios.get(`http://localhost:4000/users/${userData.sub}`).then((res) => {
				dispatch(userSlice.actions.addUser({ userData: res.data }));
			});
		} catch {}
	}, []);

	return (
		<Routes>
			{/* Public */}
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{/* Protected*/}
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/admin" element={<Admin />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/user" element={<User />} />
			</Route>
		</Routes>
	);
}

export default App;
