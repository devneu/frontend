import React from "react";
import "./FormErrorMessage.scss";

interface FormErrorMessage {
    message: string
}

const FormErrorMessage = ({message}: FormErrorMessage):any => {
    return message ? <div className="error-message">{message}</div>: "";
};

export default FormErrorMessage;