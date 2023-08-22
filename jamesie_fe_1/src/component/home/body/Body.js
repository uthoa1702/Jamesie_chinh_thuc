import React, {useEffect} from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Carousel, CarouselItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getAllCart} from "../../../redux/actions/cart";
import {useDispatch} from "react-redux";


export const Body = () => {
    const dispatch = useDispatch();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,

        // Để thay đổi hiệu ứng chuyển ảnh, bạn có thể sử dụng các options sau:
        // Đối với hiệu ứng slide: 'slide', 'fade', 'slide-in', 'slide-out',...
        // Đối với hiệu ứng fade: 'fade', 'fade-in', 'fade-out',...
        // Bạn có thể tùy chỉnh hiệu ứng và các thuộc tính khác theo tài liệu của react-slick.
        // Ví dụ:
        // effect: 'fade',
    };
    useEffect(() => {
        window.scrollTo(0, 0)
         dispatch(getAllCart())
    },[])
    const settingsS = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (

        <>


            <section className="section-slide">
                <div className="  wrap-slick1 rs1-slick1">
                    <div className="">
                        <Carousel {...settingsS} interval={3000}  nextIcon={false}
                        prevIcon={false} nextLabel={false} prevLabel={false}
                        >

                            <CarouselItem className='slider1 '>
                                <div
                                    className="item-slick1 bg-img1  slick1"
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
                                                <Link

                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                                 to='/product'>
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className=" slider2 custom-slide " >
                                <div
                                    className="item-slick1 bg-img1 "
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
                                                <Link

                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                                    to='/product'>
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className=" slider3 custom-slide">

                                <div
                                    className="item-slick1 bg-img1 "
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
                                                <Link

                                                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                                                    to='/product'>
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        </Carousel>


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