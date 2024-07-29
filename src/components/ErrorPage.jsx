import styles from './../styles/error-page.module.css';
import { useEffect } from 'react';

export const ErrorPage = () => {

  useEffect(() => {
    // Guardar el estilo original del body
    const originalBodyClassName = document.body.className;

    // Aplicar la clase del body de la página de error
    document.body.className = `${styles.errorPageBody}`;

    // Limpiar el estilo del body al desmontar el componente
    return () => {
      document.body.className = originalBodyClassName;
    };
  }, []); // Arreglo de dependencia vacía, significa que solo se ejecutará una vez

  return (
    <div id={styles.customBodyClass}>
      <section id="not-found">
        <div id="title"></div>
        <div className={styles.circles}>
          <p>404</p>
          <p>
            <small>¡Página no encontrada!</small>
          </p>
          <span className={`${styles.circle} ${styles.big}`}></span>
          <span className={`${styles.circle} ${styles.med}`}></span>
          <span className={`${styles.circle} ${styles.small}`}></span>
        </div>
      </section>
    </div>
  )
}
