import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../../styles/login.css";

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    // <Form
    //   name="normal_login"
    //   className="login-form"
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    // >
    //   <Form.Item
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your Username!',
    //       },
    //     ]}
    //   >
    //     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    //   </Form.Item>
    //   <Form.Item
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your Password!',
    //       },
    //     ]}
    //   >
    //     <Input
    //       prefix={<LockOutlined className="site-form-item-icon" />}
    //       type="password"
    //       placeholder="Password"
    //     />
    //   </Form.Item>
    //   <Form.Item>
    //     <Form.Item name="remember" valuePropName="checked" noStyle>
    //       <Checkbox>Remember me</Checkbox>
    //     </Form.Item>

    //     <a className="login-form-forgot" href="">
    //       Forgot password
    //     </a>
    //   </Form.Item>

    //   <Form.Item>
    //     <Button type="primary" htmlType="submit" className="login-form-button">
    //       Log in
    //     </Button>
    //     Or <a href="/account/register">register now!</a>
    //   </Form.Item>
    // </Form>
    <>
    <main className="main-index">
      <div className="layout-account">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-xs-12 wrapbox-heading-account">
              <div className="header-page clearfix">
                <h1>Login</h1>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-content-account">
              <div id="customer-login">
                <div id="login" className="userbox">
                  <div className="accounttype">
                    <h2 className="title"></h2>
                  </div>
                  <form accept-charset='UTF-8' action='/account/login' id='customer_login' method='post'>
                    <input name='form_type' type='hidden' value='customer_login' />
                    <input name='utf8' type='hidden' value='✓' />
                    <div className="clearfix large_form">
                      <label for="customer_email" className="icon-field"><i
                          className="icon-login icon-envelope "></i></label>
                      <input required type="email" value="" name="customer[email]" id="customer_email"
                        placeholder="Email" className="text" />
                    </div>
                    <div className="clearfix large_form">
                      <label for="customer_password" className="icon-field"><i
                          className="icon-login icon-shield"></i></label>
                      <input required type="password" value="" name="customer[password]"
                        id="customer_password" placeholder="Password" className="text" size="16" />
                    </div>
                    <div className="clearfix action_account_custommer">
                      <div className="action_bottom button dark">
                        <input className="btn btn-signin btn-dark" type="submit" value="Login" />
                      </div>
                      <div className="req_pass">
                        <a href="#" onclick="showRecoverPasswordForm();return false;">Forgot
                          password?</a><br/>
                        or <a href="/account/register" title="Đăng ký">Sign up</a>
                      </div>
                    </div>
                  </form>
                </div>
                <div id="recover-password" style={{display: 'none'}} className="userbox">
                  <div className="accounttype">
                    <h2>Password recovery</h2>
                  </div>
                  <form accept-charset='UTF-8' action='/forgotpass' method='post'>
                    <input name='form_type' type='hidden' value='recover_customer_password' />
                    <input name='utf8' type='hidden' value='✓' />
                    <div className="clearfix large_form">
                      <label for="email" className="icon-field"><i
                          className="icon-login icon-envelope "></i></label>
                      <input type="email" value="" size="30" name="email" placeholder="Email"
                        id="recover-email" className="text" />
                    </div>
                    <div className="clearfix action_account_custommer">
                      <div className="action_bottom button dark">
                        <input className="btn" type="submit" value="Send" />
                      </div>
                      <div className="req_pass">
                        <a href="#" >Cancel</a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default NormalLoginForm;