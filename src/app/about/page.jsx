import Link from "next/link";
import css from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className={css.about__section}>
        <div className={css.container}>
          <div className={css.about}>
            <Link href="/" className={css.link_back}>
              <svg
                className={css.link_back_svg}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12L19 12"
                  stroke="#191919"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="#191919"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={css.link_back_text}>Homepage</span>
            </Link>
            <div className={css.about__image_block}>
              <Image
                src="/desktop/Masha-photo.jpg"
                alt=""
                width={480}
                height={346}
                className={css.about__image}
              />
              <div className={css.about__info}>
                <p className={css.about__info_text}>
                  I am Mariia, and this is not just about design, but{" "}
                  <span className={css.about_text_bold}>
                    about the approach, mindset, life, and love for what I do
                  </span>
                  .
                </p>
                <Link href="#" className={css.about__info_link}>
                  <span className={css.about__btn}>My Resume</span>
                  <svg
                    className={css.about__btn_svg}
                    width="95"
                    height="96"
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
              </div>
            </div>
            <div className={css.about__summary}>
              <h2 className={css.about__summary_title}>Summary</h2>
              <p className={css.about__summary_text}>
                I am <span className={css.text_bold}>a product designer</span>{" "}
                from Ukraine. I{" "}
                <span className={css.text_bold}>
                  started my journey in design at the end of 2022
                </span>
                , studied a lot on my own, took on my first small web design
                projects.
              </p>
              <p className={css.about__summary_text}>
                But I know for sure that{" "}
                <span className={css.text_bold}>
                  a true professional is not defined by the number of years in
                  the field, but by constant development and the desire to
                  become better every day
                </span>
                . I completed two courses &#40;UX\UI and product design&#41;
                while working on freelance projects.
              </p>
              <p className={css.about__summary_text}>
                I want{" "}
                <span className={css.text_bold}>
                  to create cool digital products
                </span>{" "}
                that will delight both users and{" "}
                <span className={css.text_bold}>
                  bring great results to the business and the company
                </span>{" "}
                .
              </p>
            </div>
            <div className={css.about__approach}>
              <h2 className={css.about__approach_title}>Approach</h2>
              <ul className={css.about__approach_list}>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <span className={css.text_bold}>overcome challenges </span>
                    of varying complexity
                    <span className={css.text_bold}> in a complex manner</span>
                  </p>
                </li>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    solve business problems and tasks through
                    <span className={css.text_bold}>
                      {" "}
                      an individual approach
                    </span>
                  </p>
                </li>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <span className={css.text_bold}>
                      build cool communication
                    </span>{" "}
                    with every person I work with
                  </p>
                </li>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    <span className={css.text_bold}>develop myself</span> every
                    day
                  </p>
                </li>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    approach each task{" "}
                    <span className={css.text_bold}>logically</span>
                  </p>
                </li>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>
                    be a <span className={css.text_bold}>user advocate</span>
                  </p>
                </li>
                <li className={css.about__approach_item}>
                  <svg
                    className={css.about__approach_item_svg}
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L19 12"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="#191919"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  stay cool :&#41;
                </li>
              </ul>
            </div>
            <div className={css.about_more}>
              <h2 className={css.about_more_title}>More about me</h2>
              <p className={css.about_more_text}>
                Since childhood, I have{" "}
                <span className={css.text_bold}>
                  loved solving complex problems, analyzing and drawing
                  conclusions
                </span>
                , so I have always chosen interesting and challenging activities
                for myself.
              </p>
              <p className={css.about_more_text}>
                I graduated from music and high school with excellent grades
                because{" "}
                <span className={css.text_bold}>
                  I have always been thorough and responsible in everything I do
                </span>
                . I also have a master&#39; s degree in medicine, which has
                become the best disciplinary school of life for me.
              </p>
              <p className={css.about_more_text}>
                Nowadays, when I&#39;m not designing, you can find me painting
                pictures, reading books, and playing board games :&#41;
              </p>
            </div>
            <Link href="" className={css.about__contact_me}>
              <span className={css.about__contact_me_text}>Contact me</span>
              <svg
                className={css.about__contact_svg}
                width="50"
                height="50"
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
          </div>
        </div>
      </section>
    </main>
  );
}
