import React from 'react'

const Checkuser = ({ user }) => {
    return (
        <>
            {typeof user != 'undefined' && (
                <>
                    <h1> Hello < span id="checkusername" /> {user.name}</h1>
                    <h1> Email : <span id="checkemail" />{user.email} </h1>
                    <p>Welcome to the home page</p>
                </>
            )

            }
        </>
    );
};

export default Checkuser;