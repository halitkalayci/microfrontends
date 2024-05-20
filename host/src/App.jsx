import React, {useRef, useEffect} from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Counter from "remote/Counter";
import counterMounter from "vue_remote/counterMounter";

const App = () => {
	const ref = useRef(null);

	useEffect(() => {
		counterMounter(ref.current);
	}, []);

	return (
		<div className="mt-10 text-3xl mx-auto max-w-6xl">
			<div className="">Name: host</div>
			<div>Framework: react</div>
			<div>Language: JavaScript</div>
			<div>CSS: Tailwind</div>
			<Counter />
			<div ref={ref}></div>
		</div>
	);
};
ReactDOM.render(<App />, document.getElementById("app"));
