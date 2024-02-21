import css from "./Header.module.css";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <section className={css.header__section}>
      <div className={css.container}>
        <header className={css.header}>
          <div className={css.header__title_name}>
            <span>Mariia Nazarova </span>|<span> Product Designer</span>
          </div>
          <p className={css.greetings}>Hi there!</p>
          <p className={css.header__text}>
            I&#39;m Mariia and my job is to implement my design thinking into
            digital projects and make them high quality.
          </p>
          <nav>
            <Link href="/about" className={css.header__btn_about}>
              <span className={css.header__btn_text}>About me</span>
              <svg
                width="63"
                height="63"
                viewBox="0 0 63 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={css.header__btn_svg}
              >
                <path
                  d="M19.7997 38.1271L43.0381 24.7104"
                  stroke="#1E1E1E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.7103 19.7996L43.0378 24.7104L38.1269 43.0379"
                  stroke="#1E1E1E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </nav>
        </header>
      </div>
    </section>
  );
}
