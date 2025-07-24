import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../redux/ByIdSlice'
import { CiHeart } from "react-icons/ci";

function Details() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { objById } = useSelector(state => state.objById)

    useEffect(() => {
        dispatch(getProductById(id))
    }, [dispatch, id])

    return (
        <div className="detail_page">
            <div className='container'>
                {objById && (
                    <div className='product_detail'>
                        <div className="product_img">
                            <img src={objById.images && objById.images[0]} alt="" />
                        </div>
                        <div className="product_info">
                            <h3 className='product_category'>{objById.category}</h3>
                            <h2 className='product_name'>{objById.title}</h2>
                            <p className='product_price'>{objById.price} $</p>
                            <p className='product_stock'>Stock: {objById.stock}</p>
                            <p className='product_description'>{objById.description}</p>
                            <div className="detail_btns">
                                <button className='add_to_cart'>Add to Cart</button>
                                <button className='fav_btn'>
                                    <span>Favorite</span>
                                    <div className="fav_btn_icon">
                                        <CiHeart />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Details
