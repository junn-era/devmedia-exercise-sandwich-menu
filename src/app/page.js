'use client';
import { useState } from "react";
import styles from "./page.module.css";
import Menu from "./components/Menu";
import { CiMenuBurger } from "react-icons/ci";
import { CgClose } from "react-icons/cg";

export default function Home() {

  const [menuAberto, setMenuAberto] = useState(false);

  function atualizarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <main className={styles.main_container}>

      <header className={styles.top}>
        <button className={styles.button} onClick={atualizarMenu}>
          {menuAberto ? <CgClose /> : <CiMenuBurger />}
        </button>
      </header>

      {menuAberto && (
        <Menu />
      )}

    </main>
  );
}
