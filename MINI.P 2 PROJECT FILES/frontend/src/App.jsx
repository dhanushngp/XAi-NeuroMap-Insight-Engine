import ParameterPanel from "./components/ParameterPanel";
import { useState } from "react";
import algorithms from "./data/algorithms";

function App() {
    const [algorithm, setAlgorithm] = useState("Single Linear Regression");
    const selectedAlgorithm = algorithms.find(
        (item) => item.name === algorithm
    );
    return (
        <div>
            <h2>Selected Algorithm: {algorithm}</h2>
            <p>category: {selectedAlgorithm.category}</p>
            <p>Description: {selectedAlgorithm.description}</p>

            <ParameterPanel
                title="ML parameters"
                algorithm={algorithm}
            />
            <select
                value={algorithm}
                onChange={(event) => setAlgorithm(event.target.value)}
            >
                {algorithms.map((algorithm) => (
                    <option
                        key={algorithm.name}
                        value={algorithm.name}
                    >
                        {algorithm.name}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default App;