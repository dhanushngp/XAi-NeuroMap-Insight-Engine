import { useState } from "react";
import ParameterInput from "./ParameterInput";

function ParameterPanel(props) {
    const [learningRate, setRate] = useState(0.01);
    const [epochs, setEpochs] = useState(100);
    const [neurons, setNeurons] = useState(10);
    const [k, setK] = useState(3);
    return (
        <div>
            <h2>{props.title}</h2>
            {props.algorithm !== "KNN" && (
                <ParameterInput
                    type="number"
                    label="LearningRate"
                    value={learningRate}
                    onChange={(event) => setRate(Number(event.target.value))}
                />
            )}
            {props.algorithm !== "KNN" && (
                <ParameterInput
                    label="Epochs"
                    value={epochs}
                    onChange={(event) => setEpochs(Number(event.target.value))}
                />
            )}
            {props.algorithm === "Neural Network" && (
                <ParameterInput
                    label="Neurons"
                    value={neurons}
                    onChange={(event) => setNeurons(Number(event.target.value))}
                />
            )}
            {props.algorithm === "KNN" && (
                <div>
                    <p>K value: {k}</p>
                    <input
                        label="K value"
                        value={k}
                        onChange={(event) => setK(Number(event.target.value))}
                    />
                </div>
            )}
        </div>
    );
}

export default ParameterPanel;