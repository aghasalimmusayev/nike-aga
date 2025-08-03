import React, { useEffect, useMemo, useRef, useState } from 'react'
import Logo from '../childComponents/Logo'
import ButtonLink from '../childComponents/ButtonLink'
import { useDispatch, useSelector } from 'react-redux'
import { closeSearch } from '../../redux/ToggleSearchSlice'
import { createPortal } from 'react-dom'
import { FiSearch } from "react-icons/fi";
import { getProducts } from '../../redux/ProductsSlice'
import { useNavigate } from 'react-router-dom'
import './modal.css'

function SearchModal() {
    console.log('SearchModal render')
    const [text, setText] = useState('')
    const { products } = useSelector(state => state.products)
    const inputRef = useRef(null);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const cat = useMemo(() => [...new Set(products?.map(item => item.category))], [products])
    const handleSearch = () => {
        if (text.trim()) {
            navigate(`/products?search=${encodeURIComponent(text)}`)
            dispatch(closeSearch())
        }
    }

    const searchModal = (
        <section id='search'>
            <div className="container">
                <div className='search_content'>
                    <div className="search_modal_logo"><Logo /></div>
                    <div className="search_modal_box" >
                        <input
                            type="text"
                            placeholder='Search'
                            ref={inputRef}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch()
                                }
                            }} />
                        <div className="search_modal_icon">
                            <FiSearch
                                onClick={handleSearch}
                                style={{ fontSize: '20px', cursor: 'pointer' }} />
                        </div>
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
