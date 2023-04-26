import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaYoutube, FaRegBell } from 'react-icons/fa';
import { BiVideoPlus, BiSearch } from 'react-icons/bi';
import { MdKeyboardVoice } from 'react-icons/md';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link to="/">
            <FaYoutube className={styles.logoColor} size="2rem" />
            <span draggable>YouTube</span>
          </Link>
        </h1>
      </div>
      <div className={styles.search}>
        <div className={styles.formBox}>
          <form action="">
            <div className={styles.inputBox}>
              <div>
                <BiSearch className={styles.searchIcon} />
              </div>
              <input type="text" placeholder="검색" />
            </div>
            <button className={styles.submitBtn}>
              <BiSearch />
            </button>
          </form>
        </div>
        <button>
          <MdKeyboardVoice size="1.5rem" />
        </button>
      </div>
      <div className={styles.icons}>
        <button>
          <BiVideoPlus size="1.5rem" />
        </button>
        <button>
          <FaRegBell size="1.5rem" />
        </button>
        <button>
          <img src="" alt="" />
        </button>
      </div>
    </header>
  );
}
