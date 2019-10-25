import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Table, Divider, Modal } from 'antd';
import { message } from "antd/lib/index";
import { history } from '../../Helper/history';
import { RESTService } from '../Api/api.js'


class TableComponent extends Component {

    //`userid`, `file_name`,`filedesc`, `fileuploadtime`, `filemodifieddate`, `filecreatedate`, `fileurl`

    // onChange = (pagination, filters, sorter, extra) => {
    //     console.log('params', pagination, filters, sorter, extra);
    // }

    state = {tableData: []};
    //
    // showModal = () => {
    //     this.setState({
    //         visible: true,
    //     });
    // };
    //


   async componentDidMount() {


       let response = await RESTService.getTableData();

        console.log("response");
        console.log(response.data.result);

        let data = response.data.result;
       


        this.setState({tableData: data});


    }

    deleteFile = (fileName) => {
        console.log("deleted" + fileName);
        message.success('File ' + fileName + ' deleted Successfully!');
        history.push('/home');
    };

    // // confirm = () => {
    // //
    // // }

    render() {


        const columns = [
            {
                title: 'First Name',
                dataIndex: 'firstname',
            },
            {
                title: 'Last Name',
                dataIndex: 'lastname',
            },
            {
                title: 'File Name',
                dataIndex: 'file_name',
            },
            {
                title: 'File Description',
                dataIndex: 'filedesc',
            },
            {
                title: 'Upload Time(Seconds)',
                dataIndex: 'fileuploadtime',
            },
            {
                title: 'Create Date',
                dataIndex: 'filecreatedate',
            },
            {
                title: 'Last Update Date',
                dataIndex: 'filemodifieddate',
            },
            {
                title: 'User ID',
                dataIndex: 'username',
            },
            {
                title: 'File Action(s)',
                dataIndex: 'fileurl',
                render: (text, record) => <div><a href={text} target="_blank">Download</a> <Divider type="vertical"/> <a
                    onClick={() => this.deleteFile(record.file_name)}> Delete</a></div>,
            },

        ];


        return (
            <div className="table">
                <Table columns={columns} dataSource={this.state.tableData}/>
            </div>
        );
    }
}


export default TableComponent;