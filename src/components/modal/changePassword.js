import axios from "axios";
import { useState } from "react";
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import styles from "../../../styles/Profile.module.css"

const ChangePasswordModal = () => {
    const [modal, setModal] = useState(false);
    const [wrong, setWrong] = useState(false)
    const [succes, setSucces] = useState(false)

    const toggle = () => setModal(!modal);
    const [changePassword, setChangePassword] = useState(
        {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        }
    )

    const submit = async (e) => {
        const token = JSON.parse(localStorage.getItem("token"))

        const formData = {
            oldPassword: changePassword.oldPassword,
            newPassword: changePassword.newPassword,
            token
        }
        setChangePassword(prev => {
            return {
                confirmPassword: "",
                oldPassword: "",
                newPassword: "",
            }
        })

        try {
           const res =  await axios.put("http://localhost:5000/api/auth/changePassword", formData)
           console.log(res.data)
            setSucces(true)
            setTimeout(() => {
                setSucces(false)
            }, 3000)

        } catch (e) {
            console.log(e)
            setWrong(true)

            setTimeout(() => {
                setWrong(false)
            }, 2000)

        }
    }

    const validatePassword = (str) => {
        var re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu
        if (!re.test(str) && !!str.length) {
            return <p >Match uppercase, lowercase, digit or #$!%*?& and make sure the length is 8 to 96 in length</p>
        }
    }
    return (
        <div className={styles.modalWrapper}>
            <p onClick={toggle} className={styles.changeText}> Change Password  </p>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle} > Change Password </ModalHeader>
                <ModalBody className={styles.modalBody}>
                    <div >
                        {succes && <p style={{ color: "green", }}>Success</p>}
                        {wrong && <p style={{ color: "red" }} >Wrong</p>}
                    </div>
                    <Label> Old Password
                        <Input
                            value={changePassword.oldPassword}
                            onChange={e => setChangePassword({ ...changePassword, oldPassword: e.target.value })}
                        />
                    </Label>
                    <Label> New Password
                        <Input
                            value={changePassword.newPassword}
                            type='password'
                            onChange={e => setChangePassword({ ...changePassword, newPassword: e.target.value })}
                        />
                        {validatePassword(changePassword.newPassword)}
                    </Label>
                    <Label> Confirm new  Password
                        <Input type='password'
                            value={changePassword.confirmPassword}
                            onChange={e => setChangePassword({ ...changePassword, confirmPassword: e.target.value })}
                        />
                    </Label>
                </ModalBody>
                <ModalFooter>
                    <Button
                        onClick={(e) => submit(e)}
                        color='primary'
                        disabled={
                            changePassword.oldPassword == "" ||
                            changePassword.newPassword == "" ||
                            changePassword.confirmPassword == "" ||
                            changePassword.newPassword != changePassword.confirmPassword ||
                            changePassword.oldPassword == changePassword.newPassword && changePassword.oldPassword.length != 0
                        }
                    >
                        Change
                    </Button>

                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ChangePasswordModal





// {(changePassword.oldPassword == changePassword.newPassword && changePassword.oldPassword.length != 0) &&
    // <p style={{ color: "red", }}>old and new password could not be same </p>}