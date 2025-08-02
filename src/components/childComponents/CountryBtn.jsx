import React, { memo } from 'react'
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useSelector } from 'react-redux';

function CountryBtn({ openCModal }) {
    const { countryName } = useSelector(state => state.country)

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
                <span style={spanStyle}>{countryName}</span>
            </button>
        </div>
    )
}

export default memo(CountryBtn)
