import React from "react";
import {useSelector} from "react-redux";
import Product from "../product/Product";
import s from './Content.module.scss'

const Content = () => {
    const products = useSelector((state) => state.data.products);
    console.log(products)
    return <div className={s.container}>
        {products.map((items) => {
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
