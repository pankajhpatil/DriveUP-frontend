import React, { Component } from 'react';
import {Card} from 'react-bootstrap'; 

class StudentDashboardComponent extends Component{

    render() {

        return (
            <div className="cards" style={{ display: 'flex', alignItems:'center', height: '20%',marginLeft: '12%' }}>
                <table>
                    <tr>
                        <td style={{ padding: '75px' }}>
                        <Card bg="dark" text="white" style={{ width: '20rem', height: '20rem' }}>
                            <Card.Header>Wanna Enroll?</Card.Header>
                            <Card.Body>
                            <Card.Title><a href="/home/enroll">Enroll</a></Card.Title>
                            <Card.Text>
                            Most DMV services can be completed by using our courses.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </td>
                        <td>
                        <Card bg="dark" text="white" style={{ width: '20rem' , height: '20rem' }}>
                            <Card.Header>DMV study Resources</Card.Header>
                            <Card.Body>
                            <Card.Title><a href="/resources">Resources</a></Card.Title>
                            <Card.Text>
                                Take advantage of documents, videos, and other study materials.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default StudentDashboardComponent;