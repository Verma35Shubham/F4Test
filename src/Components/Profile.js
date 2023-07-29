import React from "react";
import {connect} from "react-redux";

const Profile = ({user}) => {
    return(
        <div>
            <h1>Profile</h1>
            <div className="profile-page">
                <div className="profile">
                    <div className="image">
                        <img src = {user.image} alt = "profile_image"/>
                    </div>
                    <div className="user-info">
                        <div className="fname"><b>First Name:</b>{user.firstName}</div>
                        <div className="lname"><b>Last Name:</b>{user.lastName}</div>
                        <div className="email"><b>Email:</b>{user.email}</div>
                        <div className="username"><b>Username:</b>{user.username}</div>
                        <div><b>Gender:</b>{user.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state,
    };
};


export default connect(mapStateToProps)(Profile);