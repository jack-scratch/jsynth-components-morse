import React from "react";
import TextInput from "./periph/TextInput";
import Light from "./periph/Light";
import {
	Toggle
} from "./ctrl/Btn";
import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

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

function App() {
  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Morse />
		</div>
  );
}

export default App;
