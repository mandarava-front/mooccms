import React from "react";
import { Card, Table, Form, Select, Input, Icon } from "antd";
// import axios from "axios";
import axios from "../packageMethod/method";
import { Modal } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;
export default class City extends React.Component {
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
      {
        title: "城市ID",
        dataIndex: "id",
      },
      {
        title: "城市名称",
        dataIndex: "name",
      },
      {
        title: "营运模式",
        dataIndex: "op_mode",
      },
      {
        title: "用车模式",
        dataIndex: "mode",
      },
      {
        title: "授权加盟商",
        dataIndex: "franchisee_name",
      },
      {
        title: "城市管理员",
        dataIndex: "city_admins",
      },
      {
        title: "城市开通时间",
        dataIndex: "open_time",
      },
      {
        title: "操作时间",
        dataIndex: "update_time",
      },
      {
        title: "操作人",
        dataIndex: "sys_user_name",
      },
    ];
    return (
      <div>
        <Card title="城市管理">
          <FilterForm />
        </Card>
        <div>
          <Table
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          ></Table>
        </div>
      </div>
    );
  }
}

class FilterForm extends React.Component {
  componentDidMount() {}
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="城市">
          {getFieldDecorator("city_id")(
            <Select placeholder="请选择">
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
              <Option value="3">广州市</Option>
              <Option value="4">深圳市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="用车模式">
          {getFieldDecorator("p_mode")(
            <Select placeholder="全部">
              <Option value="1">全部</Option>
              <Option value="2">知道那个停车的</Option>
              <Option value="3">禁停区模式</Option>
              <Option value="4">深圳市</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="营运模式">
          {getFieldDecorator("op_mode")(
            <Select placeholder="全部">
              <Option value="1">全部</Option>
              <Option value="2">自营</Option>
              <Option value="3">加盟</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("username")(
            <Input prefix={<Icon type="user" />} placeholder="请输入用户名" />
          )}
        </FormItem>
      </Form>
    );
  }
}
FilterForm = Form.create()(FilterForm);
// class Form1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <Card>
//           <FormItem>
//             我是说较长时间
//             <Select placeholder="全部">
//               <Option value="1">全部</Option>
//               <Option value="2">自营</Option>
//               <Option value="3">加盟</Option>
//             </Select>
//           </FormItem>
//         </Card>
//       </div>
//     );
//   }
// }
