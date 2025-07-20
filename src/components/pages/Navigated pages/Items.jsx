import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/ProductsSlice';
import { Link } from 'react-router-dom';

function Items({ selectedCat, priceRange, productsData, setProductsData }) {

    const { products } = useSelector(state => state.products);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    useEffect(() => {
        const filterProducts = () => {
            let filtered = products
            if (selectedCat !== 'All') filtered = filtered?.filter(item => item.category === selectedCat)
            if (priceRange && priceRange !== 'All') {
                const [min, max] = priceRange.split('-').map(Number)
                filtered = filtered?.filter(item => item.price >= min && item.price <= max)
            }
            return filtered
        }
        const filtered = filterProducts();
        setProductsData(filtered)
    }, [selectedCat, priceRange, products])

    return (
        <div>
            <h2>{selectedCat === 'All' ? 'All Products' : selectedCat}</h2>
            <div className='products'>
                {productsData &&
                    productsData?.map(item => (
                        <Link to={`/details/${item.id}`} className='product' key={item.id}>
                            <img src={item.images[0]} alt="" />
                            <h3>{item.title}</h3>
                            <h5>{item.category}</h5>
                            <p>{item.price} $</p>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default Items
