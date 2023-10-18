import { Button } from "@mui/material";
import styles from "./Bienvenida.module.css";

export const Bienvenida = () => {
    const numeroWhatsApp = "3197702892"; // Reemplaza con tu número de WhatsApp
    const mensajeWhatsApp = "¡Hola! Estoy interesado en contactarte desde tu portafolio.";

    const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(
      mensajeWhatsApp
    )}`;
  return (
    <section className={styles["container-section_bienvenida"]}>
      <h1 className={styles["title-bienvenida"]}>
        I am <span>Tatiana Alejandra Jaramillo</span>
      </h1>
      <h3 className={styles["title-secondary"]}>Front-end Developer</h3>
      <p>Welcome to my journey</p>
      <Button variant="contained" className={styles["button-bienvenida"]}>
        <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
        Reach out to me
        </a>
      </Button>
    </section>
  );
};
