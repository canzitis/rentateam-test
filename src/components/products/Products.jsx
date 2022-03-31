import {useSelector} from "react-redux";
import s from './Products.module.scss'
import {useState} from "react";

const Products = () => {
    const products = useSelector((state) => state.products);
    const [activeTab, setActiveTab] = useState(0);
    return <div className={s.productsWrapper}>
        {products.map((items) => {
            return <button onClick={() => setActiveTab(items.id)} className={activeTab === items.id ? s.active : ''}
                           key={items.id}>{items.name}</button>
        })}
    </div>
}
export default Products;
