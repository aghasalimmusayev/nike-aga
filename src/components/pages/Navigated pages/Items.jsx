import React, { memo, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/ProductsSlice';
import { Link } from 'react-router-dom';

function Items({ selectedCat, priceRange, productsData, setProductsData }) {

    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    const filterProducts = useMemo(() => {
        let filtered = products
        if (selectedCat !== 'All') filtered = filtered?.filter(item => item.category === selectedCat)
        if (priceRange && priceRange !== 'All') {
            const [min, max] = priceRange.split('-').map(Number)
            filtered = filtered?.filter(item => item.price >= min && item.price <= max)
        }
        return filtered
    }, [selectedCat, priceRange, products])
    useEffect(() => {
        setProductsData(filterProducts)
    }, [filterProducts, setProductsData])

    return (
        <div className='products'>
            {productsData &&
                productsData?.map(item => (
                    <Link to={`/details/${item.id}`} className='product' key={item.id}>
                        <div className="product_img">
                            <img src={item.images[0]} alt="product" />
                        </div>
                        <div className="product_info">
                            <h3 className='product_name'>{item.title}</h3>
                            <h5 className='product_cat'>{item.category}</h5>
                            <p className='product_price'>{item.price} $</p>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default memo(Items)
