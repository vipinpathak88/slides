import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="form">
                <form>
                    <h1>Submit Login Form</h1>
                    <input className="input" type="text" placeholder="Enter Name" />
                    <input className="input" type="text" placeholder="Enter Email" />
                    <input className="input" type="text" placeholder="Enter Phone" />
                    <textarea className="textarea" placeholder="Message" maxlength="3000" rows="5"></textarea>
                    <NavLink to="/slides" className="btn">Login</NavLink>
                </form>
            </div>
        </div>
    );
}

export default Home;
