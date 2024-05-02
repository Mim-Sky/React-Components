import Image from "next/image";
import Link from "next/link";
import styles from 'card.scss'; 

const Card = ({ title, image, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link href="#">
          <a>
            <Image
              src={image}
              width={330}
              height={330}
              className={styles.image}
              alt="mountain photo"
            />
          </a>
        </Link>
      </div>
      <div className={styles.content}>
        <Link href="#">
          <a className={styles.title}>{title}</a>
        </Link>
        <p className={styles.description}>
            {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
