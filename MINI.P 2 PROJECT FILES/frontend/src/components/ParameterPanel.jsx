import { useState } from "react";

function ParameterPanel() {
    const [learningRate, setRate] = useState(0.01);
    const [epochs, setEpochs] = useState(100);
    const [neurons, setNeurons] = useState(10);
    return (
        <div>
        <p>Learning Rate: {learningRate}</p>
        <input
        type="number"
        value={learningRate}
        onChange={(event) => setRate(Number(event.target.value))}
        />

        <p>Epochs: {epochs}</p>

        <input
        type="number"
        value={epochs}
        onChange={(event) => setEpochs(Number(event.target.value))}
        />

        <p>Neurons: {neurons}</p>

        <input
        type="number"
        value={neurons}
        onChange={(event) => setNeurons(Number(event.target.value))}
        />
        </div>
    );
}

export default ParameterPanel;