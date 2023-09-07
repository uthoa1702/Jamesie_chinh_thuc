import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import * as orderHistoryService from "../service/OrderHistoryService"
import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {useNavigate} from "react-router-dom";


export const OrderHistory = () => {
    const [orders, setOrders] = useState([])
    const [orderDetail, setOrderDetail] = useState([])
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    const fetchApi = async () => {
        try {
            const res = await orderHistoryService.getList();
            setOrders(res)
        } catch (e) {
            navigate("/")
        }

    }
    const getOrderDetail = async (id) => {
        try {
            const res = await orderHistoryService.getListDetail(id)
            await setOrderDetail(res)

        } catch (e) {
            navigate("/")
        }
    }

    useEffect(() => {
        fetchApi()
        document.title = "Order history"
    }, [])
    const isModalOpen = (id) => {
        setModal(!modal)
        getOrderDetail(id)
    }
    const closeModal = () => {
        setModal(!modal)
    }
    const customStyles = {
        content: {
            top: '50%', // Đặt vị trí top theo giữa màn hình
            left: '50%', // Đặt vị trí left theo giữa màn hình
            transform: 'translate(-50%, -50%)', // Dịch chuyển modal để căn giữa
            width: '50%', // Đặt chiều rộng của modal
            height: '70%', // Đặt chiều cao của modal
        },
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-12 m-t-150 m-b-50">
                        <div className=" m-lr-0-xl">
                            <div className="wrap-table-shopping-cart">
                                <div><h3>Order history</h3></div>
                                <table className="table-shopping-cart  table-striped table-hover">
                                    <tbody>
                                    <tr className="table_head table-dark">
                                        <th className="column-1">No.</th>
                                        <th className="column-2">Order Code</th>
                                        <th className="column-3">Create At</th>
                                        <th className="column-4">Total</th>
                                        <th className="column-5">Status</th>
                                        <th className="column-5">Detail</th>
                                    </tr>
                                    {
                                        orders?.length > 0 ? orders.map((value, index) => (
                                            <tr className="table_row" key={index}>
                                                <td className="column-1">
                                                    {index + 1}
                                                </td>
                                                <td className="column-2">{value.orderCode}</td>
                                                <td className="column-3">{value.createTime}</td>
                                                <td className="column-4">$ {value.total.toFixed(2)}</td>
                                                {
                                                    value.status === "Confirmed" ? <td className="column-5 ">
                                                        <div className="status confirmed">{value.status}</div>
                                                    </td> : <td className="column-5">
                                                        <div className="status pending">{value.status}</div>
                                                    </td>
                                                }


                                                <td className="column-5"><InfoRoundedIcon
                                                    onClick={() => isModalOpen(value.id)}
                                                    style={{cursor: "pointer", color: "blue"}}/>
                                                </td>
                                            </tr>
                                        )) : <tr className="" style={{height:'170px'}} >
                                            <th className="align-content-center" colSpan={6} ><div className="justify-content-center"  style={{color:'red',textAlign:"center"}}>Please buy something to see order history ^^'</div></th>
                                        </tr>
                                    }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal style={customStyles}
                   isOpen={modal}
                   onRequestClose={closeModal}
                   contentLabel="Example Modal"
                   shouldCloseOnOverlayClick={true}>
                <table className="table-shopping-cart table-striped table-hover">
                    <tbody>
                    <tr className="table_head">
                        <th className="column-1">No.</th>
                        <th className="column-2">Image</th>
                        <th className="column-3">Name</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Price</th>
                        <th className="column-5">Status</th>
                    </tr>
                    {
                        orderDetail ? orderDetail.map((value, index) => (
                            <tr className="table_row" key={index}>
                                <td className="column-1">
                                    {index + 1}
                                </td>
                                <td className="column-2">
                                    <div className="how-itemcart1"
                                    >
                                        <img src={value.products.image1} alt="IMG"/>
                                    </div>
                                </td>
                                <td className="column-3">{value.products.name}</td>
                                <td className="column-4">{value.amount}</td>
                                <td className="column-5">$ {value.total}</td>
                                {
                                    value.status === "Confirmed" ? <td className="column-6 ">
                                        <div className="status confirmed">{value.status}</div>
                                    </td> : <td className="column-6">
                                        <div className="status pending">{value.status}</div>
                                    </td>
                                }


                            </tr>
                        )) : <div className='align-content-center'>Not found</div>
                    }


                    </tbody>
                </table>


            </Modal>
        </>
    )
}