import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
       
       <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
              <style jsx>{`
                  h1{
                    color: red;
                  }
              `}
            </style>
            <h1>Hunting Coder</h1>
          </div>
        </div>
       </div>

      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Image src="/coder.jpg" alt="/coder.jpg" width="999" height="285"></Image>
          </div>
        </div>
      </div>

        <div className={styles.grid}>
          <Link
            href="http://localhost:3000/blogpost/blog1"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Blog 1 <span>-&gt;</span>
            </h2>
            <p>
              Blog 1 Info
            </p>
          </Link>

          <Link
            href="http://localhost:3000/blogpost/blog2"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Blog 2 <span>-&gt;</span>
            </h2>
            <p>
              Blog 2 Info
            </p>
          </Link>

          <Link
            href="http://localhost:3000/blogpost/blog3"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Blog 3 <span>-&gt;</span>
            </h2>
            <p>
              Blog 3 Info
            </p>
          </Link>

          <Link
            href="http://localhost:3000/blogpost/blog4"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Blog 4 <span>-&gt;</span>
            </h2>
            <p>
              Blog 4 Info
            </p>
          </Link>


        </div>
      </main>
    </>
  );
}
