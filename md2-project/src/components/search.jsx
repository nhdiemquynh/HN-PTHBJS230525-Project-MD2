import { useState } from "react";


const Search = () => {

  const [search, setDataSearch] = useState('');

  const handleInputSearch = (e) => {
    setDataSearch(e.target.value);
  };

  return (
    <>
    <main className="main-index">
      <div className="searchPage" id="layout-search">
        <div className="container-fluid">
          <div className="row pd-page">
            <div className="col-md-12 col-xs-12">
              <div className="heading-page">
                <h1>Tìm kiếm</h1>
              </div>
              <div className="wrapbox-content-page">
                <div className="content-page clearfix" id="search">
                  <div className="expanded-message">
                    <div className="search-field">
                      <form className="search-page" action="/shop" method="get">
                        <input type="hidden" name="type" value="product" />
                        <input type="submit" alt="Go" id="go" />
                        <input type="text" name="q" className="search_box" placeholder="Tìm kiếm" value={search} onInput={(val) => handleInputSearch(val)} />
                      </form>
                    </div>
                    <div className="message-txt clearfix" style={{display: 'none'}}>
                      <p>Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa của bạn</p>
                      <p>Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và thử lại!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default Search;