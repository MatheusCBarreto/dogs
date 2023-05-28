import React, { useContext } from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStatis from './UserStatis';
import { UserContext } from '../../useContext';

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="conteiner">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatis />} />
      </Routes>
    </section>
  );
};

export default User;
