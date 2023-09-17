import "../../styles/css.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataNavbar } from "../data";
import Link from "antd/es/typography/Link";
import "../../styles/assets/cusnew.scsse9c9.css";
import "../../styles/assets/stylese9c9.css";
import { useState } from "react";
library.add(fas);

const Home = () => {

  const classActive = "active";
  const [menuMobileClass, setMenuMobileClass] = useState('');
  const [dropdownShop, setDropdownShop] = useState(0);
  const [dropdownPicks, setDropdownPicks] = useState(0);
  const eventClickMenu = () => {
    setMenuMobileClass(classActive);
  }

  const eventClickCloseMenu = () => {
    setMenuMobileClass('');
  }

  const handleDropdownMenu = (data) => {
	const {shop, picks} = data;
	if (shop != undefined && shop > 0) {
		if (shop == dropdownShop) {
			setDropdownShop(shop -1);
		} else {
			setDropdownShop(shop);
		}

	}
	if (picks != undefined && picks > 0) {
		if (picks == dropdownPicks) {
			setDropdownPicks(picks -1);
		} else {
			setDropdownPicks(picks);
		}

	}
    return false;
  };

  return (
    <>
      <div className="topbarid">FREE VOUCHER SHIPPING FROM BILLS UP TO 800K</div>

      <header id="site-header" className="main-header">

        <div className="row flex-div">
          <div className="menu-bars col-md-3 col-sm-3 col-xs-1">
            <a className="mebubarcheck" onClick={eventClickMenu}>
              <i className="fa fa-bars visible-xs" aria-hidden="true"></i>
              <span className="hidden-xs">SHOP</span>
            </a>
            <a href="/news">JOIN OUR TEAM!</a>
          </div>
          <div className="logo-header col-xs-7 col-md-6 col-sm-6">
            <div className="wrap-logo">
              <a href="/" >
                <h1 className="logo">
                  <img src={"../../styles/assets/logoe9c9.png"} alt="LIBÉ" className="img-responsive logoimg" />
                </h1>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-4 text-right">
            <div id="topbar">
              <div className="topbar-content wrap-flex-align">
                <div className="topbar-left">
                  <div className="header-wrap-icon">
                    <span id="site-search-handle" className="icon-search"
                      aria-label="Search" title="Search">
                      <a href="/search">
                        <img style={{width: "14px", verticalAlign: "baseline"}}  src={"../../styles/assets/iconsearchxe9c9.png"} />
                        <span className="text"></span>
                      </a>
                    </span>
                    <span className="icon-account" aria-label="Tài khoản" title="Tài khoản">
                      <a href="/account/login">
                        <svg className="svg-account" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1"
                          x="0px" y="0px" viewBox="0 0 488.9 488.9" style={{enableBackground: "new 0 0 488.9 488.9"}} space="preserve">
                          <g>
                            <path
                              d="M477.7,454.8v-26c0-26.5-12.4-52-33.1-68.1c-48.2-37.4-97.3-63.5-114.5-72.2v-29.7c3.5-7.8,6.4-16.3,8.6-25.5   c12.8-4.6,19.8-23.4,24.5-40c6.3-22.1,5.6-37.6-1.8-46.2c7.8-42.5,4.3-73.8-10.3-93.1c-7.7-10.1-16.7-14.4-22.7-16.3   c-4.3-6-13-16.1-27.7-24.2C285.5,4.5,268.4,0,249.6,0c-3.4,0-6.8,0.2-9.8,0.4c-8.4,0.4-16.7,2-24.9,4.7c-0.1,0-0.2,0.1-0.3,0.1   c-9,3.1-17.8,7.6-26.3,13.4c-9.7,6.2-18.6,13.6-26.3,21.8c-15.1,15.5-25.1,33-29.4,51.7c-4.1,15.5-4.4,31.1-1,46.4   c-1.8,1.3-3.4,2.8-4.8,4.6c-6.9,9.1-7.2,23.4-1.1,45.1c4.2,15,9.8,30.3,19.3,37.2c2.8,14.4,7.5,27.5,13.8,39.1v24.1   c-17.2,8.7-66.3,34.7-114.5,72.2c-20.7,16.1-33.1,41.5-33.1,68.1v26c0,18.8,15.3,34,34,34h398.5   C462.4,488.9,477.7,473.6,477.7,454.8z M35.6,454.8v-26c0-19,8.8-37.2,23.6-48.7c52-40.3,104.9-66.9,115-71.8   c5.6-2.7,9.1-8.3,9.1-14.6v-32.5c0-2.2-0.6-4.3-1.7-6.2c-6.6-11.2-11.2-24.6-13.5-39.9c-0.8-4.9-4.4-8.8-9.1-10   c-1.3-1.5-5-6.9-9.7-23.6c-3.9-13.8-3.6-20.2-3.2-22.5c3.9,0.2,7.8-1.6,10.3-4.7c2.6-3.3,3.3-7.7,1.9-11.6   c-5.2-14.5-5.8-29.4-1.8-44.6c3.4-14.6,11.2-28.2,23.3-40.6c6.5-7,14-13.1,22-18.2c0.1-0.1,0.3-0.2,0.4-0.3   c6.7-4.7,13.7-8.2,20.6-10.6c0.1,0,0.2-0.1,0.2-0.1c5.9-2,12-3.1,18.4-3.4c17.5-1.5,33.2,1.8,47.1,9.9   c15.2,8.4,21.4,19.4,21.4,19.4c1.9,3.9,5.3,6.2,9.7,6.5c0.3,0,6.8,1,12.4,8.9c5.9,8.4,14.3,30,3.8,80.4c-1.2,5.6,1.7,11.2,6.8,13.6   c0.5,1.8,1.3,7.9-3,23.1c-3.8,13.4-6.9,19.5-8.7,22.2c-2.3-0.4-4.7-0.2-6.9,0.8c-3.8,1.6-6.6,5.1-7.3,9.1c-2.1,12-5.5,22.8-9.9,32   c-0.8,1.7-1.2,3.5-1.2,5.3v37.6c0,6.3,3.5,11.8,9.1,14.6c10.1,4.9,63,31.6,114.9,71.8c14.8,11.5,23.6,29.7,23.6,48.7v26   c0,5.2-4.3,9.5-9.5,9.5H45.2C39.9,464.4,35.6,460.1,35.6,454.8z" />
                          </g>
                        </svg>
                        <span className="text"></span>
                      </a>
                    </span>
                    <span id="site-cart-handle" className="icon-cart" aria-label="Open cart"
                      title="Giỏ hàng">
                      <a href="/cart">
                        <span className="cart-menu" aria-hidden="true">
                          <img className="iconnew" src={"../../styles/assets/iconcarte9c9.png"} />
                          <span className="text"></span>
                          <span className="count-holder"><span className="count">(0)</span></span>
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="site-nav--mobile" className="site-nav style--sidebar">
		<div id="site-navigation" className="site-nav-container">
			<div className="site-nav-container-last">
				<p className="title">Menu</p>
				<div className="main-navbar">
					<nav className="primary-menu">
						<ul className="menu-collection">
							<li className="navi1"><a href="/"><span>Our Story</span></a></li>
							<li className="navi1"><a href="/"><span>LIBÉ Stores</span></a></li>
							<li className="navi1"><a href="/"><span>Join LIBÉ Team</span></a></li>
						</ul>
						<ul className="menu-about">
							<li className="login">
								<a href="/account/login">
									<span>
										<svg className="svg-account" version="1.1" xmlns="http://www.w3.org/2000/svg"
											xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="510px"
											height="510px" viewBox="0 0 510 510"
											style={{enableBackground: "new 0 0 510 510"}} space="preserve">
											<g>
												<g id="account-circle">
													<path
														d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,76.5
													 c43.35,0,76.5,33.15,76.5,76.5s-33.15,76.5-76.5,76.5c-43.35,0-76.5-33.15-76.5-76.5S211.65,76.5,255,76.5z M255,438.6
													 c-63.75,0-119.85-33.149-153-81.6c0-51,102-79.05,153-79.05S408,306,408,357C374.85,405.45,318.75,438.6,255,438.6z">
													</path>
												</g>
											</g>
										</svg>
									</span>
									<span>Login</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="to-bottom-content">
					<div className="site-copyright">
						<p className="copy">Copyright &copy; 2023 <a href="/">Quynh</a></p>
						<p className="powered"><a target='_blank' href="/">Powered by Quynh</a></p>
					</div>
				</div>
			</div>

		</div>
		<div id="site-cart" className="site-nav-container" tabindex="-1">
			<div className="site-nav-container-last">
				<p className="title">YOUR SHOPPING BAG</p>
				<div className="cart-view clearfix">
					<table id="clone-item-cart" className="table-clone-cart">
						<tr className="item_2 hidden">
							<td className="img"><a href="#" title=""><img src="#" alt="" /></a></td>
							<td>
								<a className="pro-title-view" href="#" title=""></a>
								<span className="variant"></span>
								<span className="pro-quantity-view"></span>
								<span className="pro-price-view"></span>
								<span className="remove_link remove-cart">
								</span>
							</td>
						</tr>
					</table>
					<table id="cart-view">

						<tr>
							<td>YOUR CART IS EMPTY</td>
						</tr>

					</table>
					<span className="line"></span>
					<table className="table-total">
						<tr>
							<td className="text-left">TOTAL:</td>
							<td className="text-right" id="total-view-cart">0₫</td>
						</tr>
						<tr>
							<td><a href="/cart" className="linktocart button dark">SEE YOUR BAG</a></td>
							<td><a href="/checkout" className="linktocheckout button dark">CHECKOUT</a></td>
						</tr>
					</table>
				</div>

			</div>
		</div>

		<div id="site-search" className="site-nav-container" tabindex="-1">
			<div className="site-nav-container-last">
				<p className="title">Search</p>
				<div className="search-box wpo-wrapper-search">
					<form action="/search"
						className="searchform searchform-categoris ultimate-search navbar-form">
						<div className="wpo-search-inner">
							<input type="hidden" name="type" value="product" />
							<input required id="inputSearchAuto" name="q" maxLength="40" autocomplete="off"
                className="searchinput input-search search-input" type="text" size="20"
								placeholder="Search for items, product codes..." />
						</div>
						<button type="submit" className="btn-search btn" id="search-header-btn">
							<svg version="1.1" className="svg search" xmlns="http://www.w3.org/2000/svg"
								xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27"
								style={{enableBackground: "new 0 0 24 27"}}  space="preserve">
								<path
									d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z">
								</path>
								<rect x="17" y="17" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)"
									width="4" height="8"></rect>
							</svg>
						</button>
					</form>
					<div id="ajaxSearchResults" className="smart-search-wrapper ajaxSearchResults" style={{display: 'none'}}>
						<div className="resultsContent"></div>
					</div>
				</div>
			</div>
		</div>

		<button id="site-close-handle" className="site-close-handle" aria-label="Close" title="Close">
			<span className="hamburger-menu active" aria-hidden="true"><span className="bar animate"></span></span>
		</button>
	</div>

  <div className={"menuside_more_usestq" + " " + menuMobileClass}>
		<div className="stq_wrapper">
			<h3 className="title_menu"><a className="dongmenu" href="#" onClick={eventClickCloseMenu}><i className="fa fa-close"></i></a></h3>

			<ul className="menuul">

				<li className="liberation-generation">
					<a href="/category/1"
						handle="9c6f8269-8a7f-4e46-bb60-d1fe17cfd62c">LIBÉRATION GENERATION</a>
				</li>

				<li className="new-in">
					<a href="/news" handle="new-arrivals-1">NEW IN</a>
				</li>

				<li className="shop">
					<a href="javascript: void(0);" handle="clothing" onClick={ele => handleDropdownMenu({shop: 1})}>SHOP</a>

					<span className="arrow_iconmenu">
						<i className="fa fa-caret-down" aria-hidden="true"></i>
					</span>


					<ul className="menucap2" style={{display: dropdownShop >= 1 ? `block` : '' }}>
						<li>
							<a href="/shop" handle="8c805e99-ef91-444e-9b14-6a34374c1bb2">All</a>
						</li>

						<li>
							<a href="javascript: void(0);" onClick={ele => handleDropdownMenu({shop: 2})}>Tops</a>

							<span className="arrow_iconmenu">
								<i className="fa fa-caret-down" aria-hidden="true"></i>
							</span>


							<ul className="menucap3" style={{display: dropdownShop == 2 ? `block` : '' }}>

								<li>
									<a href="/category/2"
										handle="810d497e-dbff-4ac6-b530-7bc6d20f0a97">Camisoles</a>
								</li>

								<li>
									<a href="/category/3"
										handle="673e9520-60aa-4e70-8166-a6237729cd8b">T-shirts</a>
								</li>

								<li>
									<a href="/category/4"
										handle="930205ff-ea0a-4edf-b9f1-72313f5a0d38">Shirts & Blouses</a>
								</li>

							</ul>
						</li>

						<li>
							<a href="/category/5" handle="bottom">Trousers</a>
						</li>

						<li>
							<a href="/category/5" handle="skirt">Skirts & Shorts</a>
						</li>

						<li>
							<a href="/category/7"
								handle="926d94a6-86e8-4705-9a80-0a4a800fe989">Dresses & Jumpsuits</a>
						</li>

						<li>
							<a href="/category/8"
								handle="bc5ff8fe-841a-48ec-8a53-1d4f90efc5a5">Outer-wear</a>
						</li>

						<li>
							<a href="/category/9" handle="swimwear">Swimwear</a>

						</li>

						<li>
							<a href="/category/2"
								handle="4308c54c-6b5a-469b-9373-091ead9da863">Accessories</a>
						</li>

					</ul>

				</li>

				<li className="libe-picks">
					<a href="javascript: void(0);" onClick={ele => handleDropdownMenu({picks: 1})}>LIBÉ PICKS</a>
					<span className="arrow_iconmenu">
						<i className="fa fa-caret-down" aria-hidden="true"></i>
					</span>

					<ul className="menucap2" style={{display: dropdownPicks >= 1 ? `block` : '' }}>
						<li>
							<a href="/category/1"
								handle="b9e624fa-2b95-4121-baca-1ee024d43f2b">ALL TIME ESSENTIALS</a>
						</li>
						<li>
							<a href="/category/2"
								handle="ea6192ff-2741-4935-bcb8-b0c690e50cb4">HAVE A LITTLE FUN</a>
						</li>
						<li>
							<a href="/category/3" handle="2a9ac3bd-9d42-434e-ab6c-c8ad0355be2f">
								LIBÉ AT WORK
							</a>
						</li>
						<li>
							<a href="/category/4"
								handle="131efe19-b97e-4165-97f9-b77342428125">SEASONAL GUIDES</a>
						</li>

					</ul>

				</li>

				<li className="denim-wear">
					<a href="/category/5" handle="68686b4f-5be5-490c-99e4-4e63a195dca1">DENIM WEAR</a>
				</li>
				<li className="libe-goods">
					<a href="/category/6" handle="6d2313de-a8e7-46ce-87b3-e95ef38af81a">LIBÉ Goods</a>
				</li>
			</ul>
		</div>
	</div>
    </>
  );
};
export default Home;
