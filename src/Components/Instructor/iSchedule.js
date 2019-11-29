import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Table, Divider, Modal } from 'antd';
import { message } from "antd/lib/index";
import { history } from '../../Helper/history';
import { RESTService } from '../Api/api.js'


class ISchedule extends Component {


    state = {tableData: []};


    async componentDidMount() {


        let response = await RESTService.getinstructorSchedule();


        this.setState({tableData: response.data.result});


    }

    deleteISchedule = async (userName) => {

        let data = {};
        data.sdate = userName;
        await RESTService.deleteISdetails(data);
        message.success('User ' + userName + ' deleted Successfully!');
        let response = await RESTService.getinstructorSchedule();
        this.setState({tableData: response.data.result});
    };


    render() {
// //{
//         "user_id": 14,
//             "username": "testuser6",
//             "password": "test6",
//             "firstname": "test6",
//             "lastname": "user6",
//             "email": "pankajhpatil21@gmail.com",
//             "modifieddate": "2019-10-24T09:18:50.000Z",
//             "phone": "+1(669)288-4958"
//     }

        const columns = [
            {
                title: 'Schedule Date',
                dataIndex: 'sdate',
            },
            {
                title: '(8am-10am)',
                dataIndex: 'slot0810',
            },
            {
                title: '(10am-12pm)',
                dataIndex: 'slot1012',
            },
            {
                title: '(12pm-2pm)',
                dataIndex: 'slot1214',
            },
            {
                title: '(2pm-4pm)',
                dataIndex: 'slot1416',
            },
            {
                title: '(4pm-6pm)',
                dataIndex: 'slot1618',
            },
            {
                title: '(6pm-8pm)',
                dataIndex: 'slot1618',
            },
            {
                title: '(8pm-10pm)',
                dataIndex: 'slot1820',
            },
            {
                title: 'Action',
                dataIndex: 'sdate',
                render: (text) => <div><a
                    onClick={() => this.deleteISchedule(text)}>Delete</a></div>,
            },

        ];


        return (
            <div className="table">
                <Table columns={columns} dataSource={this.state.tableData}/>
            </div>
        );
    }
}


export default ISchedule;