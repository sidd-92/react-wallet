import React from "react";
import "./App.css";
import { Menubar } from "primereact/menubar";
function App() {
	const items = [{ label: "File", icon: "pi pi-fw pi-file" }];
	return (
		<>
			<Menubar
				className="mymenubar"
				model={items}
				start={() => <div className="font-bold text-3xl text-violet-600">React - Wallet</div>}
			/>
			<div className="font-bold">Hello World</div>
		</>
	);
}

export default App;
