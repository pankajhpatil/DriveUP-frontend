import React, { Component } from 'react';
import {
    Form, Button, Input, Select, DatePicker, Radio, message
} from 'antd';

import { connect } from "react-redux";
const { RangePicker } = DatePicker;

class PlanComponent extends Component{

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
        const rangeConfig = {
          ranges: '4',
          rules: [{ type: 'array', required: true, message: 'Please select time!' }]
        }

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="Select the suitable plan">
                {getFieldDecorator('radio-button')(
                  <Radio.Group>
                    <Radio.Button value="a" style={{ height: '20vh' ,width: '25vh' ,padding: '30px' }}>
                      <h7>4 Session plan</h7>
                      <p>$50/Session</p>
                    </Radio.Button>
                    <Radio.Button value="b" style={{ height: '20vh' ,width: '25vh' ,padding: '30px'}}>
                    <h7>6 Session plan</h7>
                    <p>$40/Session</p>
                    </Radio.Button>
                    <Radio.Button value="c" style={{ height: '20vh' ,width: '25vh' ,padding: '30px'}}>
                    <h7>10 Session plan</h7>
                    <p>$30/Session</p>
                    </Radio.Button>
                  </Radio.Group>,
                )}
              </Form.Item>
              <Form.Item label="RangePicker">
                {getFieldDecorator('range-picker', rangeConfig)(<RangePicker />)}
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

export default connect(mapStateToProps)(Form.create()(PlanComponent));