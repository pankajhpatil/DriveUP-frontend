import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap'; 
import StripeCheckoutButton from 'react-stripe-checkout';
import { RESTService } from "../Api/api.js";
import { message } from 'antd';
  
class InstructorDashboardComponent extends Component{
    
    render() {
     
async function checkouttoken(token){
    let data = {};
    data.token=token;
    data.product={
        name: "Driving Lessons",
        price: 60
      };
    try {
        await RESTService.payment(data);

        message.success('Payment Complete');

    }
    catch (err) {
        this.setState({loading: false});
        message.error('Something Went Wrong!');
    }
console.log(token);
}
        return (
            <div className="cards" style={{ display: 'flex', alignItems:'center', height: '20%' }}>

                <table>
                    <tr>
                        <td style={{ padding: '70px' }}>
                        <Jumbotron style={{ width: '24rem' , height: '20rem' }}>
                            <h1>My Schedule</h1>
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
                        <Jumbotron style={{ width: '30rem' , height: '20rem' }}>
                            <h1>Payment</h1>
                            <p>
                            <StripeCheckoutButton 
                            stripeKey="pk_test_f5U22ypjQyKYJtUFUjwmBG2a00U3B5VM2B"
                            token={checkouttoken}
                            billingAddress
                            shippingAddress
                            amount={60 *100}
                            name={"Driving Lessons"}
                            />    
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