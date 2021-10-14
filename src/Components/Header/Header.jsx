import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./Header.scss";
import axios from 'axios';
import Cookies from 'js-cookie'
import { useUserActions } from '../../_actions';

const Header = () => {
    const userActions = useUserActions();
    const handleclick = () => {
        console.log(Cookies.get('csrftoken'));
        const headers = {
            'X-CSRFToken': Cookies.get('csrftoken'),
        };

        return axios.post('/api/auth/logout', {}, {headers: headers}).then((response) => {
            console.log(response);
            if(response && response.status === 200) {
                userActions.logout();
            }
        });
    }

    return (
        <div className="Header">
            <Link className="LinkName" to="/">
                <div className="Name">QAS.AI</div>
            </Link>
            <div className="Menu">
                <HiOutlineUserCircle />
            </div>
        </div>
    );
};

export default Header;
