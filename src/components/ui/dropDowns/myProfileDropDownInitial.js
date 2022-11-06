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

function MyProfileDropDown({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle className={styles.logOut} caret>My Profile </DropdownToggle>
        <DropdownMenu className={styles.logOutBlock} {...args}>
          <Link href={"/registration"}>

             <DropdownItem>Registration</DropdownItem>

          </Link>

          <Link href={"/login"}>
           <DropdownItem>Login </DropdownItem> 
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