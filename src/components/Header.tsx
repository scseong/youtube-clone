import React, { useRef } from 'react';
import styles from './Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaYoutube, FaRegBell } from 'react-icons/fa';
import { BiVideoPlus, BiSearch } from 'react-icons/bi';
import { MdKeyboardVoice } from 'react-icons/md';

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current?.value) return;
    navigate(`results/${inputRef.current?.value}`);
  };

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
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
              <div>
                <BiSearch className={styles.searchIcon} />
              </div>
              <input
                type="text"
                name="search"
                placeholder="검색"
                ref={inputRef}
              />
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
