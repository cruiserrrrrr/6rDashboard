import React, { useState } from "react";
import styles from "./index.module.scss";
import CustomInput from "../CustomInput";
import Toggle from "../Toggle";
import Button from "../Button";

interface IDatabaseitem {
    name?: string;
    price?: number;
    float?: number;
    checkFloat?: boolean;
    sticker?: boolean;
    special?: boolean;
    status?: boolean;
    id?: string,
    maxMarkup?: number,
    skin?: { id: string }
}

const DatabaseItem = (props: IDatabaseitem) => {

    const {
        name = '',
        price = 0,
        float = 0,
        checkFloat = false,
        sticker = false,
        special = false,
        status = false,
        id = '',
        maxMarkup = 0,
        skin = { id: '' }
    } = props;

    const [maxPriceValue, setMaxPriceValue] = useState<number>(price)
    const [floatValue, setFloatValue] = useState<number>(float)
    const [viewFloat, setViewFloat] = useState(checkFloat)
    const [checkSticker, setCheckSticker] = useState(sticker)
    const [checkSpecial, setCheckSpecial] = useState(special)
    const [checkStatus, setCheckStatus] = useState(status)
    const [botId, setBotId] = useState<string>(id)
    const switchFloat = () => {
        setViewFloat(!viewFloat)
    }
    const switchSticker = () => {
        setCheckSticker(!checkSticker)
    }
    const switchSpecial = () => {
        setCheckSpecial(!checkSpecial)
    }
    const switchStatus = () => {
        setCheckStatus(!checkStatus)
    }
    const sendSkinInfo = () => {
        const updatedSkin = {
            "name": name,
            "conditionsFloat": Number(floatValue),
            "maxMarkup": maxMarkup,
            "maxPrice": Number(maxPriceValue) * 100,
            "checkFloat": viewFloat,
            "checkSticker": checkSticker,
            "specialFloat": checkSpecial,
            "id": id,
            "status": checkStatus
        }
        fetch(`http://127.0.0.1:5000/bot/edit_skin/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedSkin),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const deleteSkin = () => {
        fetch(`http://127.0.0.1:5000/bot/delete_skin/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    const copyToClipboard = () => {
        const textToCopy = name;
        if (textToCopy) {
            const text = textToCopy;
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }
    }
    return (
        <div className={`${checkStatus ? styles.item_active : styles.item_disable} ${styles.database_item}`}>
            <div className={styles.database_item__name} onClick={copyToClipboard}>
                <p className={styles.name_title}>{name}</p>
                <a
                    className={styles.link_steam}
                    href={`https://steamcommunity.com/market/listings/730/${name}`}
                    target="_blank">
                </a>
            </div>
            <div>

            </div>
            <div className={styles.database_item__price}>
                <CustomInput
                    placeholder="Max price"
                    type="number"
                    value={maxPriceValue / 100}
                    onChange={(event) => setMaxPriceValue(event.target.value)}
                />
            </div>
            <div className={styles.database_item__float}>
                <CustomInput
                    placeholder="Float"
                    type="number"
                    value={floatValue}
                    onChange={(event) => setFloatValue(event.target.value)}
                />
            </div>
            <div className={styles.database_item__checkfloat}>
                <Toggle
                    checked={viewFloat}
                    onToggled={() => switchFloat()}
                />
            </div>
            <div className={styles.database_item__sticker}>
                <Toggle
                    checked={checkSticker}
                    onToggled={() => switchSticker()}
                />
            </div>
            <div className={styles.database_item__special}>
                <Toggle
                    checked={checkSpecial}
                    onToggled={() => switchSpecial()}
                />
            </div>
            <div className={styles.database_item__status}>
                <Toggle
                    checked={checkStatus}
                    onToggled={() => switchStatus()}
                />
            </div>
            <div className={styles.database_item__options}>
                <Button
                    text="Edit"
                    size="small"
                    onCLick={sendSkinInfo}
                />
                <Button
                    text="Delete"
                    size="small"
                    onCLick={deleteSkin}
                />
            </div>
        </div>
    )
}

export default DatabaseItem;
