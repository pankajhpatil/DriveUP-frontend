import React, { Component } from 'react';
import {Form, Col} from 'react-bootstrap'; 

class EnrollComponent extends Component{

    handleSubmit = (e) => {

        e.preventDefault();

        this.props.form.validateFields(async (err, values) => {
        
            console.log('Received values of form: ', values);


                
        });
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit} className="Enroll">                
                    <Form.Group as={Form.Row}>
                        <Form.Label as="legend" column sm={3}>Are you least 18 years of age?</Form.Label>
                        <Col sm={8}>
                            <Form.Check
                            type="radio"
                            label="Yes"
                            name="minorOrMajor"
                            id="ageGreater"
                            />
                            <Form.Check
                            type="radio"
                            label="No"
                            name="minorOrMajor"
                            id="ageLess"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option>Choose...</option>
                            <option>AL</option>
                            <option>AZ</option>
                            <option>CA</option>
                            <option>MA</option>
                            <option>NY</option>
                            <option>WA</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>   
                    <br />
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridState" right>
                        <Form.Label style={{marginLeft: '50%',fontWeight: 'bold'}}><a href="/home/enroll1">Next</a></Form.Label> 
                    </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default EnrollComponent;