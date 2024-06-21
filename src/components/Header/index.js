import { NavLink } from 'react-router-dom';

import styles from './index.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <nav className={styles.nav}>
          <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')}>
            Posts
          </NavLink>
          <NavLink to="/create-post" exact className={({ isActive }) => (isActive ? 'active' : '')}>
            Create Post
          </NavLink>
        </nav>
        <button>signIn</button>
      </div>
    </header>
  );
}

export default Header;
