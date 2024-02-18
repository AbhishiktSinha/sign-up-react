import { useState } from "react";
import { useEffect } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import '../style/formStyle.css'

let formError = '';

export default function SignUpForm() {
    const [formStatus, setFormStatus] = useState('TYPING'); // 'TYPING', 'SUBMITTING', 'SUCCESS'    

    // takes the local validations from individual input fields
    function submitValidationHandler(entryError) {
        // display the first error that occured
        if (!formError) {
            formError = entryError
        }
    }
    
    useEffect(()=> {
        if (formStatus === 'SUBMITTING') {

            if (formError) {
                alert(formError);
                setFormStatus('TYPING');
            }
            else {                
                alert('Sign up successful');
                setFormStatus('SUCCESS')
            }
            formError = ''
        }
        if (formStatus === 'SUCCESS') {
            setFormStatus('TYPING');
        }
    }, [formStatus])

    
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