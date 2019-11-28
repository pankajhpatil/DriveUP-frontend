import React, { Component } from 'react';

import { history } from '../../Helper/history';
import { Router, Route } from 'react-router-dom';
import {
    Layout, Menu, Button, Icon
} from 'antd';
import { Form, message } from "antd/lib/index";

import { connect } from "react-redux";
import StudentDashboard from "../Dashboard/StudentDashboard"
import InstructorDashboard from "../Dashboard/InstructorDashboard"

import TableComponent from "../Table/TableComponent";
import UploadComponent from "../Upload/UploadComponent";
import UserTable from "../UserTable/UserTable";
import Enroll from "../Enroll/Enroll";
import IDetails from "../Instructor/iDetails";
import ISchedule from "../Instructor/iSchedule";


import { RESTService } from "../Api/api.js";

import { Typography } from 'antd';

const {Text} = Typography;

const SubMenu = Menu.SubMenu;


const {Content, Sider, Footer, Header} = Layout;

class homePage extends Component {
    state = {
        itemKey: '1',
        collapsed: false,
        loading: true,
        isAdmin: false,
        showName: ''
    };


    async componentDidMount() {
        // console.log(response.data.loggedInUser.username);
        let response = await RESTService.checkLogin();

        if (response.data.loggedInUser.username === "admin") {

            this.setState({
                isAdmin: true,
                showName: 'Admin',
            })
        }
        else {
            this.setState({
                isAdmin: false,
                showName: response.data.loggedInUser.firstName + ' ' + response.data.loggedInUser.lastName,
            })
        }


    }

    onCollapse = (collapsed) => {

        this.setState({collapsed});
    };


    handleClick = (e) => {

        //redirecting to render correct component

        this.setState({itemKey: e.key});
        if (e.key === '1') {
            history.push('/home');
        }
        else if (e.key === '2') {
            history.push('/home/upload');
        }
        else if (e.key === '3') {
            history.push('/home/allUsers');
        }
    };

    logoutButton = async () => {

        try {
            await RESTService.logout();
            message.success('Logged out Successfully');
        }
        catch (err) {
            message.error("User not logged in");
        }


        history.push('/Login');

    };


    render() {

        const {simpleReducer} = this.props;

        const isAdmin = this.state.isAdmin;

        let marginLeft = 200;
        if (this.state.collapsed) {
            marginLeft = 80;
        }

        let selectedKey = '1';

        //logic to render correct selected menu item

        switch (window.location.pathname) {
            
            case '/home':
                selectedKey = '1';
                break;

            case '/home/upload':
                selectedKey = '2';
                break;

            case '/home/allUsers':
                selectedKey = '3';
                break;

            default:
                // history.push('/home/allFiles');
                break;
        }


        return (
            <div className="HomePage">
                <Layout style={{minHeight: '100vh'}}>
                    <Header style={{position: 'fixed', width: '100%', zIndex: 1}} theme='dark'>

                        {/*<Avatar shape="square" size={64} icon="user"/>*/}
                        <Icon type="cloud-upload" style={{fontSize: '60px', marginLeft: '17px', color: '#ff872f'}}/>


                        <Button type="primary" icon="poweroff" onClick={this.logoutButton}
                                style={{float: 'right', marginTop: '16px'}}>
                            Logout!
                        </Button>
                        <Text style={{float: 'right', color:'white', marginRight:'10px'}}>Hi, {this.state.showName}     </Text>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                            top: 64
                        }}
                               collapsible
                               collapsed={this.state.collapsed}
                               onCollapse={this.onCollapse}
                               theme='dark'
                        >


                            <Menu
                                onClick={this.handleClick}
                                style={{height: '100%'}}
                                mode="inline"
                                selectedKeys={[selectedKey]}
                                defaultOpenKeys={['sub1']}
                                theme='dark'
                            >

                                <Menu.Item key="1"><span><Icon
                                    type="appstore"/><span>Dashboard</span></span></Menu.Item>

                                {isAdmin &&
                                <Menu.Item key="3"><span><Icon type="team"/><span>All Users</span></span></Menu.Item>
                                }
                                <Menu.Item key="2"><span><Icon type="upload"/><span>Upload</span></span></Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout style={{
                            background: 'linear-gradient(to top, rgb(5, 19, 63) 0%, rgb(143, 51, 74) 100%)',
                            padding: '25px 24px 24px',
                            marginLeft: marginLeft,
                            marginTop: 64
                        }}>
                            <Content style={{
                                padding: 24,
                                minHeight: 280,
                                margin: '0 16px'
                            }}

                            >

                                <Router history={history}>

                                    <Route exact path="/home/student"
                                           render={(props) => <div><StudentDashboard/></div>}
                                    />
                                    <Route exact path="/home/instructor"
                                           render={(props) => <div><InstructorDashboard/></div>}
                                    />

                                    <Route exact path="/home/upload"
                                           render={(props) => <div><UploadComponent/></div>}
                                    />

                                    <Route exact path="/home/allUsers"
                                           render={(props) => <div><UserTable/></div>}
                                    />
                                    <Route exact path="/home/enroll"
                                           render={(props) => <div><ISchedule/></div>}
                                    />
                                    <Route exact path="/home/iSchedule"
                                           render={(props) => <div><ISchedule/></div>}
                                    />
                                    <Route exact path="/home/iDetails"
                                           render={(props) => <div><IDetails/></div>}
                                    />
                                    {/*<Route exact path="/home/allFiles"*/}
                                    {/*render={(props) => <ViewFile {...props} fileType={"All Files"}*/}
                                    {/*data={simpleReducer.result}*/}
                                    {/*loading={this.state.loading}*/}
                                    {/*selfAddress={this.state.selfAddress}/>}*/}
                                    {/*/>*/}
                                    {/*<Route exact path="/home/receivedFiles"*/}
                                    {/*render={(props) => <ViewFile {...props} fileType={"Received Files"}*/}
                                    {/*data={simpleReducer.result}*/}
                                    {/*loading={this.state.loading}*/}
                                    {/*selfAddress={this.state.selfAddress}/>}*/}
                                    {/*/>*/}
                                    {/*<Route exact path="/home/sentFiles"*/}
                                    {/*render={(props) => <ViewFile {...props} fileType={"Sent Files"}*/}
                                    {/*data={simpleReducer.result}*/}
                                    {/*loading={this.state.loading}*/}
                                    {/*selfAddress={this.state.selfAddress}/>}*/}
                                    {/*/>*/}
                                    {/*<Route exact path="/home/myFiles"*/}
                                    {/*render={(props) => <ViewFile {...props} fileType={"My Files"}*/}
                                    {/*data={simpleReducer.result}*/}
                                    {/*loading={this.state.loading}*/}
                                    {/*selfAddress={this.state.selfAddress}/>}*/}
                                    {/*/>*/}

                                    {/*<Route exact path="/home/newFile" component={NewFile}/>*/}
                                    {/*<Route exact path="/home/profile" component={Profile}/>*/}
                                    {/*<Route exact path="/home/dashboard" component={Analytic}/>*/}
                                    {/*<Route path="/file" component={FileDetailed}/>*/}

                                </Router>

                            </Content>
                            <Footer style={{
                                textAlign: 'center', background: 'none',
                                color: 'white'
                            }}>
                                DropBox Prototype using AWS services © San Jose State University
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {simpleReducer} = state;
    return {
        simpleReducer
    };
}

export default connect(mapStateToProps)(homePage);