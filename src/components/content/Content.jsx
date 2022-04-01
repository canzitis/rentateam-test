import React from "react";
import {useSelector} from "react-redux";
import Product from "../product/Product";
import s from './Content.module.scss'

const Content = () => {
    const categories = useSelector((state) => state.categories);
    return <div className={s.container}>
        {categories.map((items) => {
            return <div key={items.id} className={s.wrapperItems}>
                <div>
                    <h4>{items.name}</h4>
                    <div className={s.griWrapperProduct}>
                        <Product items={items}/>
                    </div>
                </div>
            </div>
        })}
    </div>
}
export default Content;
