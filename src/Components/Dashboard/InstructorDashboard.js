import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap'; 

class InstructorDashboardComponent extends Component{

    render() {

        return (
            <div className="cards" style={{ display: 'flex', alignItems:'center', height: '20%' }}>
                <table>
                    <tr>
                        <td style={{ padding: '70px' }}>
                        <Jumbotron style={{ width: '24rem' , height: '20rem' }}>
                            <h1>Wanna Enroll!</h1>
                            <p>
                            Click here to view your engagements
                            </p>
                            <p>
                            <a href="/home/iSchedule"><Button variant="primary">Go</Button></a>
                            </p>
                        </Jumbotron>
                        </td>
                        <td style={{ padding: '70px' }}>
                        <Jumbotron style={{ width: '30rem' , height: '20rem' }}>
                            <h1>Update Availability</h1>
                            <p>
                            Click here to update your availability details
                            </p>
                            <p>
                            <a href="/home/iDetails"><Button variant="primary">Go</Button></a>
                            </p>
                        </Jumbotron>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default InstructorDashboardComponent;