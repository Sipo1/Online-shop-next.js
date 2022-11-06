import axios from "axios"
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/MostSelledItem.module.css"

export const getServerSideProps = async (context) => {
    const { id } = context.params
    return {
        props: {
            id
        }
    }
}

const MostSelledItem = ({ id }) => {
    const [toggleBasket, setToggleBasket] = useState(false)
    const [mostSelledItemsData, setMostSelledItemsData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:5000/api/mostSaledOneItemsGet/" + id)
            .then(res => {
                setLoading(false)
                setMostSelledItemsData(res.data)
            })
    }, [id])

    const getBasketId = async (id) => {
        const res = await axios.put("http://localhost:5000/api/editBasket/" + id)
        localStorage.setItem("isToggle", JSON.stringify(true))
        setToggleBasket(true)
        const response = await axios.post("http://localhost:5000/api/basketPost", mostSelledItemsData)

    }

    const foo = () => {
        return JSON.parse(localStorage.getItem("isToggle"))
    }

    return (!loading &&
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.imgBlock}>
                    <img src={mostSelledItemsData.img} />
                </div>
                <div className={styles.infoBlock}>
                    <p>{mostSelledItemsData.name}</p>
                    <p>{mostSelledItemsData.description}</p>
                    <p>{mostSelledItemsData.price}</p>
                    <div>
                        {foo() ?
                            <Link href={"/basket"}>
                                <a>
                                    <button className={styles.button} > Go To Basket </button>
                                </a>
                            </Link> :
                            <button className={styles.button} onClick={() => {
                                getBasketId(id);
                            }}> Add to basket </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MostSelledItem

