import { Canvas } from "@react-three/fiber";
import Neuron from "./Neuron";

function NeuronScene() {
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <Neuron />
        </Canvas>
    );
}

export default NeuronScene;