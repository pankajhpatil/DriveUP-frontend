import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { Table, Divider, Modal } from 'antd';
import { message } from "antd/lib/index";
import { history } from '../../Helper/history';


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


    componentDidMount() {

        //api call to fetch info

        const data = [
            {
                key: '1',
                userid: 'someID',
                file_name: 'fname',
                filedesc: '32 aksjbhdajhs,d ajshdasdas  ja,ds ',
                fileuploadtime: '2019-10-22T23:46:40.000Z',
                filemodifieddate: '2019-10-22T23:46:40.000Z',
                filecreatedate: '2019-10-22T23:46:40.000Z',
                fileurl: 'https://ant.design/components/table/#header',
            },
            {
                key: '2',
                userid: 'someID2',
                file_name: 'fnqwame',
                filedesc: '32 akqweqwsjbhdajhs,d ajshdasdas  ja,ds ',
                fileuploadtime: '2019-10-22T23:46:40.000Z',
                filemodifieddate: '2019-10-22T23:46:40.000Z',
                filecreatedate: '2019-10-22T23:46:40.000Z',
                fileurl: 'http://kahbsd.asdasd.asdas.awsapps.com/IMG_3651.jpg',
            },
            {
                key: '3',
                userid: 'someID3',
                file_name: 'fnaqwme',
                filedesc: 'qwehdasdas  ja,ds ',
                fileuploadtime: '2019-10-22T23:46:40.000Z',
                filemodifieddate: '2019-10-22T23:46:40.000Z',
                filecreatedate: '2019-10-22T23:46:40.000Z',
                fileurl: 'http://asdkawq.asdas.awsapps.com/IMG_3651.jpg',
            },
            {
                key: '4',
                userid: 'someID4',
                file_name: 'fnaqweme',
                filedesc: 'qweqew ajshdasdas  ja,ds ',
                fileuploadtime: '2019-10-22T23:46:40.000Z',
                filemodifieddate: '2019-10-22T23:46:40.000Z',
                filecreatedate: '2019-10-22T23:46:40.000Z',
                fileurl: 'http://asqwhbsd.asdasd.asdas.awsapps.com/IMG_3651.jpg',
            },
        ];

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
                title: 'File Name',
                dataIndex: 'file_name',
            },
            {
                title: 'User ID',
                dataIndex: 'userid',
            },
            {
                title: 'File Description',
                dataIndex: 'filedesc',
            },
            {
                title: 'Upload Time',
                dataIndex: 'fileuploadtime',
            },
            {
                title: 'Create Time',
                dataIndex: 'filecreatedate',
            },
            {
                title: 'File Action',
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