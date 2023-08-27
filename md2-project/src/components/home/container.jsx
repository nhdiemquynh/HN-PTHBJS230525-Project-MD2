import { dataProduct } from "../data";

const Container = () => {

  return (
    <>
      <div className="container container_layout">
        <div class="title-container">
          <div class="title-line"></div>
          <p class="name-title">TIN TỨC</p>
          <div class="title-line"></div>
        </div>

        <div className="row bannerNews-home">
          <div className="col-3">
            <div className="bannerNews-home__mid-content position-relative" id="image_hover">
              <a
                href="javascript:void(0);"
                className="d-block position-absolute"
              >
                <img
                  src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_VBDHBJlITvvfnLSDA82zbAfd.png"
                  alt="Sale"
                />
              </a>
              <a
                href="javascript:void(0);"
                className="text-center bannerNews-home__mid-name d-block position-absolute text-uppercase font-weight-bold d-inline-block"
              >
                Sale
              </a>
            </div>
          </div>
          <div className="col-6 bannerNews-home__mid">
            <div className="bannerNews-home__mid-content position-relative" id="image_hover">
              <a href="https://nhanh.vn/" className="d-block position-absolute">
                <img
                  src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_mcaT3cqwUAgK67DDOHbpAqox.png"
                  alt="About us"
                />
              </a>
              <a
                href="https://nhanh.vn/"
                className="text-center bannerNews-home__mid-name d-block position-absolute text-uppercase font-weight-bold d-inline-block"
              >
                About us
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="bannerNews-home__mid-content position-relative" id="image_hover">
              <a
                href="/accessories-pc570536.html"
                className="d-block position-absolute"
              >
                <img
                  src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_VBDHBJlITvvfnLSDA82zbAfd.png"
                  alt="Super Sale"
                />
              </a>
              <a
                href="/accessories-pc570536.html"
                className="text-center bannerNews-home__mid-name d-block position-absolute text-uppercase font-weight-bold d-inline-block"
              >
                Super Sale
              </a>
            </div>
          </div>
        </div>

        <div class="title-container">
          <div class="title-line"></div>
          <p class="name-title">NEW ARRIVALS</p>
          <div class="title-line"></div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          {dataProduct.map((item, index) => (
            <div class="col-md-3" key={index}>
              <div class="card card_product">
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title name_product">{item.name}</h6>
                  <h6 class="card-title name_product">{item.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="button_seeall">
          <button type="button" class="btn btn-outline-secondary">
            Xem tất cả
          </button>
        </div>
        
      </div>
    </>
  );
};
export default Container;
