import React, {useState} from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div className="flex flex-col gap-3 items-center">
				<p>Count is {count}</p>
				<button
					className="bg-slate-500 py-2 px-4 rounded"
					onClick={() => setCount(count + 1)}
				>
					Increase
				</button>
				<button
					className="bg-red-500 py-2 px-4 rounded"
					onClick={() => setCount(count - 1)}
				>
					Decrease
				</button>
			</div>
		</div>
	);
}

export default Counter;
