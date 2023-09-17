import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataProduct, getDetailtProduct, getRelatedsProduct } from "../data";
import NotFound404 from "../notFound404";
import { Carousel } from "antd";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [productRelateds, setProductRelateds] = useState([]);
  const [changeRelated, setChangeRelated] = useState([]);
  const getProduct = async () => {
    const result = await getDetailtProduct(productId);
    setProduct(result);
  }

  const getRelatedProduct = async (product) => {
    if (product != null) {
      const relatedProductId = product.related_id.split(',');
      const result = await getRelatedsProduct(relatedProductId, productId);
      setProductRelateds(result);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    getRelatedProduct(product);
  }, [product]);


  if (product == null) {
    return (<NotFound404></NotFound404>);
  }

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
      <main className="">
        <div id="product" className="productDetail-page">
          <div className="container-fluid">
            <div className="row breadcrumb-shop">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                <ol className="breadcrumb breadcrumb-arrows">
                  <li >
                    <a href="/" target="_self" >
                      <span >Tops</span>
                    </a>
                    <meta content="2" />
                  </li>

                  <li className="active">
                    <span >
                      <span >{product.name}</span>
                    </span>
                    <meta content="3" />
                  </li>
                </ol>
              </div>
            </div>
            <div className="row product-detail-wrapper">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row product-detail-main pr_style_01">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-gallery">
                      <div className="product-image-detail box__product-gallery scroll">
                        <ul id="sliderproduct" className="">
                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={product?.image}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>
                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.1_94a0ed039a304127a023a1e344150b54_master.jpg"}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>

                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.2_734770be7de6409fa2d90012a2ff4707_master.jpg"}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>

                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.3_49eb788b7280428fbaae77db339fc63b_master.jpg"}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>

                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.4_9321786914c34ade954fd093becf3b46_master.jpg"}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>

                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.5_53bd674ead1e4ffdba7d2e00707f7e84_master.jpg"}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>

                          <li className="product-gallery-item gallery-item">
                            <img className="product-image-feature"
                              src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.6_b3cd1537a62a4039b95dc2089e1ff78f_master.jpg"}
                              alt=" Black Back Hook Detailed Cami Top " />
                          </li>
                        </ul>
                        <div className="product-image__button">
                          <div id="product-zoom-in" className="product-zoom icon-pr-fix " aria-label="Zoom in"
                            title="Zoom in">
                            <span className="zoom-in" aria-hidden="true">
                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                                x="0px" y="0px" viewBox="0 0 36 36" style={{enableBackground: "new 0 0 36 36" , width: "30px"
                                , height: "30px" }} space="preserve">
                                <polyline points="6,14 9,11 14,16 16,14 11,9 14,6 6,6 " />
                                <polyline points="22,6 25,9 20,14 22,16 27,11 30,14 30,6 " />
                                <polyline points="30,22 27,25 22,20 20,22 25,27 22,30 30,30 " />
                                <polyline points="14,30 11,27 16,22 14,20 9,25 6,22 6,30 " />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12 product-content-desc" id="detail-product">
                    <div className="product-title">
                      <h1>{product.name}</h1>
                      <span id="pro_sku"><strong>SKU:</strong> 3002241015039</span>
                    </div>
                    <div className="product-price" id="price-preview">
                      <span className="pro-price">{product.price}</span>
                    </div>

                    <form id="add-item-form" action="/cart" method="post"
                      className="variants clearfix">
                      <div className="select clearfix">
                        <select id="product-select" name="id" style={{display: "none" }}>
                          <option value="1111303566">Black / Cotton / S - 250,000₫</option>
                          <option value="1111303567">Black / Cotton / M - 250,000₫</option>
                          <option value="1111303568">Black / Cotton / L - 250,000₫</option>
                        </select>
                      </div>
                      <div className="select-swatch clearfix">
                        <div id="variant-swatch-0" className="swatch clearfix" data-option="option1" data-option-index="0">
                          <div className="header hide">Màu sắc:</div>
                          <div className="header"><span></span></div>
                          <div className="select-swap">
                            <div data-value="Black" className="n-sd swatch-element color black  ">
                              <input className="variant-0" id="swatch-0-black" type="radio" name="option1" value="Black"
                                data-vhandle="black" checked />
                              <label className="black" for="swatch-0-black">
                                <span>Black</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div id="variant-swatch-1" className="swatch clearfix" data-option="option2" data-option-index="1">
                          <div className="header hide">Vật liệu:</div>
                          <div className="select-swap">
                            <div data-value="Cotton" className="n-sd swatch-element cotton  ">
                              <input className="variant-1" id="swatch-1-cotton" type="radio" name="option2" value="Cotton"
                                data-vhandle="cotton" checked />

                              <label for="swatch-1-cotton">
                                <span>Cotton</span>
                              </label>

                            </div>

                          </div>
                        </div>
                        <div id="variant-swatch-2" className="swatch clearfix" data-option="option3" data-option-index="2">
                          <div className="header hide">Kích thước:</div>

                          <div className="select-swap">
                            <div data-value="S" className="n-sd swatch-element s variant-3  ">
                              <input className="variant-2" id="swatch-2-s" type="radio" name="option3" value="S"
                                data-vhandle="s" checked />

                              <label for="swatch-2-s">
                                <span>S</span>
                              </label>

                            </div>
                            <div data-value="M" className="n-sd swatch-element m variant-3  ">
                              <input className="variant-2" id="swatch-2-m" type="radio" name="option3" value="M"
                                data-vhandle="m" />

                              <label for="swatch-2-m">
                                <span>M</span>
                              </label>

                            </div>
                            <div data-value="L" className="n-sd swatch-element l variant-3  ">
                              <input className="variant-2" id="swatch-2-l" type="radio" name="option3" value="L"
                                data-vhandle="l" />

                              <label for="swatch-2-l">
                                <span>L</span>
                              </label>

                            </div>


                          </div>
                        </div>

                      </div>
                      <div className="selector-actions">
                        <div className="quantity-area clearfix">
                          <input type="button" value="-" onclick="minusQuantity()" className="qty-btn" />
                          <input type="text" id="quantity" name="quantity" value="1" min="1" className="quantity-selector" />
                          <input type="button" value="+" onclick="plusQuantity()" className="qty-btn" />
                        </div>
                        <div className="wrap-addcart clearfix">
                          <button type="button" id="add-to-cart"
                            className=" add-to-cartProduct button dark btn-addtocart addtocart-modal" name="add">
                            ADD TO BAG
                          </button>
                        </div>
                      </div>
                      <div className="product-action-bottom visible-xs">
                        <div className="input-bottom">
                          <input id="quan-input" type="number" value="1" min="1" />
                        </div>
                        <button type="button" id="add-to-cartbottom"
                          className=" add-to-cartProduct add-cart-bottom button dark addtocart-modal" name="add">
                          ADD TO BAG
                        </button>
                      </div>
                    </form>
                    <div>
                      <button className="btn btn-primary btn-lg button dark" id="popup-size" data-toggle="modal"
                        data-target="#myModal-1">
                        Find your size
                      </button>
                    </div>
                    <div className="product-description">
                      <div className="title-bl">
                        <h2>PRODUCT DETAILS</h2>
                      </div>
                      <div className="description-content">
                        <div className="description-productdetail">
                            <div dangerouslySetInnerHTML={{ __html: product?.desc }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="list-productRelated clearfix">
                  <div className="heading-title text-center">
                    <h2>Related Items</h2>
                  </div>
                  <div className="content-product-list" id="collection-slide">
                    <Carousel {...props}>
                      {productRelateds.length >= 0 ? productRelateds.map( (productRelated, index) => {
                        return (<>
                            <div className={`pro-loop animation-tran active`} style={{padding: '0px 5px'}}>
                              <div className="product-block product-resize site-animation" data-anmation="1">
                                <div className="labeltag" style={{background: "#E1E65C" }}>
                                  {productRelated?.tag}
                                </div>
                                <div className="product-img">
                                  <a href={"/products/" + productRelated?.id}
                                    title={productRelated?.name} className="image-resize">
                                    <img className="img-loop" alt={productRelated?.name}
                                      src={productRelated?.image} />
                                    <img className="img-loop img-hover" alt={productRelated?.name}
                                      src={productRelated?.image_hover} />
                                  </a>
                                  <div className="button-add hidden">
                                    <button type="submit" title="Buy now" className="action">Mua ngay<i
                                        className="fa fa-long-arrow-right"></i></button>
                                  </div>
                                </div>
                                <div className="product-detail clearfix">
                                  <div className="box-pro-detail">
                                    <h3 className="pro-name">
                                      <a href={"/products/" + productRelated?.id}
                                        title={productRelated?.name}>
                                        {productRelated?.name}
                                      </a>
                                    </h3>
                                    <div className="box-pro-prices">
                                      <p className="pro-price ">{productRelated?.price}
                                        <span className="pro-price-del"></span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </>);
                      }) : ''}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="divzoom">
          <div className="divzoom_main">

            <div className="product-thumb text-center">
              <img className="product-image-feature"
                src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.1_94a0ed039a304127a023a1e344150b54_master.jpg"}
                alt=" Black Back Hook Detailed Cami Top " />
            </div>

            <div className="product-thumb text-center">
              <img className="product-image-feature"
                src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.2_734770be7de6409fa2d90012a2ff4707_master.jpg"}
                alt=" Black Back Hook Detailed Cami Top " />
            </div>

            <div className="product-thumb text-center">
              <img className="product-image-feature"
                src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.3_49eb788b7280428fbaae77db339fc63b_master.jpg"}
                alt=" Black Back Hook Detailed Cami Top " />
            </div>

            <div className="product-thumb text-center">
              <img className="product-image-feature"
                src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.4_9321786914c34ade954fd093becf3b46_master.jpg"}
                alt=" Black Back Hook Detailed Cami Top " />
            </div>

            <div className="product-thumb text-center">
              <img className="product-image-feature"
                src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.5_53bd674ead1e4ffdba7d2e00707f7e84_master.jpg"}
                alt=" Black Back Hook Detailed Cami Top " />
            </div>

            <div className="product-thumb text-center">
              <img className="product-image-feature"
                src={"../../styles/assets/products-images/libe-black_back_hook_detailed_cami_top2.6_b3cd1537a62a4039b95dc2089e1ff78f_master.jpg"}
                alt=" Black Back Hook Detailed Cami Top " />
            </div>
          </div>
          <div id="positionButtonDiv" className="hidden">
            <p>
              <button type="button" className="buttonZoomIn"><i></i></button>
              <button type="button" className="buttonZoomOut"><i></i></button>
            </p>
          </div>
          <button id="closedivZoom"><i></i></button>
        </div>
      </main>
    </>
  )
}

export default ProductDetail