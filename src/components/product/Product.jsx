import s from './Product.module.scss'
import {useState} from "react";

const Product = ({items}) => {
    const [quantityGoods, setQuantityGoods] = useState(0)
    return <>
        {items.products.map((products) => {
            return <div key={products.id} className={s.container}>
                <div className={s.wrapperProductItems}>
                    <div className={s.ProductItem}>
                        <div>
                            <img src={products.img} alt="img product"/>
                            {quantityGoods <= 0
                                ? <button className={s.addedProduct}
                                          onClick={() => setQuantityGoods(quantityGoods + 1)}>+</button>
                                : <div className={s.quantityGoods}>
                                    <button onClick={() => setQuantityGoods(quantityGoods - 1)}>-</button>
                                    <span>{quantityGoods}</span>
                                    <button onClick={() => setQuantityGoods(quantityGoods + 1)}>+</button>
                                </div>}
                        </div>
                        <h5>{products.name}</h5>
                        <span>{products.price} ₽</span>
                    </div>
                </div>
            </div>
        })}
    </>


}
export default Product
