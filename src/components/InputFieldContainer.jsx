import '../style/InputFieldStyle.css'

export default function InputFieldContainer({infoClass, inputType, inputValue, changeHandler, error, label}) {

    return (

        <div className="input-field-container">

            <div className="input-label">{label}</div>
            <input
                className={`input-field ${infoClass}`}
                type={inputType}
                value={inputValue}
                onChange={(e) => changeHandler(e)}
            />

            {
                error && (
                    <div className="error-field">{error}</div>
                )
            }
        </div>
    )
}