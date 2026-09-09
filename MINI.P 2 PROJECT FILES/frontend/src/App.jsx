import ParameterPanel from "./components/ParameterPanel";
import {useState} from "react";

function App(){
  const [algorithm, setAlgorithm] = useState("Linear Regression");
  return (
    <div> 
      <h2> Selected Algorithm : {algorithm}</h2>
      <ParameterPanel title="ML parameters" algorithm={algorithm}/>
      <select value={algorithm} onChange={(event) =>setAlgorithm(event.target.value)} >
        <option value="Single Linear Regression">
            Single Linear Regression
        </option>

        <option value="Multiple Linear Regression">
            Multiple Linear Regression
        </option>

        <option value="Multivariate Linear Regression">
            Multivariate Linear Regression
        </option>

        <option value="Logistic Regression">
            Logistic Regression
        </option>

        <option value="KNN">
            KNN
        </option>
      </select>
    </div>
  )
}

export default App;