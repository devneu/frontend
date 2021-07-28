import React from "react";

export const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const FormErrorMessage = (props: any) => {

    return (
        <>
            {
                props.showError != undefined ?
                <div className="error-message">
                    {props.children}
                </div>
                    : ""
            }
        </>
    );
};

export default FormErrorMessage;