import React from "react";
import "./contact.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const Contact = () => {
    return (
        <>
        <Row className="d-flex justify-content-center align-items-center px-5">
            <Col sm={6} md={4} className="text-center mb-4 mt-4">
                Have a question or just curious about photography tips, my journey, or the options I offer? 
                I’d love to hear from you! Feel free to send a message, and I’ll get back to you as soon as I can. 
                Let’s connect and make your photography experience even better!
            </Col>
        </Row>
        <Row className="px-5">
            <Col md={12}>
                <div className="content-wrapper">
                    <Col sm={{ span: 2, offset: 5 }} className="mb-4" >
                        <FloatingLabel controlId="floatingFirstName" label="First Name">
                            <Form.Control type="First Name" size="sm"  placeholder="John" required/>
                        </FloatingLabel>
                    </Col>
                    <Col sm={{ span: 2, offset: 5 }} className="mb-4">
                        <FloatingLabel controlId="floatingLastName" label="Last Name">
                            <Form.Control type="Last Name" size="sm" placeholder="Doe" />
                        </FloatingLabel>
                    </Col>
                    <Col sm={{ span: 2, offset: 5 }} className="mb-4">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                    </Col>
                    <Col sm={{ span: 2, offset: 5 }} className="mb-4">
                        <FloatingLabel
                            controlId="floatingEmailSubject"
                            label="Subject"
                            className="mb-3"
                            required
                        >
                            <Form.Control type="subject" size="sm" placeholder="Subject"/>
                        </FloatingLabel>
                    </Col>
                    <Col sm={{ span: 4, offset: 4 }} className="mb-4">
                        <FloatingLabel controlId="floatingMessage" label="Message">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a message here"
                                style={{ height: '100px', resize: "vertical" }}
                                size="sm"
                                required
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs={{ span: 4, offset: 4 }} className="mb-4">
                        <Button variant="outline-secondary">Submit</Button>
                    </Col>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Contact;
