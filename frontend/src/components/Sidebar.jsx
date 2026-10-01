import algorithms from "../data/algorithms";

function Sidebar(props) {

    const categories = [
        "Regression",
        "Classification",
        "Deep Learning"
    ];

    return (
        <div>

            <h2>🧠 XAI-Neuromap</h2>

            <p>Algorithms</p>

            {categories.map((category) => (

                <div key={category}>

                    <h3>{category}</h3>

                    {algorithms
                        .filter((item) => item.category === category)
                        .map((item) => (
                            <button
                                key={item.name}
                                onClick={() =>
                                    props.setAlgorithm(item.name)
                                }
                                style={{
                                    fontWeight:
                                        item.name === props.algorithm
                                            ? "bold"
                                            : "normal"
                                }}
                            >
                                {item.name}
                            </button>
                        ))}

                </div>

            ))}

        </div>
    );
}

export default Sidebar;