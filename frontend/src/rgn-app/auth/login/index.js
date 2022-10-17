// Login
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Button, Container, Col, Form, Row } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { LOGIN_MUTATION } from '../graphql';

const Login = () => {

    const navigate = useNavigate();

    const [isError, setIsError] = useState(null);
    
    const [login] = useMutation(LOGIN_MUTATION, {
        onCompleted: ({ login }) => {
            localStorage.setItem('token', login.token);
            navigate('/');
        },
        onError: (error) => {
            setIsError(error?.message);
        }
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address format")
                .required("Email is required"),        
            password: Yup.string()
                .min(3, "Password must be 3 characters at minimum")
                .required("Password is required")
        }),
        onSubmit: values => {
            const { email, password } = values;
            login({ variables: { email, password } });
        }
    });

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-5">

                        <h1 className="my-5">Login</h1>

                        {
                            isError &&
                            <Alert key="danger" variant="danger" onClose={() => setIsError(null)} dismissible>
                                {isError}
                            </Alert>
                        }

                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-4" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" id="email" onChange={formik?.handleChange} />

                                { formik?.errors?.email &&
                                    <Form.Control.Feedback className="d-block" type="invalid">Please enter valid email.</Form.Control.Feedback>
                                }
                            </Form.Group>    

                            <Form.Group className="mb-4" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="********" name="password" id="password" onChange={formik?.handleChange} />

                                { 
                                    formik?.errors?.password &&
                                    <Form.Control.Feedback className="d-block" type="invalid">Please enter Password.</Form.Control.Feedback>
                                }
                            </Form.Group>
                            
                            
                            <Button type="submit">Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Login;