import React, { useEffect, useState } from 'react'
import Items from './Items'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/ProductsSlice'
import { useParams } from 'react-router-dom'
import Arrow from '../../childComponents/Arrow'
import '../pageCss/products.css'
import { HiOutlineXMark } from "react-icons/hi2";

function Products() {

    const { category } = useParams()
    const [productsData, setProductsData] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCat, setSelectedCat] = useState(category || 'All')
    const [priceRange, setPriceRange] = useState('All')
    const [filterModal, setFilterModal] = useState(false)
    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        if (category) setSelectedCat(category)
        else setSelectedCat('All')
    }, [category])
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    useEffect(() => {
        const categs = new Set([...products?.map(item => item.category)])
        setCategories([...categs])
    }, [products])
    const prices = [...products?.map(item => item.price)]
    const maxPrice = Math.max(...prices)
    function toggleSortBtns() {
        setFilterModal(!filterModal)
    }

    return (
        <div className='product_page'>
            <div className="container">
                <div className='all_product'>
                    <div className="product_top_line">
                        <div className="product_length">{selectedCat} {`(${productsData.length})`}</div>
                        <div className='sort_btn'>
                            <button onClick={toggleSortBtns}>
                                <span>Sort By</span>
                                <Arrow />
                            </button>
                            {filterModal &&
                                <div className='filter_box1'>
                                    <div className="filter_close_btn">
                                        <HiOutlineXMark onClick={toggleSortBtns} />
                                    </div>
                                    <div className='sort_modal'>
                                        <h5>Sort by</h5>
                                        <div className="sort">
                                            <input type="radio" id='sortTypeDown' name='sortPrice' onClick={() => setFilterModal(false)} />
                                            <label htmlFor="sortTypeDown">Price: High-Low</label>
                                        </div>
                                        <div className="sort">
                                            <input type="radio" id='sortTypeUp' name='sortPrice' onClick={() => setFilterModal(false)} />
                                            <label htmlFor="sortTypeUp">Price: Low-High</label>
                                        </div>
                                    </div>
                                    <div className="price_filter">
                                        <h5>Shop by Price</h5>
                                        <div className='price_chooes'>
                                            <input
                                                type="radio"
                                                name='filterPrice'
                                                id='qiymetAll'
                                                onChange={() => { setPriceRange('All') }} onClick={() => setFilterModal(false)} />
                                            <label htmlFor="qiymetAll">All</label>
                                        </div>
                                        <div className='price_chooes'>
                                            <input
                                                type="radio"
                                                name='filterPrice'
                                                id='qiymet50'
                                                onChange={() => { setPriceRange('0-50') }} onClick={() => setFilterModal(false)} />
                                            <label htmlFor="qiymet50">$0 - $50</label>
                                        </div>
                                        <div className='price_chooes'>
                                            <input
                                                type="radio"
                                                name='filterPrice'
                                                id='qiymet100'
                                                onChange={() => { setPriceRange('50-100') }} onClick={() => setFilterModal(false)} />
                                            <label htmlFor="qiymet100">$50 - $100</label>
                                        </div>
                                        <div className='price_chooes'>
                                            <input
                                                type="radio"
                                                name='filterPrice'
                                                id='qiymet150'
                                                onChange={() => { setPriceRange('100-150') }} onClick={() => setFilterModal(false)} />
                                            <label htmlFor="qiymet150">$100 - $150</label>
                                        </div>
                                        <div className='price_chooes'>
                                            <input
                                                type="radio"
                                                name='filterPrice'
                                                id='qiymetUpper'
                                                onChange={() => setPriceRange(`150-${maxPrice}`)} />
                                            <label htmlFor="qiymetUpper">$150 - upper</label>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                    <div className="filter_box2">
                        <div className="category_filter">
                            <button
                                className={`category_btn ${selectedCat === 'All' ? 'active' : ''}`}
                                onClick={() => { setSelectedCat('All') }}
                                defaultChecked>
                                All</button>
                            {categories &&
                                categories?.map((item, index) => (
                                    <button
                                        className={`category_btn ${selectedCat === item ? 'active' : ''}`}
                                        key={index}
                                        onClick={() => { setSelectedCat(item) }}>
                                        {`${item[0].toUpperCase()}${item.slice(1)}`}
                                    </button>
                                ))}
                        </div>
                        <div className="price_filter">
                            <div className='price_chooes'>
                                <input
                                    type="radio"
                                    name='filterPrice'
                                    id='qiymetAll'
                                    onChange={() => { setPriceRange('All') }} />
                                <label htmlFor="qiymetAll">All</label>
                            </div>
                            <div className='price_chooes'>
                                <input
                                    type="radio"
                                    name='filterPrice'
                                    id='qiymet50'
                                    onChange={() => { setPriceRange('0-50') }} />
                                <label htmlFor="qiymet50">$0 - $50</label>
                            </div>
                            <div className='price_chooes'>
                                <input
                                    type="radio"
                                    name='filterPrice'
                                    id='qiymet100'
                                    onChange={() => { setPriceRange('50-100') }} />
                                <label htmlFor="qiymet100">$50 - $100</label>
                            </div>
                            <div className='price_chooes'>
                                <input
                                    type="radio"
                                    name='filterPrice'
                                    id='qiymet150'
                                    onChange={() => { setPriceRange('100-150') }} />
                                <label htmlFor="qiymet150">$100 - $150</label>
                            </div>
                            <div className='price_chooes'>
                                <input
                                    type="radio"
                                    name='filterPrice'
                                    id='qiymetUpper'
                                    onChange={() => setPriceRange(`150-${maxPrice}`)} />
                                <label htmlFor="qiymetUpper">$150 - upper</label>
                            </div>
                        </div>
                    </div>
                    <div className="products_items">
                        <Items
                            selectedCat={selectedCat}
                            priceRange={priceRange}
                            productsData={productsData}
                            setProductsData={setProductsData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
