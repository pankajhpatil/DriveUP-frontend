import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { message } from "antd/lib/index";
import { Upload, Button, Icon, Input } from 'antd';
import axios from 'axios';
import reqwest from 'reqwest';
import { RESTService } from '../Api/api.js'

import { history } from '../../Helper/history';

const {TextArea} = Input;


class UploadComponent extends Component {

    state = {
        selectedFile: '',
        loaded: 0,
        value: ''
    }


    handleUpload = async () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile, this.state.selectedFile.name);
        data.append('description', this.state.value);


        console.log("Uploading... " + this.state.selectedFile.name);
        await RESTService.upload(data);

        this.setState({
            selectedFile: '',
            loaded: 0,
            value: ''
        });

    }

    handleselectedFile = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onChange = ({target: {value}}) => {
        this.setState({value});
    };

    render() {


        return (
            <div>
                <div className="uploadArea">


                    <input type="file" name="" id="" onChange={this.handleselectedFile}/>

                    <br/> <br/>

                    <TextArea
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="Description"
                        autoSize={{minRows: 3, maxRows: 5}}
                    />

                    <br/> <br/>

                    <Button
                        type="primary"
                        onClick={this.handleUpload}>Upload </Button>


                </div>
            </div>
        );
    }
}


export default UploadComponent;