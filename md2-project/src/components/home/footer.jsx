const Footer = () => {
  return (
    <>
      <section className="section_subscribe">
        <div className="container-fluid">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <h4 className="title">
              Subscribe to us!
            </h4>
            <p>Sign up to receive LIBÉ’s new arrival <br />
              updates, sales, exclusive content, events and more!
            </p>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="form_newsletter">
              <form accept-charset='UTF-8' action='/'
                className='contact-form' method='post'>
                <input name='form_type' type='hidden' value='customer' />
                <input name='utf8' type='hidden' value='✓' />

                <div className="input-group">
                  <input type="hidden" id="contact_tags" name="contact[tags]"
                    value="khách hàng tiềm năng, bản tin" />
                  <input required type="email" value="" placeholder="Your email" name="contact[email]"
                    aria-label="Email Address" />
                  <button type="submit" className="">Submit</button>
                </div>

                <input id='7909e61f0e7f418884dc6f6dcba4ad4c' name='g-recaptcha-response' type='hidden' />
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="main-footer" id="fter-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                <div className="footer-col footer-block">
                  <h4 className="footer-title">
                    About us
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul>

                      <li className="item">
                        <a href="/news" title="Our Story">Our Story</a>
                      </li>

                      <li className="item">
                        <a href="/news" title="LIBÉ Stores">LIBÉ Stores</a>
                      </li>

                      <li className="item">
                        <a href="/news" title="Join LIBÉ Team">Join LIBÉ Team</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                <div className="footer-col footer-block">
                  <h4 className="footer-title">
                    Help & Information
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul>
                      <li className="item">
                        <a href="/"
                          title="LIBÉ GIRLS CLUB REWARD 2023">LIBÉ GIRLS CLUB REWARD 2023</a>
                      </li>

                      <li className="item">
                        <a href="/news" title="LIBÉcommunity">LIBÉcommunity</a>
                      </li>

                      <li className="item">
                        <a href="/news"
                          title="Exchange & Return Policy">Exchange & Return Policy</a>
                      </li>

                      <li className="item">
                        <a href="/news" title="How To Order">How To Order</a>
                      </li>

                      <li className="item">
                        <a href="/" title="Size Guide">Size Guide</a>
                      </li>

                      <li className="item">
                        <a href="/" title="Shipping">Shipping</a>
                      </li>

                      <li className="item">
                        <a href="/" title="Payment Method">Payment
                          Method</a>
                      </li>

                      <li className="item">
                        <a href="/" title="Privacy Policy">Privacy
                          Policy</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                <div className="footer-col footer-block">
                  <h4 className="footer-title">
                    Customer Service
                  </h4>
                  <div className="footer-content toggle-footer">
                    <ul>
                      <li className="item">
                      </li>
                      <li className="item">
                        <a href="tel:(+84) 909 408 169" title="">(+84) 909 408 169</a>
                      </li>
                      <li className="item">
                        <a href="mailto:support@libe.clothing" title="">support@libe.clothing</a>
                      </li>
                    </ul>
                  </div>

                  <div className="social-list2 hidden-xs">
                    <a href="/" className="noeall">
                      <img src={"../../styles/assets/facee9c9.png"} />
                    </a>

                    <a href="/" className="">
                      <img src={"../../styles/assets/instae9c9.png"} />
                    </a>

                    <a href="/" className="fa fa">
                      <img src={"../../styles/assets/maille9c9.png"} />
                    </a>
                  </div>

                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                <div className="footer-col footer-content1">
                  <h4 className="footer-title">
                    &copy; LIBÉ
                  </h4>
                  <div className="footer-content">
                    GRMNT Limited Company Business Registration No. 0315840235 issued on 09/08/2019 by
                    department of Planning and Investment HCMC.
                    <br />
                    <div className="logo-bct">
                      <a href="/" target="_blank">
                        <img alt='' title='' src={"../../styles/assets/dathongbao111e9c9.png"} width="150" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-footer text-center">
            <div className="container-fluid">

              <div className="social-list2 hidden-lg hidden-md hidden-sm" style={{marginBottom: "20px"}}>
                <a href="/" className="noeall">
                  <img src={"../../styles/assets/facee9c9.png"} />
                </a>

                <a href="/" className="">
                  <img src={"../../styles/assets/instae9c9.png"} />
                </a>

                <a href="/" className="fa fa">
                  <img src={"../../styles/assets/maille9c9.png"} />
                </a>
              </div>

              <p>Copyright &copy; 2023 LIBÉ</p>

            </div>
          </div>
        </div>
      </footer>

      <div className="back-to-top hidden">
        <a href="javascript:void(0);">
          <div className="btt-back">
            <span className="btt-label-back">back to top</span>
            <span className="btt-icon-back"><i className="fa fa-long-arrow-up"></i></span>
          </div>
        </a>
      </div>
    </>
  );
};
export default Footer;
