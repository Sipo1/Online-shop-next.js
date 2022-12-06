import Link from 'next/link';
import styles from "../../../../styles/MyProfileDropDown.module.css";
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import  useTranslation  from 'next-translate/useTranslation';

function MyProfileDropDown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {t} = useTranslation()

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle className={styles.logOut} caret>{t("common:myProfile")} </DropdownToggle>
        <DropdownMenu className={styles.logOutBlock} {...args}>
          <Link href={"/registration"}>

             <DropdownItem>{t("common:registr")}</DropdownItem>

          </Link>

          <Link href={"/login"}>
           <DropdownItem>{t("common:login")} </DropdownItem> 
          </Link>


        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

MyProfileDropDown.propTypes = {
  direction: PropTypes.string,
};

export default MyProfileDropDown