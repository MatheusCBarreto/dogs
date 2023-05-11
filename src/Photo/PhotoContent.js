import React from 'react';
import styles from './PhotoContent.module.css';
import PhotoComments from './PhotoComments';
import { Link } from 'react-router-dom';

const PhotoContent = ({ data }) => {
  console.log(data);
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <Link to={'/perfil/${photo.author}'}>@{photo.author}</Link>
        <span className={styles.vizualizacoes}>{photo.acessos}</span>

        <h1 className="title">
          <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
          <li>{photo.peso} kg</li>
          <li>{photo.idade === 1 ? 'anos' : 'ano'} </li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
