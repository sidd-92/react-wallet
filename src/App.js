import React, { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import CreditCardComponent from "./components/CreditCardComponent/CreditCardComponent";

function App() {
	const [cards, setCards] = useState([
		{
			balance: "34,923",
			currency: "$",
			expiry: "09/24",
			cvv: "345",
			cardNumber: "2332 3345 8848 9938",
			type: "discover",
		},
		{
			balance: "14,123",
			currency: "Rs.",
			type: "mastercard",
			expiry: "10/34",
			cvv: "076",
			cardNumber: "2532 7345 0848 9338",
		},
	]);
	const [showDialog, setShowDialog] = useState(false);
	const [value, setValue] = useState("");
	const [showError, setShowError] = useState(false);
	const [cardNumberError, setCardNumberError] = useState("");
	const items = [{ label: "File", icon: "pi pi-fw pi-file" }];
	const detectCardType = (number) => {
		let formatNumber = number.toString().split("-").join("");
		var re = {
			electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
			maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
			dankort: /^(5019)\d+$/,
			unionpay: /^(62|88)\d+$/,
			visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
			mastercard: /^5[1-5][0-9]{14}$/,
			amex: /^3[47][0-9]{13}$/,
			diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
			discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
			jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
		};
		let type = {};
		for (var key in re) {
			if (re[key].test(formatNumber)) {
				type[number] = key;
			}
		}
		if (number in type) {
			console.log("KEY", key, formatNumber);
			setShowError(false);
			setCardNumberError("");
		} else {
			setShowError(true);
			setCardNumberError("Incorrect Card Number, please verify");
		}
	};
	return (
		<>
			<Menubar
				className="mymenubar"
				model={items}
				start={() => <div className="font-bold text-3xl text-violet-600">React - Wallet</div>}
			/>
			<div className="container sm:max-w-3xl mx-auto">
				<div className="text-4xl font-bold text-center mt-2">Cards</div>
				<Button onClick={() => setShowDialog(true)} label="Add New Card" icon="pi pi-plus" />
				<div className="flex flex-wrap justify-evenly">
					{cards.map((card) => (
						<div key={card.cvv} className="relative mt-8">
							<CreditCardComponent
								type={card.type}
								balance={card.balance}
								currency={card.currency}
								expiry={card.expiry}
								cvv={card.cvv}
								cardNumber={card.cardNumber}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
