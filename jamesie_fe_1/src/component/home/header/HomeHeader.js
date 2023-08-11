import '../css/main.css'
// import '../vendor/bootstrap/css/bootstrap.min.css'
import '../css/util.css'
import '../fonts/linearicons-v1.0.0/icon-font.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'
import '../vendor/css-hamburgers/hamburgers.min.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../vendor/animate/animate.css'
import '../vendor/animsition/css/animsition.min.css'
import '../vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../vendor/MagnificPopup/magnific-popup.css'
import '../vendor/slick/slick.css'
import '../vendor/daterangepicker/daterangepicker.css'
import '../vendor/bootstrap/css/bootstrap.min.css'
import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";


export const HomeHeader = () => {
    const [isTop, setIsTop] = useState(true);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsTop(currentScrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    },[localStorage.getItem("username")])

    const logOut = async () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        localStorage.removeItem("role")
        await setUsername('')
        toast.success("Log out successfully")
    }
    return (


        <>
            {/* Header */}
            <header>
                {/* Header desktop */}
                <div className="container-menu-desktop">
                    {/* Topbar */}
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    Help &amp; FAQs
                                </a>
                                {
                                    username ? <Link onClick={()=>logOut()} style={{color:'#b2b2b2'}} className="flex-c-m trans-04 p-lr-25" to='/login'>
                                        {username}
                                    </Link> : <Link className="flex-c-m trans-04 p-lr-25" to='/login'>
                                        My Account
                                    </Link>
                                }

                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    EN
                                </a>
                                <a href="#" className="flex-c-m trans-04 p-lr-25">
                                    USD
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Header Mobile */}
                <div className="wrap-header-mobile">
                    {/* Logo moblie */}
                    <div className="logo-mobile logo ">
                        <Link to='/'>

                            <img src="/anh/LOGOJAMESIE.png" alt="IMG-LOGO"/>
                        </Link>
                    </div>
                    {/* Icon header */}
                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"/>
                        </div>
                        <Link to='/shopping-cart'>
                            <div
                                className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                                data-notify={2}
                            >

                                <i className="zmdi zmdi-shopping-cart"/>


                            </div>
                        </Link>
                        <a
                            href="#"
                            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                            data-notify={0}
                        >
                            <i className="zmdi zmdi-favorite-outline"/>
                        </a>
                    </div>
                    {/* Button show menu */}
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
                    </div>
                </div>
                {/* Menu Mobile */}
                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>
                        </li>
                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    Help &amp; FAQs
                                </a>
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    My Account
                                </a>
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    EN
                                </a>
                                <a href="#" className="flex-c-m p-lr-10 trans-04">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="main-menu-m">

                        <li>
                            <a href="product.html">Shop</a>
                        </li>

                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* Modal Search */}
                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src="images/icons/icon-close2.png" alt="CLOSE"/>
                        </button>
                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search"/>
                            </button>
                            <input
                                className="plh3"
                                type="text"
                                name="search"
                                placeholder="Search..."
                            />
                        </form>
                    </div>
                </div>
            </header>
            <div style={{}} className={` ${isTop ? 'wrap-menu-desktop ' : 'fixed-header-top-0 '}`}>
                <nav className="limiter-menu-desktop container justify-content-between">
                    {/* Logo desktop */}

                    {/* Menu desktop */}
                    <div className="menu-desktop col-4">
                        <ul className="main-menu">

                            <li>
                                <a href="product.html">Shop</a>
                            </li>

                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="about.html">About</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='logo col-4m justify-content-center'>
                        <NavLink href="#" className='logo' to='/'>

                            <img src="/anh/LOGOJAMESIE.png" alt="IMG-LOGO"/>

                        </NavLink>
                    </div>
                    {/* Icon header */}
                    <div className="col-3 wrap-icon-header flex-w flex-r-m">
                        <div
                            className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search"/>
                        </div>
                        <div
                            className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                            data-notify={5}
                        >
                            <NavLink to='/shopping-cart'>
                                <i className="zmdi zmdi-shopping-cart"/>

                            </NavLink>
                        </div>
                        <a
                            href="#"
                            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                            data-notify={0}
                        >
                            <i className="zmdi zmdi-favorite-outline"/>
                        </a>
                    </div>
                </nav>
            </div>
        </>


    )
}