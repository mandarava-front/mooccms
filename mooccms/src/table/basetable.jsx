import React from "react";
import { Card, Table } from "antd";
// import axios from "axios";
import axios from "../packageMethod/method";
import { Modal } from "antd";

export default class BaseTable extends React.Component {
  state = {};
  componentDidMount() {
    const data = [
      {
        id: "0",
        key: 1,
        username: "Jack",
        sex: "1",
        state: "勤",
        birth: "2020-02-11",
        time: "8:25:62",
        address: "背景",
      },
    ];
    data.map((item, index) => {
      item.key = index;
    });

    this.require();
    this.setState({
      dataSource: data,
    });
  }

  require = () => {
    axios
      .ajax({
        url: "/table-list",
        data: {
          params: {
            page: 1,
          },
        },
      })
      .then((res) => {
        if (res.code == 0) {
          res.data.map((item, index) => {
            item.key = index;
          });
          this.setState({
            dataSource2: res.data,
          });
        }
      });
  };
  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record,
    });

    Modal.info({
      title: "信息",
      content: `用户名：${record.username}`,
    });
  };
  handleDelete = () => {
    let rows = this.state.selectedRows;
    let ids = this.state.selectedIds;
    Modal.confirm({
      title: "删除",
      content: `去欸的那个删除${rows}`,
      onOk: () => {
        console.log(ids);
      },
    });
  };
  render() {
    const columns = [
      { title: "id", dataIndex: "id" },
      { title: "用户名", dataIndex: "username" },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex == 1 ? "男" : "女";
        },
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let config = {
            1: "咸鱼一条",
            2: "风华浪子",
            3: "阿里达能",
            4: "牛客",
            5: "妻孥AN",
            6: "设备的私家车",
          };
          return config[state];
        },
      },
      { title: "生日", dataIndex: "birth" },
      { title: "时间", dataIndex: "time" },
      { title: "地址", dataIndex: "address" },
    ];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
    };
    const rowCheckSelection = {
      type: "checkbox",
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        let ids = [];
        selectedRows.map((item) => {
          ids.push(item.id);
        });
        this.setState({
          selectedRowKeys,
          selectedIds: ids,
          selectedRows,
        });
      },
    };
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          ></Table>
        </Card>
        <Card title="动态数据表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          ></Table>
        </Card>
        <Card title="mock-单选 ">
          <Table
            bordered
            columns={columns}
            rowSelection={rowSelection}
            dataSource={this.state.dataSource2}
            pagination={false}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                },
              };
            }}
          ></Table>
        </Card>
        <Card title="mock-复选 ">
          <div>
            <button onClick={this.handleDelete}>删除</button>
          </div>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
            rowSelection={rowCheckSelection}
          ></Table>
        </Card>
        {/* <Card title="分页 ">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={}
            rowSelection={rowCheckSelection}
          ></Table>
        </Card> */}
      </div>
    );
  }
}
