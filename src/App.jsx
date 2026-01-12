import React from "react";
import Morse from "./Morse";
import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

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
