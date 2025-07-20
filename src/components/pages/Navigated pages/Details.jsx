import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../redux/ByIdSlice'

function Details() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { objById } = useSelector(state => state.objById)

    useEffect(() => {
        dispatch(getProductById(id))
    }, [dispatch, id])

    return (
        <div className='container'>
            <div className='product_detail'>
                {objById && (
                    <img src={objById.images && objById.images[0]} alt="" />
                )}
            </div>
        </div>
    )
}

export default Details
