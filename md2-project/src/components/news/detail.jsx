import React from 'react'
import { dataBlogs } from '../data'

function DetailBlog() {
    return (
      <>
        <main className="">
        <div id="article">
            <div className="container-fluid">
            <div className="row breadcrumb-shop hidden">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd5 blog-breadcrumb ">
                <ol className="breadcrumb breadcrumb-arrows">
                    <li itemprop="itemListElement">
                    <a href="#" itemprop="item">
                        <span itemprop="name">LIBEcommunity</span>
                    </a>
                    <meta itemprop="position" content="2" />
                    </li>
                    <li className="active" itemprop="itemListElement">
                    <span><span itemprop="name">IU ĐI NGẠI
                        CHI!</span></span>
                    <meta itemprop="position" content="3" />
                    </li>
                </ol>
                </div>
            </div>
            <div className="row wrapper-row">

                <div className="background-img background-img-rel">
                    <img
                    src="../../styles/assets/article/untitled_design__4__cfe0748e77ef4e3ab98dc05a72cc44b4.jpg"
                    alt="IU ĐI NGẠI CHI!" />
                <div className="article-wrapper-title-edit">
                    <div className="list-tags">
                    #LIBE-3mins
                    </div>
                    <div className="article-title-e">
                    <h2>IU ĐI NGẠI CHI!</h2>
                    </div>
                </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12 hidden">
                <div className="sidebar-blog">
                    <div className="news-latest  clearfix">
                    <div className="sidebarblog-title title_block">
                        <h2>Bài viết mới nhất<span className="fa fa-angle-down"></span></h2>
                    </div>
                    <div className="list-news-latest layered">

                        <div className="item-article clearfix abc">

                        <div className="post-image">
                            <a href="/news/1"><img
                                src="../../styles/assets/article/banner_slider_1_43aa7df76e5e4ee5848c72c637c291c0_large.png"
                                alt="LIBÉRATION GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY TỰ DO CỦA GEN Z" /></a>
                        </div>

                        <div className="post-content">
                            <h3>
                            <a href="/news/2">LIBÉRATION
                                GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY TỰ DO CỦA GEN Z</a>
                            </h3>
                            <span className="author">
                            <a href="/news/3">Marketing</a>
                            </span>
                            <span className="date">
                            21.08.2023
                            </span>
                        </div>
                        </div>

                        <div className="item-article clearfix abc">

                        <div className="post-image">
                            <a href="/news/4"><img
                                src="../../styles/assets/article/untitled_design__19__f3f45361d96b4b8389006f5c0bde3ab4_large.jpg"
                                alt="SUMMER SOUVENIRS - NHỮNG KÝ ỨC NGÀY HÈ" /></a>
                        </div>

                        <div className="post-content">
                            <h3>
                            <a href="/news/5">SUMMER SOUVENIRS - NHỮNG
                                KÝ ỨC NGÀY HÈ</a>
                            </h3>
                            <span className="author">
                            <a href="/news/6">Marketing</a>
                            </span>
                            <span className="date">
                            15.06.2023
                            </span>
                        </div>
                        </div>

                        <div className="item-article clearfix abc">

                        <div className="post-image">
                            <a href="/news/1"><img
                                src="../../styles/assets/article/0_444_c134de7446094e5c987b4d221c5b9920_large.jpg"
                                alt="LIBÉ A DECADE SERIES" /></a>
                        </div>

                        <div className="post-content">
                            <h3>
                            <a href="/news/2">LIBÉ A DECADE SERIES</a>
                            </h3>
                            <span className="author">
                            <a href="/news/4">Marketing</a>
                            </span>
                            <span className="date">
                            25.04.2023
                            </span>
                        </div>
                        </div>

                        <div className="item-article clearfix abc">

                        <div className="post-image">
                            <a href="/news/5"><img
                                src="../../styles/assets/article/untitled_design__6__d1b28db29545471f9d6870690dbb97f0_large.jpg"
                                alt="CHƯƠNG TRÌNH GÂY QUỸ WOMEN SPEAK 2023" /></a>
                        </div>

                        <div className="post-content">
                            <h3>
                            <a href="/news/1">CHƯƠNG TRÌNH GÂY QUỸ WOMEN SPEAK 2023</a>
                            </h3>
                            <span className="author">
                            <a href="/news/3">Trúc Vũ</a>
                            </span>
                            <span className="date">
                            02.03.2023
                            </span>
                        </div>
                        </div>
                        <div className="item-article clearfix abc">

                        <div className="post-image">
                            <a href="/news/3"><img
                                src="../../styles/assets/article/head_ngang_1b66189f0d4840969f38c83b67d74459_large.png"
                                alt="HỌC ĐƯỢC GÌ TỪ LOÀI MÈOW TRONG NĂM 2023?" /></a>
                        </div>

                        <div className="post-content">
                            <h3>
                            <a href="/news/2">HỌC ĐƯỢC GÌ TỪ LOÀI
                                MÈOW TRONG NĂM 2023?</a>
                            </h3>
                            <span className="author">
                            <a href="/news/3">Trúc Vũ</a>
                            </span>
                            <span className="date">
                            18.01.2023
                            </span>
                        </div>
                        </div>

                        <div className="item-article clearfix abc">

                        <div className="post-image">
                            <a href="/news/2"><img
                                src="../../styles/assets/article/libe1006_ced4782580c94167868af1a2f4f1b39e_large.jpg"
                                alt="“YÊU BẢN THÂN” LÀ HÀNH TRÌNH CẦN RẤT NHIỀU NỖ LỰC!" /></a>
                        </div>

                        <div className="post-content">
                            <h3>
                            <a href="/news/1">“YÊU BẢN
                                THÂN” LÀ HÀNH TRÌNH CẦN RẤT NHIỀU NỖ LỰC!</a>
                            </h3>
                            <span className="author">
                            <a href="/news/3">Marketing</a>
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
                <div className="col-md-10 col-sm-12 col-xs-12 col-md-offset-1">
                <div className="content-page">
                    <div className="article-content">
                    <div className="box-article-heading clearfix">

                        <h1 className="sb-title-article hidden text-center">IU ĐI NGẠI CHI!</h1>
                        <ul className="article-info-more hidden">
                        <li> Người viết: Trúc Vũ lúc <time pubdate datetime="2023-02-14">14.02.2023</time>
                        </li>
                        <li><i className="fa fa-file-text-o"></i><a href="#"> LIBEcommunity</a> </li>

                        </ul>
                    </div>
                    <div className="article-pages">
                        ______CRIPTIONS
                    </div>

                    </div>

                </div>
                </div>
                <div className="clearfix new-folder-blog"></div>

                <div className="container">
                <hr className="fix-div-bortop" />
                <section className="section section-articles-new">
                    <div className="wrapper-headi secng-home text-center">
                    <div className="site-animation">
                        <h2>
                        Check out our other #LIBÉ3mins stories
                        </h2>
                    </div>
                    </div>

                    <div className="posts-list row">
                    <div className="col-md-6 col-sm-6 col-xs-12 col-post">
                        <div className="post_item">
                        <div className="post_featured">
                            <div className="post_thumb" title="">
                            <a className="hover_icon" href="/news/4">
                                <img
                                src="../../styles/assets/article/banner_slider_1_43aa7df76e5e4ee5848c72c637c291c0.png"
                                alt="LIBÉRATION GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY TỰ DO CỦA GEN Z" />
                            </a>
                            </div>
                        </div>
                        <div className="post_content">
                            <div className="post_info hidden">
                            <span className="post_info_item">
                                Thứ Hai 21,08,2023
                            </span>
                            </div>
                            <h3 className="post_title">
                            <a href="/news/5">LIBÉRATION
                                GENERATION - LỐI SỐNG SÁNG TẠO ĐẦY TỰ DO CỦA GEN Z</a>
                            </h3>

                            <div className="list-tags-related">
                            #LIBE-3mins
                            </div>
                            <a href="/news/6"
                            className="red-mores-articles">View</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 col-post">
                        <div className="post_item">
                        <div className="post_featured">
                            <div className="post_thumb" title="">
                            <a className="hover_icon" href="/news/3">
                                <img
                                src="../../styles/assets/article/untitled_design__19__f3f45361d96b4b8389006f5c0bde3ab4.jpg"
                                alt="SUMMER SOUVENIRS - NHỮNG KÝ ỨC NGÀY HÈ" />
                            </a>
                            </div>
                        </div>
                        <div className="post_content">
                            <div className="post_info hidden">
                            <span className="post_info_item">
                                Thứ Năm 15,06,2023
                            </span>
                            </div>
                            <h3 className="post_title">
                            <a href="/news/1">SUMMER SOUVENIRS - NHỮNG
                                KÝ ỨC NGÀY HÈ</a>
                            </h3>

                            <div className="list-tags-related">
                            #LIBE-3mins
                            </div>
                            <a href="/news/1" className="red-mores-articles">View</a>
                        </div>
                        </div>
                    </div>


                    </div>
                </section>
                </div>

            </div>
            </div>
        </div>
        </main>
      </>
    );
}

export default DetailBlog;