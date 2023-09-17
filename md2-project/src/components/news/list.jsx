import React from 'react'
import { dataBlogs } from '../data'

function List() {
  return (
    <main className="main-index">
      <div id="blog">
        <div className="container-fluid">
          <div className="row breadcrumb-shop">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5  ">
              <ol className="breadcrumb breadcrumb-arrows" itemscope itemtype="http://schema.org/BreadcrumbList">
                <li className="active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                  <span><span itemprop="name">LIBEcommunity</span></span>
                  <meta itemprop="position" content="2" />
                </li>
              </ol>
            </div>
          </div>

          <div className="row wrapper-row pd-page">
            <div className="col-md-3 col-sm-12 col-xs-12 ">
              <div className="sidebar-blog">
                <div className="news-latest">
                  <div className="sidebarblog-title title_block">
                    <h2>Bài viết mới nhất<span className="fa fa-angle-down"></span></h2>
                  </div>
                  <div className="list-news-latest layered">

                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/banner_slider_1_43aa7df76e5e4ee5848c72c637c291c0_large.png"
                            alt="LIBÉRATION GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY TỰ DO CỦA GEN Z" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">LIBÉRATION
                            GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY TỰ DO CỦA GEN Z</a>
                        </h3>
                        <span className="author">
                          <a
                            href="/news/2">Marketing</a>
                        </span>
                        <span className="date">
                          21.08.2023
                        </span>
                      </div>
                    </div>
                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/untitled_design__19__f3f45361d96b4b8389006f5c0bde3ab4_large.jpg"
                            alt="SUMMER SOUVENIRS - NHỮNG KÝ ỨC NGÀY HÈ" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">SUMMER SOUVENIRS - NHỮNG KÝ ỨC
                            NGÀY HÈ</a>
                        </h3>
                        <span className="author">
                          <a href="/news/2">Marketing</a>
                        </span>
                        <span className="date">
                          15.06.2023
                        </span>
                      </div>
                    </div>
                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/0_444_c134de7446094e5c987b4d221c5b9920_large.jpg"
                            alt="LIBÉ A DECADE SERIES" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">LIBÉ A DECADE SERIES</a>
                        </h3>
                        <span className="author">
                          <a href="/news/2">Marketing</a>
                        </span>
                        <span className="date">
                          25.04.2023
                        </span>
                      </div>
                    </div>

                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/untitled_design__6__d1b28db29545471f9d6870690dbb97f0_large.jpg"
                            alt="CHƯƠNG TRÌNH GÂY QUỸ WOMEN SPEAK 2023" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">CHƯƠNG TRÌNH GÂY QUỸ WOMEN SPEAK 2023</a>
                        </h3>
                        <span className="author">
                          <a href="/news/2">Trúc Vũ</a>
                        </span>
                        <span className="date">
                          02.03.2023
                        </span>
                      </div>
                    </div>
                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/untitled_design__4__cfe0748e77ef4e3ab98dc05a72cc44b4_large.jpg"
                            alt="IU ĐI NGẠI CHI!" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">IU ĐI NGẠI CHI!</a>
                        </h3>
                        <span className="author">
                          <a href="/news/2">Trúc Vũ</a>
                        </span>
                        <span className="date">
                          14.02.2023
                        </span>
                      </div>
                    </div>

                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/head_ngang_1b66189f0d4840969f38c83b67d74459_large.png"
                            alt="HỌC ĐƯỢC GÌ TỪ LOÀI MÈOW TRONG NĂM 2023?" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">HỌC ĐƯỢC GÌ TỪ LOÀI MÈOW
                            TRONG NĂM 2023?</a>
                        </h3>
                        <span className="author">
                          <a href="/news/2">Trúc Vũ</a>
                        </span>
                        <span className="date">
                          18.01.2023
                        </span>
                      </div>
                    </div>
                    <div className="item-article clearfix">

                      <div className="post-image">
                        <a href="/news/2"><img
                            src="../../styles/assets/article/libe1006_ced4782580c94167868af1a2f4f1b39e_large.jpg"
                            alt="“YÊU BẢN THÂN” LÀ HÀNH TRÌNH CẦN RẤT NHIỀU NỖ LỰC!" /></a>
                      </div>

                      <div className="post-content">
                        <h3>
                          <a href="/news/2">“YÊU BẢN THÂN” LÀ
                            HÀNH TRÌNH CẦN RẤT NHIỀU NỖ LỰC!</a>
                        </h3>
                        <span className="author">
                          <a href="/news/2">Marketing</a>
                        </span>
                        <span className="date">
                          08.11.2022
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-12 col-xs-12">
              <div className="heading-page clearfix">
                <h1>LIBEcommunity</h1>
              </div>
              <div className="blog-content">
                <div className="list-article-content blog-posts">
                  {dataBlogs?.map((blog) => (<>
                    <article className="blog-loop">
                      <div className="blog-post row">
                        <div className="col-md-4 col-xs-12 col-sm-12">
                          <a href={"/news/" + blog?.id} className="blog-post-thumbnail"
                            title={blog?.title}  rel="nofollow">
                            <img src={blog?.image}
                              alt={blog?.title}  />
                          </a>
                        </div>

                        <div className="col-md-8 col-xs-12 col-sm-12">
                          <h3 className="blog-post-title">
                            <a href={"/news/" + blog?.id}
                              title={blog?.title}> {blog?.title} </a>
                          </h3>
                          <div className="blog-post-meta">
                            <span className="author vcard">Người viết: {blog?.category}</span>
                            <span className="date">
                              <time pubdate datetime={blog?.date}>{blog?.date}</time>
                            </span>
                          </div>
                          <div dangerouslySetInnerHTML={{ __html: blog?.desc }} />

                          <div className="meta-tags">
                            <span className="tags-title">Tags: </span>

                            <a className="/news/2">#LIBE-3mins</a>

                            <a className="/news/2">#LIBE3mins</a>

                            <a className="/news/2">tagtitle_#LIBE-3mins</a>

                          </div>

                          <div className="btn_view">
                            <a href={"/news/" + blog?.id}><span>View</span></a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </>))}


                </div>
                <div id="pagination" className="clearfix">

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <span className="page-node current">1</span>
                    <a className="/news/2?page=2">2</a>
                    <a className="/news/2?page=3">3</a>
                    <a className="/news/2?page=2">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 31 10"
                        style={{enableBackground: "new 0 0 31 10", width: "31px", height: "10px;"}} space="preserve">
                        <polygon points="31,5 25,0 25,4 0,4 0,6 25,6 25,10 "></polygon>
                      </svg> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default List
