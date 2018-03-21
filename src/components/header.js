import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li>
                        <Link to='/add'>Add post</Link>
                    </li>
                    <li>
                        <Link to='/list'>Posts</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
