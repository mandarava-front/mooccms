import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
//导入组件
import { Card, Form, Input, Button, message, Checkbox, Icon } from "antd";
const FormItem = Form.Item;
class Login extends React.Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.username}`);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Card>
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名" />
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码" />
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card style={{ width: "400px" }}>
          <Form title="横向登录框">
            <FormItem>
              {getFieldDecorator("username", {
                initialValue: "jack",
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
            <FormItem>
              {getFieldDecorator("password", {
                initialValue: "123456",
                rules: [],
              })(
                <Input prefix={<Icon type="lock" />} placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>
                登录
              </Button>
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
              <a href="#">忘记密码</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Login);
