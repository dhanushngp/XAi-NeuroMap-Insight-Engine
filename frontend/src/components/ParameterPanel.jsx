import { useState } from "react";
import ParameterInput from "./ParameterInput";

function ParameterPanel(props) {

    const [learningRate, setLearningRate] = useState(0.01);
    const [epochs, setEpochs] = useState(100);
    const [neurons, setNeurons] = useState(4);
    const [k, setK] = useState(3);

    return (
        <div>

            <h2>{props.title}</h2>

            {props.algorithm !== "KNN" && (
                <ParameterInput
                    label="Learning Rate"
                    value={learningRate}
                    onChange={(event) =>
                        setLearningRate(
                            Number(event.target.value)
                        )
                    }
                />
            )}

            {props.algorithm !== "KNN" && (
                <ParameterInput
                    label="Epochs"
                    value={epochs}
                    onChange={(event) =>
                        setEpochs(
                            Number(event.target.value)
                        )
                    }
                />
            )}

            {props.algorithm === "Neural Network" && (
                <ParameterInput
                    label="Neurons"
                    value={neurons}
                    onChange={(event) =>
                        setNeurons(
                            Number(event.target.value)
                        )
                    }
                />
            )}

            {props.algorithm === "KNN" && (
                <ParameterInput
                    label="K"
                    value={k}
                    onChange={(event) =>
                        setK(
                            Number(event.target.value)
                        )
                    }
                />
            )}

        </div>
    );
}

export default ParameterPanel;