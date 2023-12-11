import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const Nav = () => {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`App ${show && 'Apps'}`}>
            <div className='flex justify-between'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                    className='w-32 cursor-pointer pl-5 pt-1 object-contain fixed'
                    onClick={() => navigate("/")}
                />

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                    className='w-10 cursor-pointer fixed right-5'
                    onClick={() => navigate("/profile")}
                />
            </div>
        </div>
    );
};
