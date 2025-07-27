import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

function DashModal({ user, logOut, close }) {
    const navDashModal = (
        <div className="dash_modal">
            <h3>{user.name} {user.surname}</h3>
            <Link onClick={close} to={'/profile'}>Profile</Link>
            <button onClick={() => {
                logOut();
                close();
            }}>Log out</button>
        </div>
    )
    return createPortal(navDashModal, document.getElementById('modal_root'));
}

export default DashModal