import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Neuron() {

    const neuronRef = useRef();

    useFrame(() => {
        neuronRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={neuronRef}>
            <sphereGeometry args={[0.5, 32, 32]} />

            <meshStandardMaterial
                color="#00ffff"
                wireframe={true}
            />
        </mesh>
    );
}

export default Neuron;