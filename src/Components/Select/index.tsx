import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

interface ISelect {
    selectTittle?: string,
    list?: Array<any>,
    placeholder?: string,
    handler?: (value: string | number) => void
}

const Select = (props: ISelect) => {

    const { list = [], placeholder = "", handler = () => {} } = props;
    const [selectedValue, setSelectedValue] = useState({ value: '' });
    const [show, setShow] = useState(false);
    const selectEl = useRef(null);

    useEffect(() => {
        const onClick = e => selectEl.current?.contains(e.target) || setShow(false)
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    useEffect(() => {
        setShow(false);
    }, [selectedValue]);

    const selectValue = (value) => {
        if (selectedValue.value === value.value) {
            setSelectedValue({ value: '' })
            handler(value)
        } else {
            setSelectedValue(value)
            handler(value)
        }
    }
    console.log(selectedValue.value)
    return (
        <div className={styles.select} ref={selectEl}>
            <div className={show ? styles.select_title__active : styles.select_title} >
                <p onClick={() => setShow(true)}>
                    {selectedValue.value ? selectedValue.value : `${placeholder}`}
                </p>
            </div>
            {
                show ?
                    <div className={styles.select_dropdown}>
                        {
                            list.map((elem, index) => {
                                return (
                                    <a
                                        // onClick={() => setSelectedValue({ value: skin })}
                                        onClick={() => selectValue({ value: elem })}
                                        className={`dropdown_items`}
                                        key={index}
                                    >
                                        {elem}
                                    </a>
                                )

                            })
                        }
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

export default Select;