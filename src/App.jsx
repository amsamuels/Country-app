import { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";

function App({}) {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Countries />}></Route>
				<Route path="/countries/:name" element={<Country />} />
			</Routes>
		</>
	);
}

export default App;
