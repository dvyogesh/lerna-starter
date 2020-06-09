import React from 'react';
import InputWrapper from './inputStyles';

const InputFloatingLabel = ({...props}) => {
    const {label="Label", variant="standerd"} = props;

    return(
    <InputWrapper variant={variant}>

        <div className="floating-label">      
            <input {...props} className="floating-input" placeholder=" "/>
            <label>{label}</label>
        </div>
            
    </InputWrapper>
    )
}

export default InputFloatingLabel;


