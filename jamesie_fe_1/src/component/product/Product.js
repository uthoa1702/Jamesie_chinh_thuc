import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import * as productService from '../service/ProductService'
import {NavLink} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup'
import {toast} from "react-toastify";


export const Product = () => {
    const [filter, setFilter] = useState(false);
    const [search, setSearch] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [page, setPage] = useState(0)
    const [detail, setDetail] = useState('')
    const [sortBy, setSortBy] = useState('')
    const [price, setPrice] = useState('')
    const [color, setColor] = useState('')
    const [types, setTypes] = useState([])
    const [type, setType] = useState('')
    const [productName, setProductName] = useState('')
    const [url, setUrl] = useState('')

    const [size, setSize] = useState([])

    const [chooseSize, setChooseSize] = useState(0)
    const [chooseQuantity, setChooseQuantity] = useState(1)


    const getList = async () => {
        try {
            const res = await productService.getList(page, sortBy, price, color, type, productName)
            await setProduct(res.content)

            const typess = await productService.getType()
            await setTypes(typess)
            console.log("data neeee " + res.content)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getList()
    }, [page, price, sortBy, productName, type, color, chooseSize, chooseQuantity])

    const minus = () => {
        if (chooseQuantity <= 1) {
            setChooseQuantity(chooseQuantity)
        } else {
            setChooseQuantity(chooseQuantity - 1)
        }

    }

    const openModal = async (name) => {
        try {

            await setIsModalOpen(true);
            await setDetail(name)
            const res = await productService.getImage(name)
            await setImages(res.data)
            await setUrl(res.data[0].url)
            const getSize = await productService.getSize(name)
            await setSize(getSize)
            console.log(getSize)

        } catch (e) {
            console.log(e)
        }

    };

    const closeModal = () => {
        setIsModalOpen(false);
        setDetail('')
        setUrl('')
        setImages([])
        setChooseQuantity(1)
        setChooseSize(0)
    };


    /*==================================================================

        [ Filter / Search product ]*/

    const showFilter = () => {
        setProductName('')
        setFilter(!filter)
        setSearch(false)
    }

    const showSearch = () => {
        setType('')
        setColor('')
        setPrice('')
        setSortBy('')
        setSearch(!search)
        setFilter(false)
    }

    const customStyles = {
        content: {
            top: '50%', // Đặt vị trí top theo giữa màn hình
            left: '50%', // Đặt vị trí left theo giữa màn hình
            transform: 'translate(-50%, -50%)', // Dịch chuyển modal để căn giữa
            width: '90%', // Đặt chiều rộng của modal
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
                                <div className="">
                                    <Formik initialValues={{
                                        search: productName
                                    }} onSubmit={values => {
                                        setProductName(values.search)
                                    }}>
                                        <Form className="bor8 dis-flex p-l-15" style={{width: '100%'}}>

                                            <Field
                                                className="mtext-107 cl2 size-114 plh2 p-r-15"
                                                type="text"
                                                name="search"
                                                placeholder="Search by name of product"
                                            />
                                            <button type='submit'
                                                    className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                                <i className="zmdi zmdi-search"/>
                                            </button>
                                        </Form>
                                    </Formik>

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
                                                        <NavLink onClick={() => setColor('')}
                                                                 className="filter-link filter-link-active stext-106 trans-04"
                                                                 to='#'>
                                                            All
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('')}
                                                                 className="filter-link stext-106 trans-04" to='#'>
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
                                                        <NavLink onClick={() => setColor('black')}
                                                                 className="filter-link filter-link-active stext-106 trans-04"
                                                                 to='#'>
                                                            Black
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('black')}
                                                                 className="filter-link stext-106 trans-04" to='#'>
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
                                                        <NavLink onClick={() => setColor('white')}
                                                                 className="filter-link filter-link-active stext-106 trans-04"
                                                                 to='#'>
                                                            White
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('white')}
                                                                 className="filter-link stext-106 trans-04" to='#'>
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
                                                        <NavLink onClick={() => setColor('red')}
                                                                 className="filter-link filter-link-active stext-106 trans-04"
                                                                 to='#'>
                                                            Red
                                                        </NavLink>
                                                        :

                                                        <NavLink onClick={() => setColor('red')}
                                                                 className="filter-link stext-106 trans-04" to='#'>
                                                            Red
                                                        </NavLink>
                                                }
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="filter-col4 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Types</div>
                                        <div className="flex-w p-t-4 m-r--5">
                                            {
                                                types && types.map(value => (
                                                    <NavLink
                                                        to='#' onClick={() => setType(value.name)} key={value.id}
                                                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                                                    >
                                                        {value.name}
                                                    </NavLink>
                                                ))
                                            }


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
                                                <img src={value.url} alt="IMG-PRODUCT"/>


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


                <div className="bg0   p-lr-15-lg how-pos3-parent">
                    <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                        <img src="images/icons/icon-close.png" alt="CLOSE"/>
                    </button>
                    <div className="row">
                        <div className="ProductItem-gallery-scroll col-lg-1">
                            <div
                                aria-label="Gallery thumbnails"
                                className="ProductItem-gallery-thumbnails"
                                data-animation-role="image"
                                role="group"
                            >
                                {
                                    images && images.map((value) => (
                                            <div
                                                className="ProductItem-gallery-thumbnails-item loaded"
                                                style={{minHeight: "5rem", cursor: "pointer"}}
                                                onClick={() => setUrl(value.url)}

                                            >
                                                <img
                                                    className="ProductItem-gallery-thumbnails-item-image"
                                                    data-load="false"
                                                    data-src="https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102915518-M77C3POWQPXXO63QKUZ9/ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg"
                                                    data-image="https://images.squarespace-cdn.com/content/v1/624b503d84c2ba7dc187a92a/1649102915518-M77C3POWQPXXO63QKUZ9/ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg"
                                                    data-image-dimensions="1600x1600"
                                                    data-image-focal-point="0.5,0.5"
                                                    alt="ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg"
                                                    style={{
                                                        // width: "100%",
                                                        // height: "100%",
                                                        objectPosition: "50% 50%",
                                                        objectFit: "cover"
                                                    }}
                                                    data-parent-ratio="0.7"
                                                    data-image-resolution="100w"
                                                    src={value.url}
                                                />

                                            </div>
                                        )
                                    )
                                }


                            </div>
                        </div>

                        <div className="col-md-6 col-lg-6 ">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">

                                    <div className="wrap-slick3-arrows flex-sb-m flex-w"/>
                                    <div className="slick3 gallery-lb">
                                        <div
                                            className="item-slick3"

                                        >
                                            <div className="wrap-pic-w pos-relative">
                                                <img src={url}
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
                        <div className="col-md-5 col-lg-5 ">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {products.find((value) => value.name === detail)?.name}
                                </h4>
                                <span
                                    className="mtext-106 cl2">${products.find((value) => value.name === detail)?.price}</span>
                                <p className="stext-102 cl3 p-t-23">
                                    {products.find((value) => value.name === detail)?.description}
                                </p>
                                {/*  */}
                                <Formik initialValues={{
                                    size: chooseSize,
                                    quantity: chooseQuantity
                                }} validationSchema={yup.object({
                                    size: yup.number().required("Please choose your size").min(1, "Please choose your size"),
                                    quantity: yup.number().required("Please fill quantity").min(1, "Please fill quantity")

                                })}
                                        onSubmit={values => {
                                            const res = async () => {
                                                try {
                                                    const r = await productService.addToCart(detail,values.size,localStorage.getItem("username"),chooseQuantity)
                                                    await toast.success(r.data)
                                                    console.log(r)
                                                    closeModal()
                                                }catch (a) {

                                                    // await toast.error(a.message)
                                                    await toast.error(a.response.data)

                                                }
                                            }
                                            res()

                                        }}>
                                    <Form>
                                        <div className="p-t-33">
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203  respon6"><b>Size</b></div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <Field as='select' style={{width: '100%'}} className=" btn"
                                                               name="size">
                                                            <option value=''>Choose Size</option>
                                                            {
                                                                size && size.map(value => (
                                                                    <option key={value.id}
                                                                            value={value.id}>{value.name}</option>

                                                                ))
                                                            }

                                                        </Field>

                                                        <div/>

                                                    </div>
                                                    <ErrorMessage name='size' component='span'/>
                                                </div>
                                            </div>

                                            <div className="flex-w flex-r-m p-b-10">


                                                <div style={{display:'block'}} className="size-204 flex-w flex-m respon6-next">

                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">

                                                        <div
                                                            onClick={() => minus()}
                                                            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus"/>
                                                        </div>
                                                        <Field
                                                            className="mtext-104 cl3 txt-center num-product"
                                                            type="number"
                                                            name="quantity"
                                                            value={chooseQuantity}
                                                        />
                                                        <div
                                                            onClick={() => setChooseQuantity(prevState => prevState + 1)}
                                                            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus"/>
                                                        </div>
                                                    </div>
                                                    <ErrorMessage name='quantity' component='span'/>
                                                    <button
                                                        type='submit'
                                                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 ">
                                                        Add to cart
                                                    </button>
                                                </div>


                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
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