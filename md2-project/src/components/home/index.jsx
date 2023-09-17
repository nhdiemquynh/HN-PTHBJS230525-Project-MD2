import { Carousel } from "antd";
import { getListProducts, getCategory } from "../data";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [dataProduct, setDataProduct] =  useState([]);
  const [page, setPage] = useState(1);
  const [numberPage, setNumberPage] = useState(10);
  const [categories, setCategories] = useState([]);

  const getProucts = async (page, numberPage) => {
    const result = await getListProducts(page, numberPage);
    setDataProduct(result);
  }

  const getCategories = async () => {
    const result = await getCategory({});
    setCategories(result);
  }

  useEffect(() => {
    getProucts(page, numberPage);
  }, [page, numberPage]);

  useEffect(() => {
    getCategories();
  }, []);

  const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    marginXXS: 4
  };


  return (
    <>
    <div>
      <main className=" main-index">
        <section id="catindexnew">
          <div className="">
            <div className="flexnew">
              <div>
                <img src={"../../styles/assets/homepage-img1e9c9.jpg"} alt=""></img>
                <div className="shopinfo">
                  <a href="/shop">SHOP NOW</a>
                </div>
              </div>

              <div>
                <div className="flexsmall">
                  <div>
                    <img src={"../../styles/assets/homepage-img2e9c9.jpg"} alt=""></img>
                    <div className="shopinfo">
                      <a href="/category/1">LIBÉGOODS</a>
                    </div>
                  </div>

                  <div>
                    <img src={"../../styles/assets/homepage-img3e9c9.jpg"} alt=""></img>
                    <div className="shopinfo">
                      <a href="/category/2">ACCESSORIES</a>
                    </div>
                  </div>

                  <div>
                      <img src={"../../styles/assets/homepage-img4e9c9.jpg"} alt=""></img>
                    <div className="shopinfo">
                      <a href="/category/3">STORES</a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home_list_story">
          <div className="container-fluid wrapper_story">
            <div className="row">
              <div className="col-xs-12 wrapper_text">
                <div className="mz-block-float mz-home-marquee-wrapper">
                  <a href="/category/1">
                    <div className="mz-home-marquee blackColor">
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right"></i>
                      <span>NEW ARRIVALS</span>
                      <i className="fa fa-arrow-right font-weight-bold"></i><i
                        className="fa fa-arrow-right font-weight-bold"></i>
                      <span className="font-weight-bold">NEW ARRIVALS</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div id="home-slider" className="carousel slide" data-bs-ride="true">
          <div id="homepage_slider" className="carousel-inner">
            <div className="item carousel-item active">
              <a href="#">
                <img title="new arrivals season " alt="new arrivals season " src={"../../styles/assets/slideshow_1e9c9.jpg"}></img>
              </a>
            </div>

            <div className="item carousel-item">
              <a href="#">
                <img title="new arrivals summer season " alt="new arrivals summer season " src={"../../styles/assets/slideshow_2e9c9.jpg"}></img>
              </a>
            </div>

            <div className="item carousel-item">
              <a href="#">
                <img title="new look book for summer " alt="new look book for summer " src={"../../styles/assets/slideshow_3e9c9.jpg"}></img>
              </a>
            </div>

            <div className="item carousel-item">
              <a href="#">
                <img title="new arrivals" alt="new arrivals" src={"../../styles/assets/slideshow_4e9c9.jpg"}></img>
              </a>
            </div>

          </div>
        </div>

        <section className="home_list_story">
          <div className="container-fluid wrapper_story">
            <div className="row ">
              <div className="col-sm-12 col-xs-12 item-1 flex-item">
                <div className="image">
                  <img className="img-normal" src={"../../styles/assets/home_list_story_img_1e9c9.jpg"}></img>
                  <img className="img-hover" src={"../../styles/assets/home_list_story_img_1_hovere9c9.jpg"}></img>
                </div>
                <div className="content text-center">
                  <div className="title">
                    <h5>
                      LIBÉRATION GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY T9Ự DO CỦA GEN Z
                    </h5>
                    <p className="libety">#LIBE-3min</p>
                  </div>
                  <div className="btn-action">
                    <a
                      href="/news/3">View
                      story</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 item-2 flex-item">
                <div className="content text-center">
                  <div className="title">
                    <h5>
                      SUMMER SOUVENIRS - NHỮNG KÝ ỨC NGÀY HÈ
                    </h5>
                    <p className="libety">#LIBE-3min</p>
                  </div>
                  <div className="btn-action">
                    <a href="/news/3">View
                      story</a>
                  </div>
                </div>
                <div className="image">
                  <img className="img-normal" src={"../../styles/assets/home_list_story_img_2e9c9.jpg"}></img>
                  <img className="img-hover" src={"../../styles/assets/home_list_story_img_2_hovere9c9.jpg"}></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-collection">
          <div className="wrapper-heading-home text-center">
            <div className="container-fluid">
              <div className="site-animation">
                <h2>#LIBEONME</h2>
              </div>
              <div className="content-sectionbanner">
                <span>
                  We love seeing ALL of you beautiful, unique people. Keep sharing your amazing selves,
                  with @libeworkshop and hashtag #LIBEonme!
                </span>
              </div>
            </div>
          </div>
          <div className="wrapper-collection-1">
            <div className="container-fluid carousel slide">
              <div className="clearfix content-product-list carousel-inner" id="fifth-banner-slide">
                <Carousel {...props}>
                  {dataProduct?.length > 0 ? dataProduct.map((product) => <>
                    <div className="animation-tran carousel-item active" style={{padding: '0px 5px'}}>
                    <div className="product-block product-resize site-animation" data-anmation="1">
                      <div className="product-img">
                        <a href={"/products/" + product?.id}
                          title="Group 1" className="image-resize">
                          <img className="img-loop" alt="Group 1" src={product?.image} />
                          <div className="product-detail clearfix">
                            <div className="box-pro-detail">
                              <h6 className="pro-name">
                                {product.name}
                              </h6>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  </>) : ''}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};
export default Homepage;
