
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import LogOut from './DropDownLogOut';
import styles from "../../../../styles/MyProfileDropDown.module.css";
import Link from 'next/link';

function MyProfileDropDownAuth({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
      <DropdownToggle caret className={styles.logOut} > My Profile </DropdownToggle>
      <DropdownMenu {...args} className={styles.logOutBlock}>
        <LogOut/>
        <Link href = { "/Profile"}>
        <DropdownItem >Profile </DropdownItem>
        </Link>

      </DropdownMenu>
    </Dropdown>
  );
}

MyProfileDropDownAuth.propTypes = {
  direction: PropTypes.string,
};

export default MyProfileDropDownAuth