import React from "react";
import styles from "./index.module.scss";
import CustomInput from "../CustomInput";
import Button from "../Button";

interface IInventoryItem {
    name: string,
    price: number,
    image: string,
    float: number,
    seed: number,
    handler: (id: string) => void,
    id: string
}

const InventoryItem = (props: IInventoryItem) => {

    const {
        name = '',
        price = 0,
        image = '',
        float = 0,
        seed = 0,
        handler = (any) => {},
        id = ''
    } = props
    // const sell = (id: string) => {
    //     handler(id)
    // }
    return (
        <div className={styles.inventory_item}>
            <div className={styles.item_container}>
                <img
                    className={styles.item_image}
                    src={image}
                    alt={name}
                />
                <div className={styles.item_seed}>
                    <p>{seed}</p>
                </div>
                <div className={styles.item_info}>
                    <p className={styles.item_name}>{name}</p>
                    <div className={styles.item_data}>
                        <p className={styles.item_price}>{float.toFixed(6)}</p>
                        <p className={styles.item_float}>{(price / 100).toFixed(2)} RUB</p>
                    </div>
                </div>
                <div className={styles.sell_item}>
                    <CustomInput
                        type="number"
                        placeholder="sell"
                    />
                    <Button
                        text="sell"
                        size="medium"
                        onClick={handler}
                    />
                </div>
            </div>
        </div>
    )
}

export default InventoryItem;