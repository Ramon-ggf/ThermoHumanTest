import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import  "./HelloWorldForm.css"

const HelloForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const history = useHistory();


    const handleValidation = values => {
        setIsSubmitted(false)
        console.log("Validating", isSubmitted)
        const errors = {};
        if (!values.boxText) {
            errors.boxText = 'Required';
        }
        return errors;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setIsSubmitted(true)

        setTimeout(() => {
            setSubmitting(false);
        }, 400);
    }

    const handleRedirect = () => history.push("/profile");
    

    const currentDate = new Date().toLocaleDateString()

    return (
        <div>

            <Formik
                initialValues={{ boxText: "" }}
                validate={handleValidation}
                onSubmit={handleSubmit}
            >
                {({ values, isSubmitting, handleChange, handleReset }) => {

                    const handleClick = () => {
                        handleReset()
                        handleRedirect()
                    }

                    const isDisabled = isSubmitting || !values.boxText || isSubmitted;

                    return (
                        <>
                            <Form className="helloForm">
                                <Field
                                    type="text"
                                    name="boxText"
                                    onChange={handleChange}
                                    value={values.boxText} />
                                <button type="submit" className="btn btn-info" disabled={isDisabled}>Submit</button>
                                <button type="button" className="btn btn-danger" disabled={isDisabled} onClick={handleClick}>Cancel</button>
                                <button type="button" className="btn btn-success" disabled={!isDisabled} onClick={handleClick}>Exit</button>
                            </Form>
                            <h1>{isSubmitted ? `Hello ${values.boxText}. Now it is ${currentDate}` : "Who are you?"}</h1>
                        </>
                    )
                }}
            </Formik>
        </div>
    )
}

export default HelloForm;