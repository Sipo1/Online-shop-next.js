import styles from "../styles/Registration.module.css"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


const Registration = () => {
    const navigate = useRouter()
    const [errorMessage, setErrorMessage] = useState("")
    const [registerForm, setRegisterForm] = useState({
        username: {
            value: "",
        },
        password: {
            value: ""
        },
        confirmPassword: {
            value: ""
        }
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setRegisterForm((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value
                }
            }
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const {
            username: { value: username },
            password: { value: password },
        } = registerForm

        const formData = {
            username,
            password
        }
        try {
            await axios.post("http://localhost:5000/api/auth/registration", formData)
                .then((res) => {
                    if (res.status == 200) {
                        navigate.push("/login")
                    }

                })

        } catch (e) {
            console.log(e.response)
            setErrorMessage(e.response.data.message)
        }

    }

    const validateUsername = (length) => {
        return (length < 3 && !!length) && <p style={{ color: "red" }}> value length must be more then 2 characters</p>
    }

    const validatePassword = (str) => {
        var re = /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu
        if (!re.test(str) && !!str.length) {
            return <p style={{ color: "red" }}>Match uppercase, lowercase, digit or #$!%*?& and make sure the length is 8 to 96 in length</p>
        }
    }


    return (

        <div className={styles.wrapper} >

            <form className={styles.form} onSubmit={onSubmit}>
                <div >
                    <p className={styles.errorMessage} > {errorMessage} </p>

                    <label htmlFor="nameId">
                        Username
                    </label>
                    <input
                        required
                        id="nameId"
                        value={registerForm.username.value}
                        name="username"
                        onChange={handleChange}
                        placeholder=" Username"
                        type="text"
                    />
                    {validateUsername(registerForm.username.value.length)}
                </div>
                <div>

                    <label htmlFor="passwordId">
                        Password
                    </label>
                    <input
                        id="passwordId"
                        name="password"
                        value={registerForm.password.value}
                        placeholder=" Password"
                        type="password"
                        onChange={handleChange}

                    />
                </div>
                {validatePassword(registerForm.password.value)}

                <div >

                    <label htmlFor="confirmId">
                        Confirm Password
                    </label>
                    <input
                        required
                        id="confirmId"
                        value={registerForm.confirmPassword.value}
                        name="confirmPassword"
                        onChange={handleChange}
                        placeholder=" Confirm Password"
                        type="password"
                    />
                    {registerForm.confirmPassword.value != registerForm.password.value && <p style={{color:"red"}}>password and confirm password must be same</p>}
                </div>
                <button
                    disabled={registerForm.confirmPassword.value != registerForm.password.value}
                    className={styles.formButton}
                >Register</button>
            </form >
        </div >
    )
}
export default Registration 