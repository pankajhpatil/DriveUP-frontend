import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { message } from "antd/lib/index";
import { Upload, Button, Icon, Input } from 'antd';
import reqwest from 'reqwest';

import { history } from '../../Helper/history';

const {TextArea} = Input;


class UploadComponent extends Component {


    state = {
        fileList: [],
        uploading: false,
        value: '',
    };


    onChange = ({target: {value}}) => {
        this.setState({value});
    };


    handleUpload = () => {
        const {fileList} = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });


        formData.description = this.state.value;


        this.setState({
            uploading: true,
        });

        // You can use any AJAX library you like
        reqwest({
            url: 'http://localhost:3000/upload',
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success('upload successfully.');
            },
            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed.');
            },
        });
    };

    render() {
        const {uploading, fileList} = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [file],
                }));
                return false;
            },
            fileList,
        };

        return (
            <div>
                <div className="uploadArea">
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload"/> Select File
                        </Button>
                    </Upload>

                    <br/>
                    <TextArea
                        value={this.state.value}
                        onChange={this.onChange}
                        disabled={fileList.length === 0}
                        placeholder="Description"
                        autoSize={{minRows: 3, maxRows: 5}}
                    />


                    <Button
                        type="primary"
                        onClick={this.handleUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                        style={{marginTop: 16}}
                    >
                        {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>
                </div>
            </div>
        );
    }
}


export default UploadComponent;