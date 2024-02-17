import { useState } from "react";
import { validatePassword, matchPasswords } from "../validation-functions";
import InputFieldContainer from "./InputFieldContainer";

let passwordInfoClass = '';
let confPasswordInfoClass = '';

export default function PasswordInput({formStatus, submitValidationHandler}) {

    const[password, setPassword] = useState('');
    const[passwordError, setPasswordError] = useState('');

    const[confPassword, setConfPassword] = useState('');
    const[confPasswordError, setConfPasswordError] = useState('');

    if (formStatus === 'SUBMITTING') {
        
        submitValidationHandler(
            ( (passwordError.length == 0) && (password !== '') ) && 
            ( (confPasswordError.length == 0) && (confPassword != '')) )
    }
   

    function handlePasswordChange(e) {
        const value = e.target.value;
        setPassword(value);

        // if application state is empty
        if (value.length == 0 && confPassword.length == 0) {
            return;
        }

        passwordInfoClass = validatePassword(value, setPasswordError) ? 'valid-input' : 'invalid-input';
        confPasswordInfoClass = matchPasswords(value, confPassword, setConfPasswordError) ? 'valid-input' : 'invalid-input';
    }

    function handleConfPasswordChange(e) {
        const value = e.target.value;
        setConfPassword(value);

        // if application state is empty
        if (value.length == 0 && confPassword.length == 0) {
            return;
        }
    
        confPasswordInfoClass = matchPasswords(password, value, setConfPasswordError) ? 'valid-confPassword' : 'invalid-confPassword';
    }

    function restoreDefaultState() {
        setPassword('')
        setConfPassword('')
        setPasswordError('')
        setConfPasswordError('');
    }

    return (
        <div className="password-input-section">
            
            <InputFieldContainer
                infoClass={passwordInfoClass}
                inputType={'password'}
                inputValue={password}
                changeHandler={handlePasswordChange}
                error={passwordError}
                label={'Password'}
            ></InputFieldContainer>
            
            <InputFieldContainer
                infoClass={confPasswordInfoClass}
                inputType={'password'}
                inputValue={confPassword}
                changeHandler={handleConfPasswordChange}
                error={confPasswordError}
                label={'Cofirm Password'}
            ></InputFieldContainer>

        </div>
    )
}