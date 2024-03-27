import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import Carrossel from "./components/carousel/carosel";
function App() {
	return (
		//layout da pag
		<>
			<Header></Header>
			<Carrossel></Carrossel>
		</>
	);
}

export default App;
