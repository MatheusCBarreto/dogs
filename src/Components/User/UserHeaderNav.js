import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../useContext';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg';
import { ReactComponent as Adicionar } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { userLogout } = useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const navegate = useNavigate();

  function handleLogout() {
    userLogout();
    navegate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          \
        </button>
      )}
      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && 'Adicionar fotos'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
