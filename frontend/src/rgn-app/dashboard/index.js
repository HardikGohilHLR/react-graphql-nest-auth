// RGN - Dashboard
import React from 'react';
import { Button, Navbar, Nav, Container, Col, Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { useAuthContext, useAuthUpdateContext } from '../context/authContext';

const Dashboard = () => {
    
    const _USER = useAuthContext(e => e?.user);

    const dispatch = useAuthUpdateContext();
    const navigate = useNavigate();
   
    const logOutUser = () => {
        dispatch({type: 'LOGOUT', payload: {}});
        navigate('/login');
    }

    return (
        <React.Fragment>
            
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        RGN Auth
                    </Navbar.Brand> 
                    
                    <Nav className="me-auto">
                        <Nav.Link href="#">Dashboard</Nav.Link>
                    </Nav>
                    
                    <Button variant="danger" onClick={logOutUser}>Logout</Button>
               
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col className="mt-5">
                        <h4 className="mb-3">User - {_USER?.firstName} {_USER?.lastName}</h4>
                        <h5>Email - {_USER?.email}</h5>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>
    )
}

export default Dashboard;
