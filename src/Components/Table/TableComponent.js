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

        //api call to fetch info
       let response = await RESTService.getTableData();

        console.log("response");
        console.log(response.data.result);

        let data = response.data.result;
       
        // const data = [
        //     {
        //         key: '1',
        //         userid: 'someID',
        //         file_name: 'fname',
        //         filedesc: '32 aksjbhdajhs,d ajshdasdas  ja,ds ',
        //         fileuploadtime: '2019-10-22T23:46:40.000Z',
        //         filemodifieddate: '2019-10-22T23:46:40.000Z',
        //         filecreatedate: '2019-10-22T23:46:40.000Z',
        //         fileurl: 'https://ant.design/components/table/#header',
        //     },
        //     {
        //         key: '2',
        //         userid: 'someID2',
        //         file_name: 'fnqwame',
        //         filedesc: '32 akqweqwsjbhdajhs,d ajshdasdas  ja,ds ',
        //         fileuploadtime: '2019-10-22T23:46:40.000Z',
        //         filemodifieddate: '2019-10-22T23:46:40.000Z',
        //         filecreatedate: '2019-10-22T23:46:40.000Z',
        //         fileurl: 'http://kahbsd.asdasd.asdas.awsapps.com/IMG_3651.jpg',
        //     },
        //     {
        //         key: '3',
        //         userid: 'someID3',
        //         file_name: 'fnaqwme',
        //         filedesc: 'qwehdasdas  ja,ds ',
        //         fileuploadtime: '2019-10-22T23:46:40.000Z',
        //         filemodifieddate: '2019-10-22T23:46:40.000Z',
        //         filecreatedate: '2019-10-22T23:46:40.000Z',
        //         fileurl: 'http://asdkawq.asdas.awsapps.com/IMG_3651.jpg',
        //     },
        //     {
        //         key: '4',
        //         userid: 'someID4',
        //         file_name: 'fnaqweme',
        //         filedesc: 'qweqew ajshdasdas  ja,ds ',
        //         fileuploadtime: '2019-10-22T23:46:40.000Z',
        //         filemodifieddate: '2019-10-22T23:46:40.000Z',
        //         filecreatedate: '2019-10-22T23:46:40.000Z',
        //         fileurl: 'http://asqwhbsd.asdasd.asdas.awsapps.com/IMG_3651.jpg',
        //     },
        // ];

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