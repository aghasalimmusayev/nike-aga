import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Items from './Items'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/ProductsSlice'
import { useLocation, useParams } from 'react-router-dom'
import Arrow from '../../childComponents/Arrow'
import { HiOutlineXMark } from "react-icons/hi2";
import '../pageCss/products.css'

function Products() {
    const { category } = useParams();
    const [productsData, setProductsData] = useState([]);
    const [selectedCat, setSelectedCat] = useState(category || 'All');
    const [priceRanges, setPriceRanges] = useState([]);
    const [filterModal, setFilterModal] = useState(false);
    const [sortOrder, setSortOrder] = useState(null);
    const location = useLocation()
    const searchText = new URLSearchParams(location.search).get('search')
    const modalRef = useRef()
    const buttonRef = useRef(null);
    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        document.title = selectedCat == 'All' ? 'All Nike Productions' : selectedCat + ' - Nike'
    }, [selectedCat])
    useEffect(() => {
        if (category) setSelectedCat(category)
        else setSelectedCat('All')
    }, [category]);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    const categories = useMemo(() => [...new Set(products?.map(item => item.category))], [products]);
    const maxPrice = useMemo(() => Math.max(...products.map(item => item.price)), [products]);
    const toggleSortBtns = useCallback(() => {
        setFilterModal(prev => !prev);
    }, []);
    const handlePriceChange = useCallback((range) => {
        setPriceRanges(prev =>
            prev.includes(range)
                ? prev.filter(item => item !== range)
                : [...prev, range]
        );
    }, []);
    const handleClickOutside = (event) => {
        if (
            filterModal &&
            modalRef.current &&
            !modalRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setFilterModal(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [filterModal]);

    return (
        <div className='product_page'>
            <div className="container">
                <div className='product_box'>
                    <div className="product_top_line">
                        <div className="product_length">{selectedCat} {`(${productsData.length})`}</div>
                        <div className='sort_btn'>
                            <button onClick={toggleSortBtns} ref={buttonRef}>
                                <span>Sort By</span>
                                <Arrow filterModal={filterModal} />
                            </button>
                        </div>
                        {filterModal &&
                            <div className='filter_box1' ref={modalRef}>
                                <div className="filter_close_btn">
                                    <HiOutlineXMark onClick={toggleSortBtns} />
                                </div>
                                <div className='sort_modal'>
                                    <h5>Sort by Price</h5>
                                    <div className="sort">
                                        <input
                                            type="radio"
                                            id='sortTypeDown'
                                            name='sortPrice'
                                            onChange={() => {
                                                setSortOrder('desc');
                                                setFilterModal(false);
                                            }}
                                            checked={sortOrder === 'desc'}
                                        />
                                        <label htmlFor="sortTypeDown">Price: High-Low</label>
                                    </div>
                                    <div className="sort">
                                        <input
                                            type="radio"
                                            id='sortTypeUp'
                                            name='sortPrice'
                                            onChange={() => {
                                                setSortOrder('asc')
                                                setFilterModal(false)
                                            }}
                                            checked={sortOrder === 'asc'}
                                        />
                                        <label htmlFor="sortTypeUp">Price: Low-High</label>
                                    </div>
                                </div>
                                <div className="price_filter">
                                    <h5>Shop by Price</h5>
                                    {[
                                        { id: 'qiymet50', label: '$0 - $50', range: '0-50' },
                                        { id: 'qiymet100', label: '$50 - $100', range: '50-100' },
                                        { id: 'qiymet150', label: '$100 - $150', range: '100-150' },
                                        { id: 'qiymetUpper', label: `$150 - upper`, range: `150-${maxPrice}` },
                                    ].map(({ id, label, range }) => (
                                        <div className='price_chooes' key={id}>
                                            <input
                                                type="checkbox"
                                                id={id}
                                                onChange={() => handlePriceChange(range)}
                                                checked={priceRanges.includes(range)}
                                            />
                                            <label htmlFor={id}>{label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>}
                    </div>
                    <div className="all_product">
                        <div className="filter_box2">
                            <div className="category_filter">
                                <button
                                    className={`category_btn ${selectedCat === 'All' ? 'active' : ''}`}
                                    onClick={() => { setSelectedCat('All') }}>
                                    All
                                </button>
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
                                {[
                                    { id: 'side50', label: '$0 - $50', range: '0-50' },
                                    { id: 'side100', label: '$50 - $100', range: '50-100' },
                                    { id: 'side150', label: '$100 - $150', range: '100-150' },
                                    { id: 'sideUpper', label: `$150 - upper`, range: `150-${maxPrice}` },
                                ].map(({ id, label, range }) => (
                                    <div className='price_chooes' key={id}>
                                        <input
                                            type="checkbox"
                                            id={id}
                                            onChange={() => handlePriceChange(range)}
                                            checked={priceRanges.includes(range)}
                                        />
                                        <label htmlFor={id}>{label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="products_items">
                            <Items
                                selectedCat={selectedCat}
                                priceRanges={priceRanges}
                                productsData={productsData}
                                sortOrder={sortOrder}
                                searchText={searchText}
                                setProductsData={setProductsData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
