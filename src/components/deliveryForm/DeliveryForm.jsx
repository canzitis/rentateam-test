import {useForm} from "react-hook-form";
import s from './DeliveryForm.module.scss'

const DeliveryForm = ({setDelivery}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return <>
        <form className={s.deliveryAddressForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3>Улица</h3>
                <input
                    style={{border: errors.name && "solid 1px #E26F6F"}}
                    placeholder='Остороженка'
                    type="text"
                    {...register("street", {required: true})}
                />
            </div>
            <div>
                <h3>Дом</h3>
                <input
                    style={{border: errors.name && "solid 1px #E26F6F"}}
                    placeholder='Остороженка'
                    type="text"
                    {...register("house", {required: true})}
                />
            </div>
        </form>
    </>
}

export default DeliveryForm;
