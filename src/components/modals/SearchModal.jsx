import React, { useEffect, useState } from 'react'
import Logo from '../childComponents/Logo'
import ButtonLink from '../childComponents/ButtonLink'
import { useDispatch, useSelector } from 'react-redux'
import { closeSearch } from '../../redux/ToggleSearchSlice'
import { createPortal } from 'react-dom'
import { FiSearch } from "react-icons/fi";
import { getProducts } from '../../redux/ProductsSlice'
import './modal.css'

function SearchModal() {
    const { products } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const cat = usememo(() => new Set([...products?.map(item => item.category)]), [products])

    console.log('SearchModal render')
    const dispatch = useDispatch()
    const searchModal = (
        <section id='search'>
            <div className="container">
                <div className='search_content'>
                    <div className="search_modal_logo"><Logo /></div>
                    <div className="search_modal_box" >
                        <div className="search_modal_icon">
                            <FiSearch style={{ fontSize: '20px', cursor: 'pointer' }} />
                        </div>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='search_close_btn'>
                        <button onClick={() => dispatch(closeSearch())}>Cancel</button>
                    </div>
                </div>
                <h4 className='search_modal_header'>Populat Search Terms</h4>
                <div className="popular_terms">
                    {cat?.map((item, index) => (
                        <ButtonLink
                            key={index}
                            to={`/products/${item}`}
                            text={item}
                            onClick={() => dispatch(closeSearch())} />
                    ))}
                </div>
            </div>
        </section>
    )
    return createPortal(searchModal, document.getElementById("modal_root"));
}

export default SearchModal
