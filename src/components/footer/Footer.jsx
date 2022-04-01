import React from 'react';
import {useSelector} from "react-redux";
import s from './Footer.module.scss'

const Footer = () => {
    const footer = useSelector((state) => state.products);
    return (
        <div className={s.container}>
            <img src={footer.footer.img} alt=""/>


        </div>
    );
};

export default Footer;
