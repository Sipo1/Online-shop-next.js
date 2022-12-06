import Link from 'next/link';
import styles from "../../styles/MyProfileDropDown.module.css"
import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import useTranslation  from 'next-translate/useTranslation';

function AllProductDropDown({ direction, ...args }) {
    const navigate = useRouter()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {t} = useTranslation()


    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const productList = ["Ipads", "Phones", "Watches", "Laptops"]

    return (
        <div className="d-flex p-5"  >
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                <DropdownToggle className={styles.logOut} caret>{t("common:products")} </DropdownToggle>
                <DropdownMenu className={styles.logOutBlock} {...args}>
                    {productList.map((item) => {
                        return <Link href={`/allProduct/${item}`} key={item}   >
                            <DropdownItem onClick={() => {
                                window.location.pathname == "/" ? null :
                                    setTimeout(() => {
                                        window.location.reload()
                                    }, 500)
                            }}>{t(`common:${item}`)} </DropdownItem>
                        </Link>
                    })}

                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

AllProductDropDown.propTypes = {
    direction: PropTypes.string,
};

export default AllProductDropDown