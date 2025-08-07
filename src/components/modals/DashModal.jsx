import { memo } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

function DashModal({ user, logOut, close, setMenuBar }) {
    console.log('dashModal render')
    const navDashModal = (
        <div className="dash_modal">
            <h3>{user.name} {user.surname}</h3>
            <Link onClick={() => {
                close();
                setMenuBar(false)
            }} to={'/profile'}>Profile</Link>
            <button onClick={() => {
                logOut();
                close();
            }}>Log out</button>
        </div>
    )
    return createPortal(navDashModal, document.getElementById('modal_root'));
}

export default memo(DashModal)