import Head from "next/head";
import { Geist, Geist_Mono, Rock_Salt, Rye } from "next/font/google";
import "@picocss/pico/css/pico.min.css";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Ryefont = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: "400",
}); 

const rockFont = Rock_Salt({
  variable: "--font-rock-salt",
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${Ryefont.variable} ${rockFont.variable}`}>
      <Head>
        <title>Niru's Odyssey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <h1 className={styles.heading}>NIRU'S ODYSSEY</h1>
      </main>

    </div>
  )
}
