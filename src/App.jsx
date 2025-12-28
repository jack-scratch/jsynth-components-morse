import React from "react";
import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

class Morse extends React.Component {
	render() {
		return (
			<div class="cont">
				<div class="cont">
					<h1>Morse Code</h1>
				</div>
				<div class="cont">
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
