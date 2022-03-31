import {useSelector} from "react-redux";
import s from './Categories.module.scss'
import {useState} from "react";

const Categories = () => {
    const categories = useSelector((state) => state.products);
    const [activeTab, setActiveTab] = useState(0);
    return <div className={s.productsWrapper}>
        {categories.map((items) => {
            return <button onClick={() => setActiveTab(items.id)} className={activeTab === items.id ? s.active : ''}
                           key={items.id}>{items.name}</button>
        })}
    </div>
}
export default Categories;
