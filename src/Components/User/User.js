import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';

const User = () => {
  return (
    <section className="conteiner">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="posta" element={<UserPhotoPost />} />
      </Routes>
    </section>
  );
};

export default User;
