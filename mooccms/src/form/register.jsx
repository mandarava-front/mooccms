import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
//导入组件
import {
  Card,
  Form,
  Input,
  Button,
  message,
  Checkbox,
  Icon,
  InputNumber,
  Radio,
  Select,
  DatePicker,
  Switch,
  TimePicker,
  Upload,
} from "antd";
import moment from "moment";
import { get } from "lodash";
import TextArea from "antd/lib/input/TextArea";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
// const TextArea = Input.TextArea;
// const TextArea = Input.TextArea;
class Register extends React.Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     message.success(`${userInfo.username}`);
    //   }
    // });
    console.log(JSON.stringify(userInfo));
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4,
      },
      wrapperCol: {
        xs: 24,
        sm: 12,
      },
    };
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4,
        },
      },
    };
    const rowObject = { minRows: 4, maxRows: 6 };
    return (
      <div>
        <Card>
          <Form title="注册表单">
            <FormItem label="用户名" {...formItemLayout}>
              {getFieldDecorator("username", {
                initialValue: "",
                rules: [
                  { require: true, messahe: "用户名不能为空" },
                  { pattern: /^\w+$/g, message: "用户名必须为字母或数字" },
                  { min: 5, max: 10, message: "长度不在范围内" },
                ],
              })(
                <Input
                  prefix={<Icon type="user" />}
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("password", {
                initialValue: "",
                rules: [],
              })(
                <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
              )}
            </FormItem>

            <FormItem label="性别" {...formItemLayout}>
              {getFieldDecorator("sex", {
                initialValue: "1",
              })(
                <RadioGroup>
                  <Radio value="1">男</Radio>
                  <Radio value="2">女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {getFieldDecorator("age", {
                initialValue: 18,
              })(<InputNumber></InputNumber>)}
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {getFieldDecorator("state", {
                initialValue: "2",
              })(
                <Select>
                  <Option value="1">限于一条</Option>
                  <Option value="2">BUG调试器</Option>
                  <Option value="3">手机内存卡</Option>
                  <Option value="4">是你充值卡</Option>
                  <Option value="5">市场售价陈年旧事</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {getFieldDecorator("interest", {
                initialValue: ["2", "5"],
              })(
                <Select mode="multiple">
                  <Option value="1">限于一条</Option>
                  <Option value="2">BUG调试器</Option>
                  <Option value="3">手机内存卡</Option>
                  <Option value="4">是你充值卡</Option>
                  <Option value="5">市场售价陈年旧事</Option>
                  <Option value="6">限于一条</Option>
                  <Option value="7">BUG调试器</Option>
                  <Option value="8">手机内存卡</Option>
                  <Option value="9">是你充值卡</Option>
                  <Option value="10">市场售价陈年旧事</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {getFieldDecorator("switch", {
                valuePropName: "checked",
                initialValue: true,
              })(<Switch></Switch>)}
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {getFieldDecorator("birth", {
                initialValue: moment("2021-05-17"),
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {getFieldDecorator("birth", {
                initialValue: "北京市白点去温度变送器",
              })(<TextArea autoSize={rowObject} />)}
            </FormItem>
            <FormItem label="早期时间" {...formItemLayout}>
              {getFieldDecorator("moning", {})(<TimePicker />)}
            </FormItem>
            <FormItem label="上传头像" {...formItemLayout}>
              {getFieldDecorator("muser")(
                <Upload listType="picture-card">1111</Upload>
              )}
            </FormItem>
            <FormItem {...offsetLayout}>
              {getFieldDecorator("agree")(<Checkbox>是否同意协议</Checkbox>)}
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>
                注册
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Register);
