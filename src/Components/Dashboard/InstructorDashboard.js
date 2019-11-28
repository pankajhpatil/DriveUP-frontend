import React, { Component } from 'react';
import {Card} from 'react-bootstrap'; 

class InstructorDashboardComponent extends Component{

    render() {

        return (
            <div className="cards" style={{ display: 'flex', alignItems:'center', height: '20%',marginLeft: '12%' }}>
                <table>
                    <tr>
                        <td style={{ padding: '75px' }}>
                        <Card bg="dark" text="white" style={{ width: '20rem', height: '20rem' }}>
                            <Card.Header>My Schedule</Card.Header>
                            <Card.Body>
                            <Card.Title><a href="/home/iSchedule">Enroll</a></Card.Title>
                            <Card.Text>
                            Click here to view your engagements
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </td>
                        <td>
                        <Card bg="dark" text="white" style={{ width: '20rem' , height: '20rem' }}>
                            <Card.Header>Update Availability</Card.Header>
                            <Card.Body>
                            <Card.Title><a href="/home/iDetails">Resources</a></Card.Title>
                            <Card.Text>
                                Click here to update your availability details
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

export default InstructorDashboardComponent;