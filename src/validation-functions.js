export function validateEmailInput(value,setError) {

    value = value.trim();
    

    if (value.length == 0) {         
        setError('');
        return '';
    }

    if (value.includes(" ")) {
        setError('Please enter a valid email');
        return('invalid-input');
    }

    // contains @, which is not the first element
    const at_symbol_index = value.indexOf('@');
    // contains a domain name and '.' sign followed by TLD
    const dot_index = value.lastIndexOf('.');

    // console.log(dot_index, value.length);
    if (at_symbol_index != -1 && dot_index != -1) {

        // domain name present & TLD present
        if ( (dot_index - at_symbol_index > 1) && (dot_index < value.length-1) ) {
            setError('');
            return 'valid-input';
        }
        else {
            setError('Please enter a valid email');
            return ('invalid-input')
        }
    }else {
        setError('Please enter a valid email');
        return('invalid-input')
    }
}

export function validatePassword(value, setError) {

    if (value.length >= 8) {
        setError('')
        return (true);
    }
    else {
        setError('Password should contain at least 8 characters')
        return (false);
    }
}

export function matchPasswords(value1, value2, setError) {
    
    if (value1 === value2) {
        
        setError('');
        return true;
    }
    else {
        setError('Passwords do not match');
        return(false);
    }
}