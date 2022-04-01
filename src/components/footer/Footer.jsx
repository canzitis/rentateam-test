import React from 'react';
import {useSelector} from "react-redux";
import s from './Footer.module.scss'
import Subsection from "./subsection/Subsection";

const Footer = () => {
    const footer = useSelector((state) => state.footer);
    return (
        <div className={s.container}>
            <div><img src={footer.img} alt="LogoFooter"/></div>

            <div className={s.wrapperSection}>
                {footer.data.map((item) => {
                    return <div key={item.id} className={s.sectionWrapper}>
                        {item.section ? <h3>{item.section}</h3> : <img src={item.img} alt=""/>}
                        <Subsection item={item}/>
                    </div>
                })}
            </div>

            <div className={s.socialInfoWrapper}>
                <div>
                    {footer.socialMedia.map((i) => {
                        return <a key={i.src} href={i.href}><img src={i.src} alt=""/></a>
                    })}
                </div>
                <div>
                    {footer.playMarket.map((i) => {
                        return <a key={i.src} href={i.href}><img src={i.src} alt=""/></a>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer;
