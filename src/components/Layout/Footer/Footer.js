import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/PUNTOCRUJIENTE.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" circular color="twitter" icon="twitter" />
            <Button as="a" href="https://www.instagram.com/fruttos_secos?igsh=cG81aWQ0cjdxbDhi&utm_source=qr" target="_blank" rel="noopener noreferrer" circular color="instagram" icon="instagram" />
            <Button as="a" href="#" target="_blank" rel="noopener noreferrer" circular color="youtube" icon="youtube" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2026 Gaming - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
