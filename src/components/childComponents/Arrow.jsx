import React, { memo } from 'react'

function Arrow() {
    console.log('Arrow rendered')

    const arrowStyle = {
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content'
    }
    const line1Style = {
        width: '10px',
        height: '2px',
        backgroundColor: '#111',
        transition: '0.3s',
        transform: 'rotate(45deg)',
    }
    const line2Style = {
        width: '10px',
        height: '2px',
        backgroundColor: '#111',
        transition: '0.3s',
        transform: 'translateX(-4px)rotate(-45deg)'
    }

    return (
        <div className='arrow' style={arrowStyle}>
            <div className="line1" style={line1Style}></div>
            <div className="line2" style={line2Style}></div>
        </div>
    )
}

export default memo(Arrow)
