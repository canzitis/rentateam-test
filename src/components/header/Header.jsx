import s from './Header.module.scss'
import burgerImg from '../../img/header/BurgerMenu.png'
import basketImg from '../../img/header/basket.png'
import imgLogo from '../../img/header/logo.png'
import {useState} from "react";
import DeliveryForm from "../deliveryForm/DeliveryForm";
import Categories from "../categories/Categories";
import {useSelector} from "react-redux";

const Header = () => {
    const orderPrice = useSelector((state) => state.orderPrice);
    const [deliveryTab, setDeliveryTab] = useState(false);

    return <>
        <img src={imgLogo} alt="Logo company" className={s.logoCompany}/>
        <div className={s.wrapperBurgerItems}>
            <button><img src={burgerImg} alt="burger"/></button>
            <div>
                <span>{orderPrice} ₽</span>
                <img src={basketImg} alt="basket"/>
            </div>
        </div>
        <div className={s.deliveryWrapper}>
            <h4>Доставка в г. Москва</h4>
            <div>
                <button onClick={() => setDeliveryTab(true)} className={deliveryTab && s.active}>Доставка</button>
                <button onClick={() => setDeliveryTab(false)} className={!deliveryTab && s.active}>Самовывоз</button>
            </div>
        </div>
        {deliveryTab && <DeliveryForm/>}
        <Categories/>
    </>
}
export default Header;
