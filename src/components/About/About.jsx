import React from 'react';
import flower from '../../assets/flower.svg';
import flowerMobile from '../../assets/flowermobile.svg';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Bonjour je m&apos;appelle Sophia !</h1>
        <p>
          Après une licence de psychologie notamment centrée sur
          l&apos;ergonomie et le handicap, je me suis orientée vers les métiers
          du numérique. Étant à la recherche d&apos;un métier où je peux
          exprimer ma créativité tout en gardant un contact humain, je me suis
          dirigée vers l&apos;UX Design. Aujourd&apos;hui je suis développeuse
          front-end, je suis capable de réaliser des sites webs en HTML, CSS,
          ainsi que des applications dynamiques Javascript et React.
        </p>
      </div>
      <img className={styles.neon} src={flower} alt="" />
      <img className={styles.neonMobile} src={flowerMobile} alt="" />
    </div>
  );
}

export default About;
