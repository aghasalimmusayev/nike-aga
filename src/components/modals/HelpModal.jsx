import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import './modal.css'

function HelpModal({ helpRef }) {

    const navHelpModal = (
        <div className='help_modal' ref={helpRef}>
            <Link className='help_title' to={'/'}>Help</Link>
            <Link className='help_link' to={'/'}>Order Status</Link>
            <Link className='help_link' to={'/'}>Shipping & Delivery</Link>
            <Link className='help_link' to={'/'}>Returns</Link>
            <Link className='help_link' to={'/'}>Order Cancellation</Link>
            <Link className='help_link' to={'/'}>Size Chart</Link>
            <Link className='help_link' to={'/'}>Contact Us</Link>
            <Link className='help_link' to={'/'}>Membership</Link>
            <Link className='help_link' to={'/'}>Promotions & Discounts</Link>
            <Link className='help_link' to={'/'}>Product Advise</Link>
            <Link className='help_link' to={'/'}>Send Us Feedback</Link>
        </div>
    )
    return createPortal(navHelpModal, document.getElementById("modal_root"))
}

export default HelpModal
