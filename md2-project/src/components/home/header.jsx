import "../../styles/css.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataNavbar } from "../data";
import Link from "antd/es/typography/Link";
library.add(fas);



const Home = () => {
  return (
    <>
      <div className="header_fixed">
        <header>
          <div className="row">
            <div className="col-3 header_address">
              <p> 102 THÁI THỊNH, ĐỐNG ĐA, HÀ NỘI</p>
            </div>
            <div className="col-6" id="header_logo">
              <a href="/">
                <img
                  src="https://pos.nvncdn.net/eb9ddb-116318/store/20220301_M6gPcIeoQ8cwvJrojaQ7a688.png"
                  alt="logo-t0239.store.nhanh.vn"
                  width="100px"
                />
              </a>
            </div>
            <div className="col-3 icon_cart">
              <span>
                <Link href="/account/login"><FontAwesomeIcon icon="user" /></Link>
              </span>
              <span>
                <FontAwesomeIcon icon="cart-shopping" />
              </span>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 list_nav">
                {dataNavbar.map((item, index) => (
                  <li
                    className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                    key={index}
                  >
                    {item.dropdown ? (
                      <a
                        className="nav-link dropdown-toggle"
                        href={item?.href}
                        id={`navbarDropdown${index}`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a className="nav-link" href={item?.href}>
                        {item.name}
                      </a>
                    )}

                    {item.dropdown && (
                      <ul
                        className="dropdown-menu"
                        aria-labelledby={`navbarDropdown${index}`}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a className="dropdown-item" href={item?.href}>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className="input-group mb-3 search_top">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary button_search"
            type="button"
            id="button-addon2"
          >
            <FontAwesomeIcon icon="search" />
          </button>
        </div>
      </div>


    </>
  );
};
export default Home;
