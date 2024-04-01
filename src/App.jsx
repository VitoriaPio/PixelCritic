import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header";
import Carrossel from "./components/carousel/carosel";
import Cards from "./components/cards/cards";

function App() {
	return (
		//layout da pag
		<section
			style={{
				backgroundColor: "black",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Header></Header>
			<Carrossel></Carrossel>
			<div style={{ display: "flex", gap: 4}}>
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
				<Cards></Cards>
			</div>
		</section>
	);
}

export default App;
