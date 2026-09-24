import ParameterPanel from "./components/ParameterPanel";
import { useState } from "react";

function App() {
    const [algorithm, setAlgorithm] = useState("Single Linear Regression");
    const algorithms = [
        {
            name: "Single Linear Regression",
            category: "Regression"
        },
        {
            name: "Multiple Linear Regression",
            category: "Regression"
        },
        {
            name: "Multivariate Linear Regression",
            category: "Regression"
        },
        {
            name: "Logistic Regression",
            category: "Classification"
        },
        {
            name: "KNN",
            category: "Classification"
        },
        {
            name: "Neural Network",
            category: "Deep Learning"
        }
    ];
    const selectedAlgorithm = algorithms.find(
        (item) => item.name === algorithm
    );
    return (
        <div>
            <h2>Selected Algorithm: {algorithm}</h2>
            <p>Category: {selectedAlgorithm.category}</p>

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