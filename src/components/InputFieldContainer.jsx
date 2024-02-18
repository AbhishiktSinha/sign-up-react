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

            <div 
                className="error-field"
                style={{visibility: (error ? 'visible' : 'hidden')}}
            >{error}</div>
            
        </div>
    )
}