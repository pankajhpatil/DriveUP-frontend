import React, { Component } from 'react';
import { Icon , Table, Button} from 'antd';
import { message } from "antd/lib/index";

class SelectionComponent extends Component{

    state = {
        plan : this.props.plan,
        instructorList : this.props.instructorListFromParent,
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

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
            this.props.callbackToSelect(this.state.selectedRowKeys);
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
                title: 'Slot1 (8am-10am)',
                dataIndex: 'slot0810',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Slot2 (10am-12pm)',
                dataIndex: 'slot1012',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Slot3 (12pm-2pm)',
                dataIndex: 'slot1214',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Slot4 (2pm-4pm)',
                dataIndex: 'slot1416',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Slot5 (4pm-6pm)',
                dataIndex: 'slot1618',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Slot6 (6pm-8pm)',
                dataIndex: 'slot1820',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Slot7 (8pm-10pm)',
                dataIndex: 'slot2022',
                render: (text) => <div>
                { text==="Y" ? <Icon type="check" style={{color: '#3ebd04' }} />
                  : <Icon type="dash" />
                }</div>  
            },
            {
                title: 'Date',
                dataIndex: 'sdate'
            }
        ];

        const { loading, selectedRowKeys,instructorList } = this.state;
        const hasSelected = this.state.plan+1 > selectedRowKeys.length > 0;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };

        return (
            <div>
            <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                    Proceed
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Select ${this.state.plan} schedules`: `Selected ${selectedRowKeys.length} items. You selected ${this.state.plan} schedules plan`}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={instructorList} />
        </div>
        );
    }
}

export default SelectionComponent;