// Login
import React, { useState } from 'react';

import { Button, Container, Col, Form, Row } from 'react-bootstrap';

const Login = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {

        }

        setValidated(true);
    };
    

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="mt-5">

                        <h1 className="my-5">Login</h1>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-4" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" required />

                                <Form.Control.Feedback type="invalid">Please enter valid email.</Form.Control.Feedback>
                            </Form.Group>    

                            <Form.Group className="mb-4" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="********" required />

                                <Form.Control.Feedback type="invalid">Please enter Password.</Form.Control.Feedback>
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