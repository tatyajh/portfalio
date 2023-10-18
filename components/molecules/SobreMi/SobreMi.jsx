import Image from "next/image";
import ImagePerfil from "../../../public/Tatiana.png";
import styles from "./SobreMi.module.css";

export const SobreMi = () => {
  return (
    <section className={styles["container-sobreMi"]}>
      <Image
        src={ImagePerfil}
        alt="Imagen sobre mi"
        className={styles["image-sobreMi"]}
      />

      <div className={styles["container-info_sobreMi"]}>
        <h2>Peeking behind the curtain of my journey...</h2>
        <p>
          Graduated from Universidad de Antioquia, my journey in systems
          engineering introduced me to the vast horizons of the tech world.
          Though my initial tryst with programming was challenged by a tepid
          experience with Java, I have since been captivated by the allure of web
          development. In a short span, React has transformed from mere code to
          my canvas, allowing me to paint digital masterpieces. When not
          immersed in coding, you will find me serenading the world with my
          saxophone, embracing the rhythm of pole sport, or penning down my
          thoughts. My narrative is one of evolution, finding passion in
          unexpected corners of my profession and life.
        </p>
      </div>
    </section>
  );
};
