import React, { useEffect } from 'react'
import './profile.css'

function Profile() {

    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        document.title = `${user.name}'s Profile`
    }, [])
    if (!user) return null;

    return (
        <div className="my_profile">
            <div className="container">
                <div className="profile_header">
                    <div className="profile_avatar">
                        <div className="avatar_circle">
                            <span>{user.name.charAt(0)}{user.surname.charAt(0)}</span>
                        </div>
                        <button className="avatar_upload">Upload photo</button>
                    </div>
                    <div className="profile_info">
                        <h1>{user.name} {user.surname}</h1>
                        <p className="user_role">{user.role}</p>
                        <p className="join_date">Date created: {user.created}</p>
                        <span className={`status ${user.active ? 'active' : 'inactive'}`}>
                            {user.active ? 'Aktiv' : 'Qeyri-aktiv'}
                        </span>
                    </div>
                </div>
                <div className="profile_content">
                    <div className="info_card">
                        <div className="card_header">
                            <h3>Personal information</h3>
                        </div>
                        <div className="card_body">
                            <div className="info_row">
                                <label>Name:</label>
                                <span>{user.name}</span>
                            </div>
                            <div className="info_row">
                                <label>Surname:</label>
                                <span>{user.surname}</span>
                            </div>
                            <div className="info_row">
                                <label>Email:</label>
                                <span>{user.email}</span>
                            </div>
                            <div className="info_row">
                                <label>Phone:</label>
                                <span>{user.phone}</span>
                            </div>
                            <div className="info_row">
                                <label>Gender:</label>
                                <span>{user.gender}</span>
                            </div>
                        </div>
                    </div>
                    <div className="info_card">
                        <div className="card_header">
                            <h3>Account parametrs</h3>
                        </div>
                        <div className="card_body">
                            <div className="info_row">
                                <label>User ID:</label>
                                <span>{user.id}</span>
                            </div>
                            <div className="info_row">
                                <label>Role:</label>
                                <span className="role">{user.role}</span>
                            </div>
                            <div className="info_row">
                                <label>Account status:</label>
                                <span className={`${user.active}`}>
                                    {user.active}
                                </span>
                            </div>
                            <div className="info_row">
                                <label>Registration date:</label>
                                <span>{user.created}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
