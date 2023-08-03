import React from "react";
import {Carousel} from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Body = () => {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
            // Để thay đổi hiệu ứng chuyển ảnh, bạn có thể sử dụng các options sau:
            // Đối với hiệu ứng slide: 'slide', 'fade', 'slide-in', 'slide-out',...
            // Đối với hiệu ứng fade: 'fade', 'fade-in', 'fade-out',...
            // Bạn có thể tùy chỉnh hiệu ứng và các thuộc tính khác theo tài liệu của react-slick.
            // Ví dụ:
            // effect: 'fade',
        };
    return (

        <>
            <section className="section-slide">
                <div className="wrap-slick1 rs1-slick1">
                    <div className="slick1">

                        <Slider {...settings}>
                                <div
                                    className="item-slick1 bg-img1 slider1"
                                >
                                    <div className="container h-full">
                                        <div className="flex-col-l-m h-full p-t-100 p-b-30">
                                            <div
                                                data-appear="fadeInDown"
                                            >
                <span className="ltext-202 cl2 respon2">
                  New Collection 2023
                </span>
                                            </div>
                                            <div
                                            >
                                                <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                                                    New arrivals
                                                </h2>
                                            </div>
                                            <div
                                            >
                                                <a
                                                    href="product.html"
                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="item-slick1 bg-img1 slider2"
                                >
                                    <div className="container h-full">
                                        <div className="flex-col-l-m h-full p-t-100 p-b-30">
                                            <div
                                            >
                <span className="ltext-202 cl2 respon2">
                  New Collection 2023
                </span>
                                            </div>
                                            <div
                                            >
                                                <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                                                    New arrivals
                                                </h2>
                                            </div>
                                            <div
                                            >
                                                <a
                                                    href="product.html"
                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="item-slick1 bg-img1 slider3"
                                >
                                    <div className="container h-full">
                                        <div className="flex-col-l-m h-full p-t-100 p-b-30">
                                            <div
                                            >
                <span className="ltext-202 cl2 respon2">
                  New Collection 2023
                </span>
                                            </div>
                                            <div
                                            >
                                                <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                                                    New arrivals
                                                </h2>
                                            </div>
                                            <div
                                            >
                                                <a
                                                    href="product.html"
                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                                >
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Slider>



                    </div>
                </div>
            </section>
            <div className='container'>

                {/* Banner */}
                <div className="sec-banner bg0">
                    <div className="flex-w flex-c-m">
                        <div className="size-202 m-lr-auto respon4">
                            {/* Block1 */}
                            <div className="block1 wrap-pic-w">
                                <img src="images/banner-04.jpg" alt="IMG-BANNER"/>
                                <a
                                    href="product.html"
                                    className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                                >
                                    <div className="block1-txt-child1 flex-col-l">
              <span className="block1-name ltext-102 trans-04 p-b-8">
                Women
              </span>
                                        <span className="block1-info stext-102 trans-04">
                Spring 2018
              </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="size-202 m-lr-auto respon4">
                            {/* Block1 */}
                            <div className="block1 wrap-pic-w">
                                <img src="images/banner-02.jpg" alt="IMG-BANNER"/>
                                <a
                                    href="product.html"
                                    className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                                >
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">Men</span>
                                        <span className="block1-info stext-102 trans-04">
                Spring 2018
              </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="size-202 m-lr-auto respon4">
                            {/* Block1 */}
                            <div className="block1 wrap-pic-w">
                                <img src="images/banner-06.jpg" alt="IMG-BANNER"/>
                                <a
                                    href="product.html"
                                    className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                                >
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">Bags</span>
                                        <span className="block1-info stext-102 trans-04">New Trend</span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">Shop Now</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}