import React from "react";
import TextInput from "./periph/TextInput";
import Light from "./periph/Light";
import {
	Toggle
} from "./ctrl/Btn";

class Morse extends React.Component {
	constructor() {
		super();

		this.osc = window.ctx.createOscillator();
		this.osc.frequency.value = 500;
	}

	render() {
		return (
			<div class="cont">
				<div class="head">
					<h1>Morse Code</h1>
				</div>
				<div class="body">
					<Light />
				</div>
				<div class="body">
					<TextInput />
				</div>
				<div class="body">
					<Toggle />
				</div>
			</div>
		);
	}
}

export default Morse;
