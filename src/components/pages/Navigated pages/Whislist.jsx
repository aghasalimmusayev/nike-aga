import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoTrashBin } from "react-icons/io5";
import { clearWishList, removeFromWish } from '../../../redux/WishSlice';
import { Link } from 'react-router-dom';
import { AiOutlineClear } from "react-icons/ai";

function Whislist() {

    useEffect(() => {
        document.title = 'Look the details of your Wishes'
    }, [])
    const { wishList } = useSelector(state => state.wishList)
    const dispatch = useDispatch()

    return (
        <section id='wish_list'>
            <div className="container">
                <h1 className='wish_header'>WishList</h1>
                <div className="wish_box">
                    {wishList.length > 0
                        ? wishList.map(item => (
                            <div className="wishItem" key={item.id}>
                                <Link to={`/details/${item.id}`} className="wish_item_img">
                                    <img src={item.images[0]} alt="wish_img" />
                                </Link>
                                <div className="wishItem_info">
                                    <h3 className='wishItem_name'>{item.title}</h3>
                                    <h4 className='wishItem_cat'>{item.category}</h4>
                                    <p className='wishItem_price'>Price: {item.price} $</p>
                                    <button className='wish_remove' onClick={() => dispatch(removeFromWish(item.id))}><IoTrashBin /></button>
                                </div>
                            </div>
                        ))
                        : <p className='empty_wish_info'>There are no items in your WishList.</p>
                    }
                </div>
                {wishList.length > 0 &&
                    <div className="wish_clear_btn">
                        <button onClick={() => dispatch(clearWishList())}>
                            <AiOutlineClear />
                            <span>Clear Cart</span>
                        </button>
                    </div>}
            </div>
        </section>
    )
}

export default Whislist
