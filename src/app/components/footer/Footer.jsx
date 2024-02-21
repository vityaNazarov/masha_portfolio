import css from "./Footer.module.css";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section>
      <div className={css.container}>
        <footer className={css.footer}>
          <h2 className={css.footer__text}>Have a proposal for partnership?</h2>
          <Link href="" className={css.footer__contact_link}>
            <span className={css.footer__contact_text}>Contact me</span>
            <svg
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={css.footer__contact_svg}
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
          <Link
            href="https://www.linkedin.com/feed/"
            className={css.footer__contact_linkedin}
          >
            <span className={css.footer__linkedin_text}>Linkedin</span>
            <svg
              className={css.footer__contact_svg}
              width="55"
              height="55"
              viewBox="0 0 95 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6991 58.0625L64.5566 37.9375"
                stroke="#FBF8F8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.0654 30.5712L64.5566 37.9374L57.1904 65.4287"
                stroke="#FBF8F8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="" className={css.footer__contact_mail}>
            <span className={css.footer__mail_text}>Mail</span>
            <svg
              className={css.footer__contact_svg}
              width="55"
              height="56"
              viewBox="0 0 95 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.6991 58.0625L64.5566 37.9375"
                stroke="#FBF8F8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.0654 30.5712L64.5566 37.9374L57.1904 65.4287"
                stroke="#FBF8F8"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <p className={css.footer__all_rights}>
            &#169; Mariia Nazarova 2024. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
