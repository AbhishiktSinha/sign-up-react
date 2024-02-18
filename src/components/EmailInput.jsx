import { useState, useEffect } from "react";
import { validateEmailInput } from "../validation-functions";
import InputFieldContainer from "./InputFieldContainer";

let inputInfoClass = '';

export default function EmailInput({formStatus, submitValidationHandler}) {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    if (formStatus === 'SUBMITTING') {
        const emailCumulativeError = inputValue ? error : 'Email can not be empty';
        submitValidationHandler(emailCumulativeError)
    }

    useEffect(()=>{
        if (formStatus === 'SUCCESS') {
            resetInitialState();
        }
    }, [formStatus])

    
    function resetInitialState() {
        setInputValue('');
        setError('');
        inputInfoClass='';
    }

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