import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import { Container, Row, Col } from "react-bootstrap"

import "./HelloWorldForm.css"

const HelloForm = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const history = useHistory();

    const handleValidation = values => {
        setIsSubmitted(false)
        const errors = {};
        if (!values.boxText) {
            errors.boxText = 'Required';
        }
        return errors;
    }

    const handleSubmit = (values, { setSubmitting }) => {
        setIsSubmitted(true)
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
                {({ values, handleChange, handleReset }) => {

                    const handleClick = () => {
                        handleReset()
                        handleRedirect()
                    }

                    const isDisabled = !values.boxText || isSubmitted;

                    return (
                        <>
                            <Container>
                                <Row>
                                    <Col md={{ span:6, offset: 3}}>
                                        <Form className="helloForm">
                                        <label htmlFor="boxText" style={{fontSize: 50, textAlign: "center", border: "2px solid #9E9AA0", borderRadius: 50, boxShadow: "10px 5px 5px #9E9AA0"}}>{isSubmitted ? `Hello ${values.boxText}. Now it is ${currentDate}` : "Who are you?"}</label>
                                            <Field
                                                type="text"
                                                name="boxText"
                                                onChange={handleChange}
                                            //value={values.boxText}
                                            />

                                            <button type="submit" className="btn btn-info" disabled={isDisabled}>Submit</button>
                                            <button type="button" className="btn btn-danger" disabled={isDisabled} onClick={handleClick}>Cancel</button>
                                            <button type="button" className="btn btn-success" disabled={!isDisabled} onClick={handleClick}>Exit</button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </>
                    )
                }}
            </Formik>
        </div>
    )
}

export default HelloForm;