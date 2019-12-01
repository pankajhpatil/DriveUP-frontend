import React, { Component } from 'react';
import {
    Form, Button, Table, DatePicker, Option, Rate, Checkbox, Col, Row,Descriptions
} from 'antd';
import { message } from "antd/lib/index";

class SummaryComponent extends Component{

    state = {
        timetable:[],
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    }

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);

        if(Array.isArray(this.state.selectedRowKeys) && this.state.selectedRowKeys.length!==0){
            this.props.lastCallBack(this.state.selectedRowKeys,this.state.timetable);
        }
        else{
            message.error('Please select at least one schedule');
        }
      };

    render(){

        const columns = [
            {
                title: 'Instructor Name',
                dataIndex: 'iusername'         
            },
            {
                title: 'Date',
                dataIndex: 'sdate'         
            },
            {
                title: 'Available Time slot',
                dataIndex: 'slot'         
            }
        ];

        const { selectedSchedules, planSummary,tableData } = this.props;
        const { loading, selectedRowKeys } = this.state;

        let plan = {};

        if(planSummary.plan === 'a'){
            plan.des='Basic plan';
            plan.title='4 Session plan';
            plan.charge='$50/Session';
            plan.amount='$200.00';
            plan.official='$180.00';

        }else if(planSummary.plan === 'b'){
            plan.des='Premium plan';
            plan.title='6 Session plan';
            plan.charge='$40/Session';
            plan.amount='$240.00';
            plan.official='$220.00';

        }else if(planSummary.plan === 'c'){
            plan.des='Gold plan';
            plan.title='10 Session plan';
            plan.charge='$30/Session';
            plan.amount='$300.00';
            plan.official='$280.00';

        }

        let timetable=[];

        for(var keys in selectedSchedules){
            let temp = tableData[keys];
            if(planSummary.slots.includes('slot0810') && temp.slot0810 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot1- 8am-10am'});
            }
            if(planSummary.slots.includes('slot1012') && temp.slot1012 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot2- 10am-12pm'});
            }
            if(planSummary.slots.includes('slot1214') && temp.slot1214 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot3- 12pm-2pm'});
            }
            if(planSummary.slots.includes('slot1416') && temp.slot1416 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot4- 2pm-4pm'});
            }
            if(planSummary.slots.includes('slot1618') && temp.slot1618 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot5- 4pm-6pm'});
            }
            if(planSummary.slots.includes('slot1820') && temp.slot1820 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot6- 6pm-8pm'});
            }
            if(planSummary.slots.includes('slot2022') && temp.slot2022 === 'Y'){
                timetable.push({iusername:temp.iusername , sdate:temp.sdate, slot:'Slot7- 8pm-10pm'});
            }
        }

        if(this.state.timetable.length === 0){
            this.setState({
                timetable:timetable
            });
        }
        
        const hasSelected = this.props.score+1 > selectedRowKeys.length > 0;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return(
            <div>
                <h4 className="alignCenter">Enrollment Summary</h4>
                <Descriptions
                    title="Plan Summary"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                >
                <Descriptions.Item label="Plan">{plan.des}</Descriptions.Item>
                <Descriptions.Item label="Description">{plan.title}</Descriptions.Item>
                <Descriptions.Item label="Charges">{plan.charge}</Descriptions.Item>
                <Descriptions.Item label="Amount">{plan.amount}</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official">{plan.official}</Descriptions.Item>
                </Descriptions>
                <br/>
                <h5 className="alignCenter">According to your plan, select the most suitable {this.props.score} Slots as per availability.</h5>

                <div className="table">
                    <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        Confirm
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Select ${this.props.score} convenient slots`: `Selected ${selectedRowKeys.length} items. You selected ${this.props.score} session plan`}
                    </span>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={timetable} />
                </div>
            </div>
        )
    }
}

export default SummaryComponent;