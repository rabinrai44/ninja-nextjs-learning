import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
    <title>Ninja List | Home</title>
    <meta name="keywords" content="contents" />
    </Head>
    
    <div>

        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Sint ipsum ea sunt eiusmod adipisicing dolor tempor in aliquip et. Nulla
          labore cupidatat nisi duis. Ad dolore id non enim veniam proident sit do
          minim cillum do duis quis labore. Duis elit ea adipisicing minim elit
          aliquip excepteur qui. Id ad sint ea id anim officia quis amet laborum
          consequat sit elit magna.
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>

      </div></>
  );
}
