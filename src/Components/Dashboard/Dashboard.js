import React, { Component } from 'react';
import {Form,Button} from 'antd';

class DashboardComponent extends Component{

    render(){
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" className="login-form-button" >
                        Complete Your profile
                    </Button>
                </Form.Item>
                </Form>
            </div>
        )
    }
}

export default DashboardComponent;