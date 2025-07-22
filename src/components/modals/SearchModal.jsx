import React from 'react'
import Logo from '../childComponents/Logo'
import SearchBox from '../Nav/SearchBox'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSearch, openSearch } from '../../redux/ToggleSearchSlice'
import { createPortal } from 'react-dom'
import './modal.css'

function SearchModal() {
    const dispatch = useDispatch()
    const searchModal = (
        <section id='search'>
            <div className="container">
                <Logo />
                <button onClick={() => dispatch(closeSearch())}>Cancel</button>
                <div className='search_content'>
                    <SearchBox onClick={() => dispatch(openSearch())} />
                    <h4>Populat Search Terms</h4>
                    <div className="popular_terms">
                        <Link to={'/'}>slides</Link>
                        <Link to={'/'}>football cleats</Link>
                        <Link to={'/'}>air max</Link>
                        <Link to={'/'}>jordan</Link>
                        <Link to={'/'}>jordan4</Link>
                        <Link to={'/'}>dunks</Link>
                        <Link to={'/'}>air forces</Link>
                        <Link to={'/'}>soccer cleats</Link>
                    </div>
                </div>
            </div>
        </section>
    )
    return createPortal(searchModal, document.getElementById("modal_root"));
}

export default SearchModal
