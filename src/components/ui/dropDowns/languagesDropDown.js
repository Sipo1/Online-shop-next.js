
import React, { useState } from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from "../../../../styles/Languages.module.css";
import { useRouter } from 'next/router';
import Link from 'next/link';

function LanguagesDropDown({ direction, ...args }) {
    let router = useRouter()

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} className={styles.dropDown} >
            <DropdownToggle caret className={styles.langBlock} >
                <img src="https://img.icons8.com/ios/50/null/geography.png" />
            </DropdownToggle>
            <DropdownMenu {...args} className={styles.languages}>
                {router.locales.map((locale) => {
                    return <Link href={router.asPath} locale={locale}><a > <DropdownItem key={locale} className={styles.flagsection}><img src={
                        locale == "ru" ?
                        "https://img.icons8.com/color/48/null/russian-federation.png" :
                        locale == "am" ?
                            "https://img.icons8.com/color/48/null/armenia.png"
                            : locale == "en" ?
                                "https://img.icons8.com/color/48/null/usa.png" :
                                ""} />
                                </DropdownItem>
                        </a></Link>
                })}
                {/* <DropdownItem  ><img src="https://img.icons8.com/color/48/null/armenia.png" /> AM </DropdownItem>
                <DropdownItem  ><img src="https://img.icons8.com/color/48/null/russian-federation.png" /> RU </DropdownItem>
                <DropdownItem  ><img src="https://img.icons8.com/color/48/null/usa.png" /> EN</DropdownItem> */}
            </DropdownMenu>
        </Dropdown>
    );
}

LanguagesDropDown.propTypes = {
    direction: PropTypes.string,
};

export default LanguagesDropDown