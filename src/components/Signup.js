import React, {useRef} from 'react';
import {Form, Button, Card } from 'react-bootstrap'

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef()

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className= "text-center">SignUp</h2>
                    <Form>
                        <Form.Group id = "email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type = "email" ref = {emailRef} required />
                        </Form.Group>

                        <Form.Group id = "password">
                            <Form.Label>
                              Password
                            </Form.Label>
                            <Form.Control type = "password" ref = {passwordRef} required />
                        </Form.Group>
                        
                        <Form.Group id = "password-confirm">
                            <Form.Label>
                                Password-confirmation
                            </Form.Label>
                            <Form.Control type = "password" ref = {passwordConfirmRef} required />
                        </Form.Group>
                        <Button type = "Submit">SignUp</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className= "text-center">
                Already have an account? LogIn
            </div>
        </>
    )
}

export default Signup
