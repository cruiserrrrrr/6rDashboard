import React, { useState } from "react";
import styles from "./index.module.scss";
import ModuleWrapper from "../ModuleWrapper";
import CustomInput from "../CustomInput";
import ConditionItem from "../ConditionItem";
import { generateRandomId } from "../func/func";
import Button from "../Button";

const AddSkin = () => {

    const [checkBox, setCheckBox] = useState(false);

    const [nameValue, setNameValue] = useState('')
    const [maxPriceValue, setMaxPriceValue] = useState(0)
    const [floatValue, setFloatValue] = useState(0)
    const [maxMarkUpValue, setmaxMarkUpValue] = useState(0)

    const test = true
    const testToggle = (messege) => {
        console.log(messege)
    }
    const toggledTg = async () => {
        setCheckBox(!checkBox)
        test ?
            testToggle('on')
            :
            testToggle('of')
    }

    const postItem = () => {
        const randomID = generateRandomId()
        let newSkin = {
            name: nameValue,
            conditionsFloat: Number(floatValue),
            maxMarkup: Number(maxMarkUpValue),
            maxPrice: Number(maxPriceValue),
            checkFloat: false,
            checkSticker: false,
            specialFloat: false,
            id: randomID,
            status: true
        }
        fetch('http://127.0.0.1:5000/bot/add_skin', {
            method: 'POST',
            body: JSON.stringify(newSkin),
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

    return (
        <div className={styles.add_skin__wrapper}>
            <ModuleWrapper>
                <div className={styles.add_skin__container}>
                    <p className={styles.add_skin__title}>Add skin</p>
                    <div className={styles.inputs_container}>
                        <CustomInput placeholder="skin name" type="text" onChange={(event) => setNameValue(event.target.value)} value={nameValue} />
                        <CustomInput placeholder="max price" type="number" onChange={(event) => setMaxPriceValue(event.target.value)} value={maxPriceValue} />
                        <CustomInput placeholder="float" type="number" onChange={(event) => setFloatValue(event.target.value)} value={floatValue} />
                        <CustomInput placeholder="max markup" type="number" onChange={(event) => setmaxMarkUpValue(event.target.value)} value={maxMarkUpValue} />
                    </div>
                    <div className={styles.conditions_container}>
                        <ConditionItem title={'View float:'} checked={checkBox} onToggled={() => toggledTg()} />
                        <ConditionItem title={'View stickers:'} checked={checkBox} onToggled={() => toggledTg()} />
                        <ConditionItem title={'View special-float:'} checked={checkBox} onToggled={() => toggledTg()} />
                    </div>
                    <div className={styles.add_container}>
                        <Button
                            size="full_width__medium"
                            text="add"
                            onCLick={() => postItem()}
                        />
                    </div>
                </div>
            </ModuleWrapper>
        </div>
    )
}

export default AddSkin;