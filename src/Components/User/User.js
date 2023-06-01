import React, { useContext } from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStatis from './UserStatis';
import { UserContext } from '../../useContext';
import NotFound from '../NotFound';
import Head from '../Helper/Head';

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="conteiner">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
