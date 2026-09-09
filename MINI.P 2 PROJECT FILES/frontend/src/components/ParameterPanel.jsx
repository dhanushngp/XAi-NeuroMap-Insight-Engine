import { useState } from "react";

function ParameterPanel(props) {
    const [learningRate, setRate] = useState(0.01);
    const [epochs, setEpochs] = useState(100);
    const [neurons, setNeurons] = useState(10);
    const [k, setK] = useState(3);
    return (

        <div>
        <h2>{props.title}</h2>
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
        <br>
        </br>


        {props.algorithm === "KNN" && (
            <div>
                <p> K :</p>
                <input type="number" value={k} onChange={(event) => setK(Number(event.target.value))}></input>
                <p>KNN selected 🧠</p>
                <p>K value: {k}</p>
            </div>
        )}
        </div>

    );
}

export default ParameterPanel;