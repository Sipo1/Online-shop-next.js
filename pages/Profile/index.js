import axios from 'axios'
import { useEffect, useState } from 'react'
import ChangePasswordModal from '../../src/components/modal/changePassword'
import styles from "../../styles/Profile.module.css"
import useTranslation from 'next-translate/useTranslation';

const Profile = () => {
    const { t } = useTranslation()
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const [img, setImg] = useState("")

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("userId"))
        axios.get(`http://localhost:5000/api/auth/getOneUser/${id}`)
            .then((res) => {
                setLoading(false)
                setUser(res.data.user)
            }
            )
    }, [])

    const handleFileRead = async (e) => {
        const file = e.target.files[0]
        const base64 = await convertBase64(file)
        setImg(base64)
    };


    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    };

    const changePhoto = async () => {

        try {
            const token = JSON.parse(localStorage.getItem("token"))
            const formData = {
                token,
                img
            }
            await axios.put(`http://localhost:5000/api/auth/editUserImg`, formData)
            alert("Image Saved")
        } catch (e) { alert("image format is incorrect") }

    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.image}>
                    {loading ?
                        <div className={styles.loader}>{t("common:loading")}</div>
                        :
                        <img src={img ? img : user.img ? user.img : '/user.png'} />}
                    <div className={styles.btns}>
                        <label className={styles.label}>
                            {t("common:changePhoto")}
                            <input placeholder='Change Photo'
                                type="file"
                                style={{ display: "none" }}
                                onChange={handleFileRead}
                            />
                        </label>
                        <button onClick={changePhoto}
                            disabled={!img.length ? true : false}
                        >{t("common:savePhoto")}</button>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.infoText}>
                        <p className={styles.name}> {user.username} </p>
                        <p className={styles.text1}>
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard
                            dummy text ever since the 1500s:
                        </p>
                        <p className={styles.text1} >
                            Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make
                            a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p>
                    </div>

                    <div className={styles.changeModal}>
                        <ChangePasswordModal />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile






