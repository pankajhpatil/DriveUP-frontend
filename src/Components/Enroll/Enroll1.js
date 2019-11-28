import React, { Component } from 'react';
import {
    Form, Button, Input, Select, DatePicker, Radio, message
} from 'antd';
import {Card} from 'react-bootstrap';
import { connect } from "react-redux";

class Enroll1Component extends Component{

    state = {
        loading: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Select your plan">
                    {getFieldDecorator('radio-button')(
                        <Radio.Group>
                        <Radio.Button value="a">
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        </Radio.Button>
                        <Radio.Button value="b">
                        <Card bg="primary" text="white" style={{ width: '18rem' }}>
                            <Card.Header>Header</Card.Header>
                            <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br />
                        </Radio.Button>
                        <Radio.Button value="c">item 3</Radio.Button>
                        </Radio.Group>,
                    )}
                </Form.Item>
            </Form>
        )
    }
}

function mapStateToProps(state) {
    const {simpleReducer} = state;
    return {
        simpleReducer
    };
}

export default connect(mapStateToProps)(Form.create()(Enroll1Component));