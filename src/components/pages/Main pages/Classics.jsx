import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getClassics } from '../../../redux/ClassicsData'
import { Link } from 'react-router-dom'
function Classics() {

    const dispatch = useDispatch()
    const { classics, loading, error } = useSelector(state => state.classics)
    useEffect(() => {
        dispatch(getClassics())
    }, [])

    return (
        <div className='classics_box'>
            <h2>Shop The Classics</h2>
            <div className="classics">
                {classics?.map(item => (
                    <Link to={'/'}>
                        <img src={item.image} alt="" />
                        <h3>{item.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Classics