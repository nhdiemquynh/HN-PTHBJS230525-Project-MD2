const Cart =()=>{
    return(<>
      <main className="main-index">
        <div id="layout-cart">
          <div className="container-fluid">
            <div className="row breadcrumb-shop">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
                <ol className="breadcrumb breadcrumb-arrows">
                  <li className="active">
                      <span content="/cart"><span itemprop="name">Bag (0)</span></span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="row pd-page">
              <div className="col-md-12 col-xs-12 heading-page">
                <div className="header-page">
                  <h1>YOUR SHOPPING BAG</h1>
                  <p className="count-cart"><span>0</span> item(s) in your bag</p>
                </div>
              </div>
              <div className="col-md-12 col-xs-12 wrapbox-content-cart">
                <div className="span12 expanded-message text-center">
                  YOUR BAG IS EMPTY
                  <p className="link-continue">
                    <a href="/shop" className="button dark">
                      <i className="fa fa-reply"></i> Continue Shopping
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>)
}
export default Cart;