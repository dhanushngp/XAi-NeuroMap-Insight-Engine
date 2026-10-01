import ParameterPanel from "./ParameterPanel";

function Dashboard(props) {

    return (
        <div>

            <h1>XAI-Neuromap Dashboard 🧠</h1>

            <h2>{props.algorithm.name}</h2>

            <p>
                Category: {props.algorithm.category}
            </p>

            <p>
                {props.algorithm.description}
            </p>

            <ParameterPanel
                title="ML Parameters ⚙️"
                algorithm={props.algorithm.name}
            />

            <div>
                <h2>Visualization 📊</h2>

                <p>
                    Model visualization will appear here.
                </p>
            </div>

            <div>
                <h2>Results 📈</h2>

                <p>
                    Model results will appear here.
                </p>
            </div>

        </div>
    );
}

export default Dashboard;