import React from 'react';
import { NavLink } from 'react-router-dom';

const UserHeaderNav = () => {
  return (
    <nav>
      <NavLink to="/conta">Minhas fotos</NavLink>
      <NavLink to="/conta/estatísticas">Estatísticas</NavLink>
      <NavLink to="/conta/postar">Adicionar fotos</NavLink>
      <button>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
