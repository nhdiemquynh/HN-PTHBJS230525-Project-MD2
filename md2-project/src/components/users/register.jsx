import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';

const RegistrationForm = () => {
  return (
    <>
    <main className="main-index">
      <div className="layout-account">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-xs-12 wrapbox-heading-account">
              <div className="header-page clearfix">
                <h1>Sign up</h1>
              </div>
            </div>
            <div className="col-md-6 col-xs-12 wrapbox-content-account ">
              <div className="userbox">
                <form accept-charset='UTF-8' action='/account/register' id='create_customer'
                  method='post'>
                  <input name='form_type' type='hidden' value='create_customer' />
                  <input name='utf8' type='hidden' value='✓' />
                  <div id="last_name" className="clearfix large_form">
                    <label for="last_name" className="label icon-field"><i
                        className="icon-login icon-user "></i></label>
                    <input required type="text" value="" name="customer[last_name]" placeholder="Last Name"
                      id="last_name" className="text" size="30" />
                  </div>
                  <div id="first_name" className="clearfix large_form">
                    <label for="first_name" className="label icon-field"><i
                        className="icon-login icon-user "></i></label>
                    <input required type="text" value="" name="customer[first_name]"
                      placeholder="First Name" id="first_name" className="text" size="30" />
                  </div>

                  <div id="gender" className="clearfix large_form">
                    <input id="radio1" type="radio" value="0" name="customer[gender]" />
                    <label for="radio1">Female</label>
                    <input id="radio2" type="radio" value="1" name="customer[gender]" />
                    <label for="radio2">Male</label>
                  </div>
                  <div id="birthday" className="clearfix large_form">
                    <label for="birthday" className="label icon-field"><i
                        className="icon-login icon-envelope "></i></label>
                    <input type="text" value="" placeholder="mm/dd/yyyy" name="customer[birthday]"
                      id="birthday" className="text" size="30" />
                  </div>
                  <div id="email" className="clearfix large_form">
                    <label for="email" className="label icon-field"><i
                        className="icon-login icon-envelope "></i></label>
                    <input required type="email" value="" placeholder="Email" name="customer[email]"
                      id="email" className="text" size="30" />
                  </div>
                  <div id="password" className="clearfix large_form">
                    <label for="password" className="label icon-field"><i
                        className="icon-login icon-shield "></i></label>
                    <input required type="password" value="" placeholder="Password"
                      name="customer[password]" id="password" className="password text" size="30" />
                  </div>
                  <div className="clearfix action_account_custommer">
                    <div className="action_bottom button dark">
                      <input className="btn btn-dark" type="submit" value="Sign up" />
                    </div>
                  </div>
                  <div className="clearfix req_pass">
                    <a className="come-back" href="/"><i className="fa fa-long-arrow-left"></i> Back home</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  );
};

export default RegistrationForm;