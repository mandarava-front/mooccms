import React from "react";
import { Card, Table } from "antd";
// import axios from "axios";
import axios from "../packageMethod/method";
import { Modal } from "antd";

export default class HeighTable extends React.Component {
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

  render() {
    const columns = [
      { title: "id", dataIndex: "id", width: 80 },
      { title: "用户名", dataIndex: "username", width: 80 },
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
    const columns2 = [
      { title: "id", fixed: "left", dataIndex: "id", width: 80 },
      { title: "用户名", dataIndex: "username", width: 80 },
      {
        title: "性别",
        dataIndex: "sex",
        width: 50,
        render(sex) {
          return sex == 1 ? "男" : "女";
        },
      },
      {
        title: "状态",
        dataIndex: "state",
        width: 80,
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
      { title: "生日", dataIndex: "birth", width: 120 },
      { title: "时间", dataIndex: "time", width: 120 },
      { title: "地址", dataIndex: "address", width: 120 },
      { title: "生日", dataIndex: "birth", width: 120 },
      { title: "时间", dataIndex: "time", width: 120 },
      { title: "地址", dataIndex: "address", width: 120 },
      { title: "生日", dataIndex: "birth", width: 120 },
      { title: "时间", dataIndex: "time", width: 120 },
      { title: "地址", dataIndex: "address", width: 120 },
      { title: "生日", dataIndex: "birth", width: 120 },
      { title: "时间", dataIndex: "time", width: 120 },
      { title: "地址", dataIndex: "address", width: 120 },
    ];
    return (
      <div>
        <Card title="高级表格-头部固定">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
            scroll={{ y: 240 }}
          ></Table>
        </Card>
        <Card title="高级表格-两端固定">
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={false}
            scroll={{ x: 1600 }}
          ></Table>
        </Card>
        <Card title="高级表格-操作按钮">
          <Table
            bordered
            columns={columns2}
            dataSource={this.state.dataSource2}
            pagination={false}
            scroll={{ x: 1600 }}
          ></Table>
        </Card>
      </div>
    );
  }
}
