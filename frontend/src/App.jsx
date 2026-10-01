// import { useState } from "react";
// import "./App.css";
// import NeuralNetwork3D from "./components/NeuralNetwork3D";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import algorithms from "./data/algorithms";

// function App() {

//     const [algorithm, setAlgorithm] = useState(
//         "Single Linear Regression"
//     );

//     const selectedAlgorithm = algorithms.find(
//         (item) => item.name === algorithm
//     );

//     return (
//         <div className="app">

//             <div className="sidebar">
//                 <Sidebar
//                     algorithm={algorithm}
//                     setAlgorithm={setAlgorithm}
//                 />
//             </div>

//             <div className="main">
//                 <Dashboard
//                     algorithm={selectedAlgorithm}
//                 />

//                 <NeuralNetwork3D />
//             </div>

//             <div className ="app">
//                 <NeuronScene />
//             <div>

//         </div>
//     );
// }

// export default App;

import "./App.css";
import NeuronScene from "./components/NeuronScene";

function App() {
    return (
        <div className="app">
            <NeuronScene />
        </div>
    );
}

export default App;