import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap'; 
import StripeCheckoutButton from 'react-stripe-checkout';
import { RESTService } from "../Api/api.js";
import { message } from 'antd';
import { history } from '../../Helper/history';
import {Button} from 'antd';


class IAppointment extends Component{
    iSchedule = () => { history.push('/home/iSchedule'); };
    iDetails = () => { history.push('/home/iDetails'); };
    async componentDidMount() {
        console.log(this.state);
        console.log(this.props.location);
        console.log(this.props.location.state);

    }


    render() {
     
        return (
            <div className="cards" style={{ display: 'flex', alignItems:'center', height: '20%' }}>

                <table>
                    <tr>
                        <td style={{ padding: '70px' }}>
                        <Jumbotron style={{ width: '26rem' , height: '20rem' }}>
                            <h1>hello</h1>
                            <p>
                                                        </p>
                            <p>
                            <Button type="primary" size="large" icon="login" onClick={this.iSchedule}>Go</Button>
                            </p>
                        </Jumbotron>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default IAppointment;