import React from 'react';
import {useSelector} from "react-redux";
import s from './Footer.module.scss'

const Footer = () => {
   const footer = useSelector((state) => state.products.footer);
    return (
        <div className={s.container}>




        </div>
    );
};

export default Footer;
