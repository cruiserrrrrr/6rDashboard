import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import ModuleWrapper from "../../Components/ModuleWrapper";
import Select from "../../Components/Select";
import InventoryItem from "../../Components/InventoryItem";
import Button from "../../Components/Button";

const Inventory = () => {
    const list = [
        '1 variant', '2 variant', '3 variant', '4 variant'
    ]
    
    const [inventoryList, setInventoryList] = useState([])
    const getBotStatus = () => {
        fetch('http://127.0.0.1:5000/bot/inventory')
            .then(response => response.json())
            .then(data => {
                setInventoryList(data);
                console.log(data[0].status, "status")
            })
            .catch(error => {
                console.error(error);
                // setStatusBot(false)
            });
    }
    useEffect(() => {
        getBotStatus()
    }, [])
    const postItem = () => {
        let newSkin = {
            name: "test",
            price: 1233,
            float: 0.23,
            image: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3czRY49KJnIWHm-X1Or_UhFRc7cF4n-T--Y3nj1H6_0NtYDj7LNXHclA3NwnQrgK8xr29g8C0vc_MmHpluykh7S3cnEOygAYMMLLVFjBsAQ/330x192?allow_animated=1",
            id: "asndug102r143",
            date: "15.11.23",
            // time:"16.59",
            seed: 933
        }
        fetch('http://127.0.0.1:5000/bot/inventory_add_skin', {
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

    const deleteSkin = (id): void => {
        fetch(`http://127.0.0.1:5000/bot/invenory_delete_skin/${id}`, {
            method: 'DELETE',
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
        <div className={styles.inventory_wrapper}>
            <ModuleWrapper>
                <div className={styles.inventory_container}>
                    <div className={styles.inventory_filters}>
                        <Select
                            list={list}
                            placeholder="huita"
                        />
                        <Select
                            list={list}
                            placeholder="huita"
                        />
                        <Select
                            list={list}
                            placeholder="huita"
                        />
                        <Select
                            list={list}
                            placeholder="huita"
                        />
                        <Select
                            list={list}
                            placeholder="huita"
                        />
                        <Button
                            size="medium"
                            text={'post'}
                            onClick={postItem}
                        />
                    </div>
                    <div className={styles.inventory}>
                        {inventoryList.map((item, index) => (
                            <InventoryItem
                                key={index}
                                name={item.name}
                                price={item.price}
                                float={item.float}
                                seed={item.seed}
                                image={item.image}
                                id={item.id}
                                handler={deleteSkin(item.id)}
                            />
                        ))}
                    </div>

                </div>
            </ModuleWrapper>
        </div>
    )
}

export default Inventory;