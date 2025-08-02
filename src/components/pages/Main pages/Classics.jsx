import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getClassics } from '../../../redux/ClassicsData'
import { Link } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function Classics() {
    const dispatch = useDispatch()
    const { classics, loading, error } = useSelector(state => state.classics)
    const [left, setLeft] = useState(false)
    const [rigth, setRigth] = useState(true)
    const classicRef = useRef(null)

    useEffect(() => {
        dispatch(getClassics())
    }, [])

    function checkButton() {
        const container = classicRef.current
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container
            setLeft(scrollLeft > 0)
            setRigth(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }
    function scrollLeft() {
        if (classicRef.current) {
            classicRef.current.scrollLeft -= 290;
            setTimeout(checkButton, 300)
        }
    }
    function scrollRigth() {
        if (classicRef.current) {
            classicRef.current.scrollLeft += 290;
            setTimeout(checkButton, 300)
        }
    }
    useEffect(() => {
        if (classics.length > 0) {
            setTimeout(checkButton, 100)
        }
    }, [classics])

    return (
        <div className='classics_box'>
            <div className='classic_header'>
                <h2>Shop The Classics</h2>
                <div className="classic_nav_btns">
                    <button
                        className={left ? 'active' : 'inactive'}
                        onClick={scrollLeft}>
                        <SlArrowLeft />
                    </button>
                    <button
                        className={rigth ? 'active' : 'inactive'}
                        onClick={scrollRigth}>
                        <SlArrowRight />
                    </button>
                </div>
            </div>
            <div className="classics" ref={classicRef}>
                {classics?.map(item => (
                    <Link to={'/'} key={item.id}>
                        <img src={item.images[0]} alt="" />
                        <h3>{item.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Classics