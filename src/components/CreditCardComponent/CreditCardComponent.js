import React, { useState } from "react";
import { Button } from "primereact/button";
function CreditCardComponent(props) {
	const [showCard, setShowCard] = useState(false);
	return showCard ? (
		<div className="w-80 h-52 bg-gradient-to-r from-red-900 to-red-800 rounded-3xl transition duration-300 shadow-xl hover:ring-2 hover:ring-blue-500">
			<div className="absolute pl-3 top-4 flex items-center justify-between w-80">
				<div>
					<div className="text-white text-sm font-light">Current Balance</div>
					<div className="text-white text-2xl font-bold pt-1 tracking-wider">
						{props.currency} {props.balance}
					</div>
				</div>

				<div className={`bg-${props.type || "bg-mastercard"} mr-3`}></div>
			</div>
			<div className="absolute pl-3 bottom-16 flex">
				<div className="text-white text-xl font-light">{props.expiry}</div>
				<div className="text-white text-xl ml-2 font-light">{props.cvv}</div>
			</div>
			<div className="absolute text-white text-2xl bottom-4 pl-3">{props.cardNumber}</div>
			<div className="flex justify-end h-52 items-center">
				<Button onClick={() => setShowCard(false)} icon="pi pi-eye" />
			</div>
		</div>
	) : (
		<div className="w-80 h-52 bg-gradient-to-r from-red-900 to-red-800 rounded-3xl transition duration-300 shadow-xl hover:ring-2 hover:ring-blue-500">
			<div className="flex justify-center h-52 items-center">
				<Button
					className="p-button-raised p-button-danger"
					onClick={() => setShowCard(true)}
					icon="pi pi-eye-slash"
				/>
			</div>
		</div>
	);
}

export default CreditCardComponent;
