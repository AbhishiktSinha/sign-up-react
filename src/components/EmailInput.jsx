import { useState } from "react";
import { validateEmailInput } from "../validation-functions";
import InputFieldContainer from "./InputFieldContainer";

let inputInfoClass = '';

export default function EmailInput({formStatus, submitValidationHandler}) {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    if (formStatus === 'SUBMITTING') {
        submitValidationHandler( (error.length == 0) && (inputValue !== '') )
    }

    // if (formStatus === 'SUCCESS') {
    //     setInputValue('');
    //     setError('');
        
    // }

    function handleInputChange(e) {        
        
        const value = e.target.value;
        setInputValue(value);

        inputInfoClass = validateEmailInput(value, setError);
    }  

    return (
        <div className="email-input-container">
            <InputFieldContainer
                infoClass={inputInfoClass}
                inputType={'text'}
                inputValue={inputValue}
                changeHandler={handleInputChange}
                error={error}
                label={'Email'}
            ></InputFieldContainer>
        </div>
    )
}