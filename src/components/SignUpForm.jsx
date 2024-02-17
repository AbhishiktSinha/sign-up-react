import { useState } from "react";
import { useEffect } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import '../style/formStyle.css'

export default function SignUpForm() {
    const [formStatus, setFormStatus] = useState('TYPING'); // 'TYPING', 'SUBMITTING', 'SUCCESS'
    
    const [isValidInput, setIsValidInput] = useState(true);

    // takes the local validations from individual input fields
    function submitValidationHandler(isValid) {
        setIsValidInput( state => (state && isValid) )
    }
    
    useEffect(()=> {
        if (formStatus === 'SUBMITTING') {

            if (isValidInput) {
                setFormStatus('TYPING');
                alert('Sign up successful');
            }
            else {
                setFormStatus('TYPING')
                alert('Error in input values');
            }
            setIsValidInput(true);
        }
    })

    function formSubmitHandler(e) {
        e.preventDefault();
        setFormStatus('SUBMITTING');
    }

    return (
        <div id="sign-up-form-container">
            
            <form 
                id="sign-up-form"
                onSubmit={(e)=>formSubmitHandler(e)}
                >
                <EmailInput 
                    formStatus={formStatus}
                    submitValidationHandler={submitValidationHandler}
                    ></EmailInput>
                
                <PasswordInput 
                    formStatus={formStatus}
                    submitValidationHandler={submitValidationHandler}
                    ></PasswordInput>

                <button type="submit">Sign up</button>
            </form>                
        </div>
    )

}