const Footer = () => {
  return (
    <>
      <footer>
        <div className="top-footer py-4">
          <div className="container-pre container container_layout">
            <div className="row">
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <h4 className="font-weight-bold text-uppercase m-sm-0">
                  Đăng kí nhận ưu đãi từ Sneakerhome
                </h4>
              </div>
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <input
                  id="contactFormEmail"
                  type="email"
                  name="contact[email]"
                  className=""
                  placeholder="Your Email(required)"
                  required=""
                />
                <input
                  type="button"
                  className="text-uppercase font-weight-bold btn-dk"
                  value="signup"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="content-footer tp_footer">
          <div className="container-pre">
            <div className="row">
              <div className="col-md-3 footer-col d-none d-md-block logo-footer text-center font-weight-bold text-uppercase position-relative title beforPre">
                <a href="javascript:void(0);" className="d-inline-block">
                  <img
                    className="lazyload"
                    data-sizes="auto"
                    src="https://pos.nvncdn.net/eb9ddb-116318/store/20220301_M6gPcIeoQ8cwvJrojaQ7a688.png"
                    data-src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_e7lyZhiE74Tbp8i0K393FsLq.png"
                    alt="5"
                  />
                </a>
              </div>
              <div className="col-md-3 col-6 footer-col font-weight-bold text-uppercase position-relative title beforPre">
                <h5 className="font-weight-bold text-uppercase position-relative title beforPre">
                  thông tin liên hệ
                </h5>
                <div className="footer-col__content">
                  <p>Địa chỉ: 102 Thái Thịnh, Đống Đa, Hà Nội</p>
                  <p>Email: contact@nhanh.vn</p>
                  <p>Hotline: 1900.2818</p>
                </div>
              </div>
              <div className="col-md-2 col-6 footer-col font-weight-bold text-uppercase position-relative title beforPre">
                <h5 className="font-weight-bold text-uppercase position-relative title beforPre">
                  chính sách
                </h5>
                <div className="footer-col__content">
                  <p>
                    <a href="/tra-cuu-don-hang/">Tra cứu đơn hàng</a>
                  </p>
                  <p>Hotline hỗ trợ đơn hàng: 1900.2818</p>
                </div>
              </div>
              <div className="col-md-2 col-6 footer-col font-weight-bold text-uppercase position-relative title beforPre">
                <h5 className="font-weight-bold text-uppercase position-relative title beforPre">
                  hỗ trợ
                </h5>
                <div className="footer-col__content">
                  <p>
                    <a href="http://nhanh.vn/tuyen-dung-nc4.html">Tuyển dụng</a>
                  </p>
                  <p>
                    <a href="http://nhanh.vn/gioi-thieu">Giới thiệu</a>
                  </p>
                </div>
              </div>
              <div className="col-md-2 col-6 footer-col font-weight-bold text-uppercase position-relative title beforPre">
                <h5 className="font-weight-bold text-uppercase position-relative title beforPre">
                  mạng xã hội
                </h5>
                <div className="footer-col__content">
                  <p>
                    <a href="http://www.facebook.com/nhanh.vn/">Facebook</a>
                  </p>
                  <p>
                    <a href="http://www.instagram.com/nhanh_vn/">Instargram </a>
                  </p>
                  <p>
                    <a href="http://www.youtube.com/channel/UCygUZCwRtm9mqcijF9phxkQ">
                      Youtube
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
