import React from 'react'
import { HiOutlineGlobeAlt } from "react-icons/hi2";

function CountryBtn({ openCModal }) {

    const buttonStyle = {
        border: "none",
        background: "none",
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: "pointer"
    }
    const globeStyle = {
        fontSize: '18px',
        opacity: 0.7
    }
    const spanStyle = {
        fontSize: "0.9rem",
        fontWeight: 700,
        color: "#666"
    }

    return (
        <div>
            <button style={buttonStyle}
                onClick={openCModal}>
                <HiOutlineGlobeAlt style={globeStyle} />
                <span style={spanStyle}>United States</span>
            </button>
        </div>
    )
}

export default CountryBtn
