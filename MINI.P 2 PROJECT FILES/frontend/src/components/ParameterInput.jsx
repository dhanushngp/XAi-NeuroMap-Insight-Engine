function ParameterInput(props) {
    return (
        <div>
            <p>
                {props.label}: {props.value}
            </p>

            <input
                type="number"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}

export default ParameterInput;