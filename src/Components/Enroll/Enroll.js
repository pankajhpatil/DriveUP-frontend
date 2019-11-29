import React, { Component } from 'react'; 
import { connect } from "react-redux";
import {
    Form, Button, Input, Select, DatePicker, Radio, message
} from 'antd';
import { history } from '../../Helper/history';
import { RESTService } from "../Api/api.js";

class EnrollComponent extends Component{

    state = {
        loading: false,
        addressPop:'',
        minorPop:'',
        prefixPop: '',
        numberPop: '',
        country:'',
        gender:'',
        city:''
    };
    
    async componentDidMount() {

        try {
            let response=await RESTService.checkProfile();
            
        
            if(response.data.student === undefined){
                message.error('Fill the below details');
            }
            else{

                console.log(response.data);
                this.setState({
                    addressPop: response.data.student.Address,
                    minorPop: response.data.student.Minor,
                    country:response.data.student.Country,
                    gender:response.data.student.Gender,
                    city:response.data.student.city,
                    prefixPop: response.data.student.PhoneNumber.substring(0,3),
                    numberPop: response.data.student.PhoneNumber.substring(3),
                })

                message.success('Profile already completed');
            }
            
        }
        catch (err) {
            console.log(err);
        }

         
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
           
            let data = {};


            data.address = values.address;
            data.minor = values.age;
            data.gender = values.gender;
            data.phone = values.prefix+''+values.phone;
            data.country= values.country;
            data.city=values.city;
            data.dob=values.DOB._d;

            try {
                await RESTService.enroll(data);

                message.success('Saved Successfully');

                history.push('/home');
            }
            catch (err) {
                this.setState({loading: false});
                message.error('Error by Manish!');
            }
          }
          else {
            this.setState({loading: false});
            message.error('Incomplete information');
        }
        });
      };

    render() {
    
        const {getFieldDecorator} = this.props.form;
        const { Option } = Select;

        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 12 },
        };

        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: this.state.prefixPop,
          })(
            <Select style={{ width: 70 }}>
              <Option value="+1">+1</Option>
              <Option value="+91">+91</Option>
            </Select>,
          );

        return (
               
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <h4 className="alignCenter">Profile Completion</h4>

            <Form.Item label="Are you at least 18 years old?">
                {getFieldDecorator('age', {
                    initialValue: this.state.minorPop,
                    rules: [{required: true,message: 'Please input your age!'}],
                })(
                    <Radio.Group >
                    <Radio value="No">Yes</Radio>
                    <Radio value="Yes">No</Radio>
                    </Radio.Group>,
                )}
            </Form.Item>
         
            <Form.Item label="Residential/Permanent Address" >
                {getFieldDecorator('address', {
                    initialValue: this.state.addressPop,
                    rules: [{
                        required: true,
                        message: 'Please input your address!',
                    }],
                })(<Input />)}
            </Form.Item>

            <Form.Item label="City" >
                {getFieldDecorator('city', {
                    initialValue: this.state.cityPop,
                    rules: [{
                        required: true,
                        message: 'Please input your city!',
                    }],
                })(<Input />)}
            </Form.Item>

            <Form.Item label="Select country" hasFeedback>
                {getFieldDecorator('country', {
                    initialValue: this.state.country,
                    rules: [{ required: true, message: 'Please select your country!' }],
                })(
                    <Select placeholder="Please select a country">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                    </Select>,
                )}
            </Form.Item>

            <Form.Item label="Phone Number">
                {getFieldDecorator('phone', {
                    initialValue: this.state.numberPop,
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item>

            <Form.Item label="Gender">
                {getFieldDecorator('gender', {
                    initialValue: this.state.gender,
                    rules: [{ required: true, message: 'Please select your gender!' }],
                })(
                    <Select
                    placeholder="Select your gender">
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="Date of Birth" style={{ marginBottom: 0 }}>
            <Form.Item>
            {getFieldDecorator('DOB', {
                rules: [{ required: true, message: 'Please select your Date of Birth!' }],
            })(
                <DatePicker/>,
            )}
                
            </Form.Item>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
                Save & Next
            </Button>
            </Form.Item>
            
            </Form>

    )}
};

function mapStateToProps(state) {
    const {simpleReducer} = state;
    return {
        simpleReducer
    };
}

export default connect(mapStateToProps)(Form.create()(EnrollComponent));