import React from 'react'
import { FiSearch } from "react-icons/fi";

function SearchBox({ onClick }) {
    return (
        <div className="search_box" onClick={onClick}>
            <div className="search_icon">
                <FiSearch style={{ fontSize: '20px', cursor: 'pointer' }} />
            </div>
            <input type="text" placeholder='Search' />
        </div>
    )
}

export default SearchBox
