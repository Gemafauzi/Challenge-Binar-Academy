import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

let initialState = null;

try {
	const token = localStorage.getItem("carShopAccessToken");
	const userData = jwtDecode(token);
	initialState = userData;
} catch {}

const userSlice = createSlice({
	name: "user",
	initialState: {
		data: initialState,
	},
	reducers: {
		// dipakai saat user login dan register
		addUser: (state, action) => {
			state.data = { ...action.payload.userData };
		},
		// logout fitur

		removeUser: (state) => {
			state.data = null;
		},
	},
});

export default userSlice;
