import React, { Component } from 'react';
import {Card, Jumbotron,Button} from 'react-bootstrap'; 

class StudentDashboardComponent extends Component{

    render() {

        return (
            <div className="cards" style={{ display: 'flex', alignItems:'center', height: '20%' }}>
                <table>
                    <tr>
                        <td style={{ padding: '70px' }}>
                        <Jumbotron style={{ width: '24rem' , height: '20rem' }}>
                            <h1>Wanna Enroll!</h1>
                            <p>
                            Most DMV services can be completed by using our courses.
                            </p>
                            <p>
                            <a href="/home/enroll"><Button variant="primary">Enroll</Button></a>
                            </p>
                        </Jumbotron>
                        </td>
                        <td style={{ padding: '70px' }}>
                        <Jumbotron style={{ width: '30rem' , height: '20rem' }}>
                            <h1>DMV study Resources</h1>
                            <p>
                            Take advantage of documents, videos, and other study materials.
                            </p>
                            <p>
                            <a href="/home/resources"><Button variant="primary">Enroll</Button></a>
                            </p>
                        </Jumbotron>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default StudentDashboardComponent;