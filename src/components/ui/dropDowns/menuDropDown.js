import Link from 'next/link';
import styles from "../../../../styles/MyProfileDropDown.module.css";
import React, { useEffect, useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function MenuDropDown({ direction, isAuth }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useRouter("")
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const reload = () => {
        setTimeout(() => {
            window.location.reload()
        }, 500)
    }
    return (
        <div className="d-flex p-5">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >

                <DropdownToggle className={styles.logOut} caret> Menu</DropdownToggle>

                {toggle && <>
                    <DropdownMenu className={styles.logOutBlock}>
                        <div style={{ display: 'flex' }}>

                            <div style={{ width: "100px" }}>
                                <DropdownItem><strong>All Product</strong></DropdownItem>
                                <DropdownItem><p onClick={() => { reload(), navigate.push("/allProduct/Ipads") }}>Ipads</p></DropdownItem>
                                <DropdownItem><p onClick={() => { reload(), navigate.push("/allProduct/Phones") }} >Phones</p></DropdownItem>
                                <DropdownItem><p onClick={() => { reload(), navigate.push("/allProduct/Watches") }} >Watches</p></DropdownItem>
                                <DropdownItem><p onClick={() => { reload(), navigate.push("/allProduct/Laptops") }} >Laptops</p></DropdownItem>
                            </div>
                            <div style={{ width: "100px" }} >
                                <DropdownItem><strong onClick={() => navigate.push("/contactUs")} >Contact Us</strong></DropdownItem>
                            </div>
                            <div style={{ width: "100px" }}>
                                <DropdownItem><strong onClick={() => navigate.push("/aboutUs")} >About Us</strong></DropdownItem>
                            </div>
                            <div style={{ width: "100px" }} >
                                <DropdownItem><strong onClick={() => navigate.push("/services")} >Service</strong></DropdownItem>
                            </div>
                            <div style={{ width: "100px" }} >
                            <DropdownItem><strong>My Profile</strong></DropdownItem>
                            <DropdownItem><p onClick={() => navigate.push("/Profile")} >My Profile</p></DropdownItem>
                            {isAuth ? <DropdownItem><p onClick={() => localStorage.removeItem("token")} >Logout</p></DropdownItem>: 
                            <>
                            <DropdownItem><p onClick={() => navigate.push("/login")} >Login</p></DropdownItem>
                            <DropdownItem><p onClick={() => navigate.push("/registration")} >Registration</p></DropdownItem>
                            </>
                            }
                            
                            </div>
                        </div>

                    </DropdownMenu>
                </>}
            </Dropdown>
        </div>
    );
}

MenuDropDown.propTypes = {
    direction: PropTypes.string,
};

export default MenuDropDown