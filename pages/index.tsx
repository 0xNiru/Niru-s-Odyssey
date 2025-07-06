import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "@picocss/pico/css/pico.min.css"; // <- Importing Pico CSS globally
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Niru's Odyssey</title>
        <meta name="description" content="A journey of code, soul, and sunsets." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className="container" style={{ paddingTop: "4rem", textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "3rem" }}>
            Niru's Odyssey
          </h1>
          <p style={{ fontFamily: "var(--font-geist-mono)", opacity: 0.8 }}>
            No growth hacks. Just honest updates.
          </p>
          <a href="https://github.com/0xNiru/Niru-s-Odyssey" role="button">
            View on GitHub
          </a>
        </main>
      </div>
    </>
  );
}
