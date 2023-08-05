import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import * as productService from '../service/ProductService'
import {NavLink} from "react-router-dom";


export const Product = () => {
    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProduct] = useState([])
    const [page, setPage] = useState(0)
    const [detail, setDetail] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [type, setType] = useState('')
    const [productName, setProductName] = useState('')


    const getLowToHigh = async () => {
        try {
            await setSortBy('lowToHigh')
            await getList()
        } catch (e) {
            console.log(e)
        }
    }

    const getList = async () => {
        try {
            const res = await productService.getList(page, sortBy, price, color, type, productName)
            await setProduct(res.content)
            console.log("data neeee " + res.content)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getList()
    }, [page, price, sortBy, productName, type, color])

    const openModal = (name) => {
        setIsModalOpen(true);
        setDetail(name)

    };

    const closeModal = () => {
        setIsModalOpen(false);
        setDetail('')
    };


    /*==================================================================

        [ Filter / Search product ]*/

    const showFilter = () => {
        setFilter(!filter)
        setSearch(false)
    }

    const showSearch = () => {
        setSearch(!search)
        setFilter(false)
    }

    const customStyles = {
        content: {
            top: '50%', // Đặt vị trí top theo giữa màn hình
            left: '50%', // Đặt vị trí left theo giữa màn hình
            transform: 'translate(-50%, -50%)', // Dịch chuyển modal để căn giữa
            width: '70%', // Đặt chiều rộng của modal
            height: '70%', // Đặt chiều cao của modal
        },
    };
    return (
        <>
            <div className="bg0 m-t-23 p-b-140 " style={{marginTop: '15vh'}}>
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                            <button
                                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                                data-filter="*"
                            >
                                All Products
                            </button>

                            <button
                                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                                data-filter=".bag"
                            >
                                Bag
                            </button>
                            <button
                                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                                data-filter=".shoes"
                            >
                                Shoes
                            </button>
                            <button
                                className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                                data-filter=".watches"
                            >
                                Accessories
                            </button>
                        </div>
                        <div className="flex-w flex-c-m m-tb-10">
                            <div
                                className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 "
                                onClick={() => showFilter()}>
                                <div>

                                    {
                                        filter ? <div><i
                                            className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"/> Filter
                                        </div> : <div><i
                                            className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"/> Filter
                                        </div>

                                    }


                                </div>

                            </div>
                            <a onClick={showSearch}
                               className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 ">
                                <div>
                                    {
                                        search ? <div><i
                                            className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"/> Search
                                        </div> : <div><i
                                            className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"/> Search
                                        </div>

                                    }

                                </div>


                            </a>
                        </div>
                        {/* Search product */}
                        {
                            search &&
                            <div className={` panel-search ${search ? 'show w-full p-t-10 p-b-15' : 'hide'}`}>
                                <div className="bor8 dis-flex p-l-15">
                                    <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                        <i className="zmdi zmdi-search"/>
                                    </button>
                                    <input
                                        className="mtext-107 cl2 size-114 plh2 p-r-15"
                                        type="text"
                                        name="search-product"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        }
                        {/* Filter */}
                        {
                            filter && <div className=" panel-filter w-full p-t-10">
                                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                                    <div className="filter-col1 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Sort By</div>
                                        <ul>
                                            <li className="p-b-6">
                                                {
                                                    sortBy === "" ? <NavLink onClick={() => setSortBy('')}
                                                                             className="  filter-link-active filter-link stext-106 trans-04"
                                                                             to='#'>
                                                            Default
                                                        </NavLink>
                                                        : <NavLink onClick={() => setSortBy('')} href='#'
                                                                   className=" filter-link   stext-106 trans-04"
                                                                   to={'#'}>
                                                            Default
                                                        </NavLink>
                                                }

                                            </li>


                                            <li className="p-b-6">

                                                {
                                                    sortBy === "lowToHigh" ?
                                                        <NavLink onClick={() => setSortBy('lowToHigh')} href="#"
                                                                 className="filter-link-active filter-link stext-106 trans-04">
                                                            Price: Low to High
                                                        </NavLink>
                                                        : <NavLink onClick={() => setSortBy('lowToHigh')} href="#"
                                                                   className="filter-link stext-106 trans-04">
                                                            Price: Low to High
                                                        </NavLink>
                                                }
                                            </li>
                                            <li className="p-b-6">
                                                {
                                                    sortBy === "highToLow" ?
                                                        <NavLink onClick={() => setSortBy('highToLow')} href="#"
                                                                 className="filter-link-active filter-link stext-106 trans-04">
                                                            Price: High to Low
                                                        </NavLink>
                                                        : <NavLink onClick={() => setSortBy('highToLow')} href="#"
                                                                   className="filter-link stext-106 trans-04">
                                                            Price: High to Low
                                                        </NavLink>
                                                }

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col2 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Price</div>
                                        <ul>
                                            <li className="p-b-6">
                                                {
                                                    price === '' ? <NavLink
                                                        onClick={() => setPrice('')}

                                                        className="filter-link stext-106 trans-04 filter-link-active"
                                                    >
                                                        All
                                                    </NavLink> : <NavLink
                                                        onClick={() => setPrice('')}

                                                        className="filter-link stext-106 trans-04 "
                                                    >
                                                        All
                                                    </NavLink>
                                                }

                                            </li>
                                            <li className="p-b-6">

                                                {
                                                    price === '0-50' ? <NavLink
                                                        onClick={() => setPrice('0-50')}

                                                        className="filter-link stext-106 trans-04 filter-link-active"
                                                    >
                                                        $0.00 - $50.00
                                                    </NavLink> : <NavLink
                                                        onClick={() => setPrice('0-50')}

                                                        className="filter-link stext-106 trans-04 "
                                                    >
                                                        $0.00 - $50.00
                                                    </NavLink>
                                                }
                                            </li>
                                            <li className="p-b-6">

                                                {
                                                    price === '50-100' ? <NavLink
                                                        onClick={() => setPrice('50-100')}

                                                        className="filter-link stext-106 trans-04 filter-link-active"
                                                    >
                                                        $50.00 - $100.00
                                                    </NavLink> : <NavLink
                                                        onClick={() => setPrice('50-100')}

                                                        className="filter-link stext-106 trans-04 "
                                                    >
                                                        $50.00 - $100.00
                                                    </NavLink>
                                                }
                                            </li>
                                            <li className="p-b-6">


                                                {
                                                    price === '100' ? <NavLink
                                                        onClick={() => setPrice('100')}

                                                        className="filter-link stext-106 trans-04 filter-link-active"
                                                    >
                                                        $100.00+
                                                    </NavLink> : <NavLink
                                                        onClick={() => setPrice('100')}

                                                        className="filter-link stext-106 trans-04 "
                                                    >
                                                        $100.00+
                                                    </NavLink>
                                                }
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="filter-col3 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Color</div>
                                        <ul>
                                            <li className="p-b-6">
                <span className="fs-15 lh-12 m-r-6" style={{color: "rgba(34,34,34,0)"}}>
                  <i className="zmdi zmdi-circle"/>
                </span>
                                                {
                                                    color === '' ?
                                                        <NavLink onClick={() => setColor('')}  className="filter-link filter-link-active stext-106 trans-04" to='#'>
                                                            All
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('')} className="filter-link stext-106 trans-04" to='#'>
                                                            All
                                                        </NavLink>
                                                }

                                            </li>
                                            <li className="p-b-6">
                <span className="fs-15 lh-12 m-r-6" style={{color: "#222"}}>
                  <i className="zmdi zmdi-circle"/>
                </span>
                                                {
                                                    color === 'black' ?
                                                        <NavLink onClick={() => setColor('black')}  className="filter-link filter-link-active stext-106 trans-04" to='#'>
                                                            Black
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('black')} className="filter-link stext-106 trans-04" to='#'>
                                                            Black
                                                        </NavLink>
                                                }

                                            </li>

                                            <li className="p-b-6">
                <span className="fs-15 lh-12 m-r-6" style={{color: "#aaa"}}>
                  <i className="zmdi zmdi-circle-o"/>
                </span>
                                                {
                                                    color === 'white' ?
                                                        <NavLink onClick={() => setColor('white')}  className="filter-link filter-link-active stext-106 trans-04" to='#'>
                                                            White
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('white')} className="filter-link stext-106 trans-04" to='#'>
                                                            White
                                                        </NavLink>
                                                }
                                            </li>

                                            <li className="p-b-6">
                <span
                    className="fs-15 lh-12 m-r-6"
                    style={{color: "#fa4251"}}
                >
                  <i className="zmdi zmdi-circle"/>
                </span>
                                                {
                                                    color === 'red' ?
                                                        <NavLink onClick={() => setColor('red')}  className="filter-link filter-link-active stext-106 trans-04" to='#'>
                                                            Red
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('red')} className="filter-link stext-106 trans-04" to='#'>
                                                            Red
                                                        </NavLink>
                                                }
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="filter-col4 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Types</div>
                                        <div className="flex-w p-t-4 m-r--5">
                                            <a
                                                href="#"
                                                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                T-Shirt
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Shirt
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Denim
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Short
                                            </a>
                                            <a
                                                href="#"
                                                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                            >
                                                Jacket
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                    <div className="row isotope-grid">
                        {
                            products && products.map((value, index) => (


                                    <div onClick={() => openModal(value.name)}
                                         className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women" key={index}>
                                        {/* Block2 */}
                                        <div className="block2">
                                            <div className="block2-pic hov-img0 "
                                            >
                                                <img src={value.image1} alt="IMG-PRODUCT"/>


                                            </div>
                                            <div className="block2-txt flex-w flex-t p-t-14">
                                                <div className="block2-txt-child1 flex-col-l ">
                                                    <a onClick={() => openModal(value.name)} href={''}
                                                       style={{color: 'black', fontSize: '20px'}}
                                                       className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                                    >
                                                        {value.name}
                                                    </a>
                                                    <span className="stext-105 cl3">{value.price}</span>
                                                </div>
                                                <div className="block2-txt-child2 flex-r p-t-3">
                                                    <a
                                                        href="#"
                                                        className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                                                    >
                                                        <img
                                                            className="icon-heart1 dis-block trans-04"
                                                            src="images/icons/icon-heart-01.png"
                                                            alt="ICON"
                                                        />
                                                        <img
                                                            className="icon-heart2 dis-block trans-04 ab-t-l"
                                                            src="images/icons/icon-heart-02.png"
                                                            alt="ICON"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                )
                            )
                        }
                    </div>


                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={true}
                style={customStyles}


            >


                <div className="bg0  p-b-30 p-lr-15-lg how-pos3-parent">
                    <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                        <img src="images/icons/icon-close.png" alt="CLOSE"/>
                    </button>
                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">

                                    <div className="wrap-slick3-arrows flex-sb-m flex-w"/>
                                    <div className="slick3 gallery-lb">
                                        <div
                                            className="item-slick3"

                                        >
                                            <div className="wrap-pic-w pos-relative">
                                                <img src={products.find((value) => value.name === detail)?.image1}
                                                     alt="IMG-PRODUCT"/>
                                                <a
                                                    className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"

                                                >
                                                    <i className="fa fa-expand"/>
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 ">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {products.find((value) => value.name === detail)?.name}
                                </h4>
                                <span
                                    className="mtext-106 cl2">${products.find((value) => value.name === detail)?.price}</span>
                                <p className="stext-102 cl3 p-t-23">
                                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                                    ligula. Mauris consequat ornare feugiat.
                                </p>
                                {/*  */}
                                <div className="p-t-33">
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">Size</div>
                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="js-select2" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Size S</option>
                                                    <option>Size M</option>
                                                    <option>Size L</option>
                                                    <option>Size XL</option>
                                                </select>
                                                <div className="dropDownSelect2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">Color</div>
                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="js-select2" name="time">
                                                    <option>Choose an option</option>
                                                    <option>Red</option>
                                                    <option>Blue</option>
                                                    <option>White</option>
                                                    <option>Grey</option>
                                                </select>
                                                <div className="dropDownSelect2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-204 flex-w flex-m respon6-next">
                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-minus"/>
                                                </div>
                                                <input
                                                    className="mtext-104 cl3 txt-center num-product"
                                                    type="number"
                                                    name="num-product"
                                                    defaultValue={1}
                                                />
                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-plus"/>
                                                </div>
                                            </div>
                                            <button
                                                className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                        <a
                                            href="#"
                                            className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                                            data-tooltip="Add to Wishlist"
                                        >
                                            <i className="zmdi zmdi-favorite"/>
                                        </a>
                                    </div>
                                    <a
                                        href="#"
                                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                        data-tooltip="Facebook"
                                    >
                                        <i className="fa fa-facebook"/>
                                    </a>
                                    <a
                                        href="#"
                                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                        data-tooltip="Twitter"
                                    >
                                        <i className="fa fa-twitter"/>
                                    </a>
                                    <a
                                        href="#"
                                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                                        data-tooltip="Google Plus"
                                    >
                                        <i className="fa fa-google-plus"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>

        </>

    )
}