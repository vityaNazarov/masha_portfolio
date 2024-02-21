import Image from "next/image";
import Link from "next/link";
import css from "./maven-group.module.css";

export default function page() {
  return (
    <main>
      <section className={css.ezygo__section}>
        <div className={css.container}>
          <div className={css.ezygo}>
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
            <div className={css.main_img_block}>
              <Image
                src="/desktop/maven/maven-main.png"
                alt=""
                width="804"
                height="461"
              />
              <h2 className={css.main_img_name}>Maven Group</h2>
            </div>
            <div className={css.about}>
              <div className={css.about_title_block}>
                <h3 className={css.about_title}>About</h3>
                <svg
                  className={css.about_title_svg}
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 15L36 57"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57 36L36 57L15 36"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={css.about_text_block}>
                <p className={css.about_text}>
                  Maven Group Furniture is a{" "}
                  <span className={css.about_text_span}>
                    Ukrainian manufacturer of modern furniture
                  </span>{" "}
                  that meets the needs of not only local consumers but also
                  international markets.
                </p>
                <p className={css.about_text}>
                  <span className={css.about_text_span}>
                    The client&#39;s main desire was to create an MVP version of
                    their website to increase the conversion rate of sales.
                  </span>{" "}
                  In the future, they plan to expand the site&#39;s
                  functionality. The client&#39;s requirements for the{" "}
                  <span className={css.about_text_span}>
                    website included an emphasis on the company&#39;s history
                    and product quality, a modern presentation of the
                    assortment, and a demonstration of all possible areas of
                    cooperation,
                  </span>{" "}
                  such as individual orders, B2B, and mass production.
                </p>
                <p className={css.about_text}>
                  The website was developed in{" "}
                  <span className={css.about_text_span}>two languages</span> -
                  Ukrainian for the domestic market and English for foreign
                  markets.
                </p>
              </div>
            </div>
            <div className={css.problem_and_solution}>
              <div className={css.problem_block}>
                <span className={css.problem_title_block}>
                  <h3 className={css.problem_title}>Problem</h3>

                  <svg
                    className={css.problem_title_svg}
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43 17.9166L43 68.0833"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M68.0833 42.9999L43 68.0833L17.9166 42.9999"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p className={css.problem_and_solution_text}>
                  <span className={css.problem_and_solution_text_bold}>
                    The decline in sales of goods through Instagram,
                  </span>{" "}
                  the need for a website that is modern and attractive, will{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    focus on the product catalog
                  </span>{" "}
                  and help in communication with managers who will already{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    provide full consultation to the client.
                  </span>
                </p>
              </div>
              <div className={css.solution_block}>
                <span className={css.problem_title_block}>
                  <h3 className={css.problem_title}>Solution</h3>

                  <svg
                    className={css.problem_title_svg}
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43 17.9166L43 68.0833"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M68.0833 42.9999L43 68.0833L17.9166 42.9999"
                      stroke="#191919"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p className={css.problem_and_solution_text}>
                  <span className={css.problem_and_solution_text_bold}>
                    An adaptive website
                  </span>{" "}
                  with tablet and mobile adaptives, made in two languages{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    for local and foreign markets
                  </span>{" "}
                  with a large informative part{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    to cover the needs of the customer and business.
                  </span>
                </p>
                <p className={css.problem_and_solution_text}>
                  <span className={css.problem_and_solution_text_bold}>
                    Also an emphasis on the product
                  </span>{" "}
                  and the ability to provide feedback from the company to the
                  needs of the client.
                </p>
              </div>
            </div>

            <div className={css.section_role}>
              <div className={css.role_imgs}>
                <ul className={css.role_imgs_list}>
                  <li className={css.role_imgs_item}>
                    <Image
                      className={css.role_img}
                      alt=""
                      width="680"
                      height="391"
                      src="/desktop/maven/maven-role-1.png"
                    />
                  </li>
                  <li className={css.role_imgs_item}>
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/maven/maven-role-2.png"
                    />
                  </li>
                </ul>
              </div>
              <div className={css.role_designer}>
                <span className={css.role}>Role</span>

                <svg
                  className={css.role_designer_svg}
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 15L36 57"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57 36L36 57L15 36"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className={css.product_designer}>UX/UI Designer</p>
              </div>
            </div>

            <div className={css.workflow_stages}>
              <h3 className={css.workflow_title}>Workflow Stages</h3>
              <p className={css.workflow_text}>
                In the course of the work, an important aspect was{" "}
                <span className={css.workflow_text_bold}>
                  the proper communication with the client
                </span>
                , during which corrections were made based on the results of the
                work, which led to{" "}
                <span className={css.workflow_text_bold}>
                  effective cooperation and a good result
                </span>
                .
              </p>

              <svg
                className={css.workflow_svg}
                width="86"
                height="86"
                viewBox="0 0 86 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43 17.9166L43 68.0833"
                  stroke="#191919"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M68.0833 42.9999L43 68.0833L17.9166 42.9999"
                  stroke="#191919"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>
                Research & Moodboard
              </span>
            </div>

            <div className={css.project_img_block}>
              <Image
                className={
                  css.project_img_24 + " " + css.research_and_moodboard_1
                }
                alt=""
                width="532"
                height="295"
                src="/desktop/maven/research-and-moodboard-1.png"
              />
              <Image
                className={
                  css.project_img_24 + " " + css.research_and_moodboard_2
                }
                alt=""
                width="532"
                height="295"
                src="/desktop/maven/research-and-moodboard-2.png"
              />
            </div>
            <div className={css.project_description_block}>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Problem</span>:
                It was an{" "}
                <span className={css.project_description_bold}>
                  unknown niche
                </span>{" "}
                that needed research.{" "}
                <span className={css.project_description_bold}>
                  The client wants to see in advance the visualization
                </span>{" "}
                and the mood with which we will move forward.
              </p>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Solution</span>:
                I{" "}
                <span className={css.project_description_bold}>
                  studied the market and this business area in detail
                </span>{" "}
                to better understand it. In my research, I{" "}
                <span className={css.project_description_bold}>
                  relied more on the European market
                </span>
                , as it is more developed in this area. Formulated and discussed
                options for moodboards with the customer.
              </p>
            </div>

            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>
                Competitive analysis
              </span>
            </div>

            <div className={css.project_img_block}>
              <Image
                className={css.project_img_24 + " " + css.analysis_1}
                alt=""
                width="534"
                height="460"
                src="/desktop/maven/analysis-1.png"
              />
              <Image
                className={css.project_img_24 + " " + css.analysis_2}
                alt=""
                width="534"
                height="460"
                src="/desktop/maven/analysis-2.png"
              />
            </div>
            <div className={css.project_description_block}>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Problem</span>:
                Analysis of direct and indirect competitors{" "}
                <span className={css.project_description_bold}>
                  to determine the emphasis and patterns
                </span>{" "}
                in this business niche,{" "}
                <span className={css.project_description_bold}>
                  study trends, similarities and differences
                </span>{" "}
                among them.
              </p>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Solution</span>:
                It was important for me to find out from the client{" "}
                <span className={css.project_description_bold}>
                  which competitors&#39; websites he considers strong and
                  visually appealing
                </span>
                , what he likes and what he doesn&#39;t. Thus, in addition to my
                personal analysis, I{" "}
                <span className={css.project_description_bold}>
                  learned a lot of the client&#39;s wishes and preferences
                </span>
                , which helped me build a further strategy.
              </p>
            </div>

            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>
                Wireframing
              </span>
            </div>

            <div className={css.project_img_block}>
              <Image
                className={css.project_img_24 + " " + css.wireframing_1}
                alt=""
                width="1080"
                height="523"
                src="/desktop/maven/wireframing-1.jpg"
              />
            </div>
            <div className={css.project_description_block}>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Problem</span>:
                Iteratively,{" "}
                <span className={css.project_description_bold}>
                  through communication with the customer
                </span>
                , build the website architecture, taking into account all the
                wishes, as well as{" "}
                <span className={css.project_description_bold}>
                  conclusions and hypotheses
                </span>{" "}
                from the analytics stage.
              </p>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Solution</span>:
                It was important to{" "}
                <span className={css.project_description_bold}>
                  correctly place all the information
                </span>{" "}
                in such a way that it would be{" "}
                <span className={css.project_description_bold}>
                  perceived by users with interest and simplicity
                </span>
                . It was also important to emphasize the customer&#39;s needs,
                but to do so in a structured and compositional way.
              </p>
            </div>

            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>UI stage</span>
            </div>

            <div className={css.project_img_block + " " + css.ui_stage_block}>
              <Image
                className={css.project_img_24 + " " + css.ui_stage_1}
                alt=""
                width="351"
                height="288"
                src="/desktop/maven/ui-stage-1.png"
              />
              <Image
                className={css.project_img_24 + " " + css.ui_stage_2}
                alt=""
                width="351"
                height="288"
                src="/desktop/maven/ui-stage-2.png"
              />
              <Image
                className={css.project_img_24 + " " + css.ui_stage_3}
                alt=""
                width="348"
                height="288"
                src="/desktop/maven/ui-stage-3.png"
              />
            </div>
            <div className={css.project_description_block}>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Problem</span>:
                Create a{" "}
                <span className={css.project_description_bold}>
                  minimalistic design
                </span>{" "}
                that is not cluttered with a bunch of elements{" "}
                <span className={css.project_description_bold}>
                  according to modern trends.
                </span>
              </p>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Solution</span>:
                It should be noted that{" "}
                <span className={css.project_description_bold}>
                  the font, color scheme, and all content were provided by the
                  client
                </span>{" "}
                for mandatory use. With certain limitations in the visual style,
                my task was{" "}
                <span className={css.project_description_bold}>
                  to create a lightweight modern website
                </span>
                . I achieved this result by structuring the content well, making
                the content elements large and leaving{" "}
                <span className={css.project_description_bold}>
                  a lot of negative space
                </span>
                . The client was very pleased with the result.
              </p>
            </div>

            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>Adaptation</span>
            </div>

            <div className={css.project_img_block + " " + css.adaptation_block}>
              <Image
                className={css.project_img_24 + " " + css.adaptation_1}
                alt=""
                width="593"
                height="341"
                src="/desktop/maven/adaptation-1.png"
              />
              <div
                className={
                  css.project_img_subblock + " " + css.adaptation_subblock
                }
              >
                <Image
                  className={css.project_img_24 + " " + css.adaptation_2}
                  alt=""
                  width="235"
                  height="341"
                  src="/desktop/maven/adaptation-2.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.adaptation_3}
                  alt=""
                  width="158"
                  height="318"
                  src="/desktop/maven/adaptation-3.png"
                />
              </div>
            </div>
            <div className={css.project_description_block}>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Problem</span>:
                Adapt the website for tablets and mobile phones{" "}
                <span className={css.project_description_bold}>
                  to increase user engagement
                </span>
                .
              </p>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Solution</span>:
                Through a thorough analysis of the features of tablets and
                mobile devices,{" "}
                <span className={css.project_description_bold}>
                  the optimal size and location of the interface elements were
                  determined
                </span>
                , ensuring maximum comfort and ease of use for users of any
                device.
              </p>
            </div>

            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>
                Prototyping
              </span>
            </div>
            <div className={css.project_img_block}>
              <Image
                className={css.project_img_12 + " " + css.prototyping_1}
                alt=""
                width="547"
                height="403"
                src="/desktop/maven/prototyping-1.png"
              />
              <Image
                className={css.project_img_12 + " " + css.prototyping_2}
                alt=""
                width="517"
                height="403"
                src="/desktop/maven/prototyping-2.png"
              />
            </div>
            <div className={css.project_description_block}>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Problem</span>:
                To make mockups interactive to &#187;use&#187; the application
                and{" "}
                <span className={css.project_description_bold}>
                  correct logical errors in the flows
                </span>
                . Also{" "}
                <span className={css.project_description_bold}>
                  to show to the client before develop stage
                </span>{" "}
                to make him sure that all works the same as he wants.
              </p>
              <p className={css.project_description}>
                <span className={css.project_description_bold}>Solution</span>:
                While I was making the layout interactive, I saw many{" "}
                <span className={css.project_description_bold}>
                  errors in the flow, which I corrected later
                </span>
                , making the layouts and flows as a{" "}
                <span className={css.project_description_bold}>
                  whole completely complete and logical
                </span>
                . Also with a client I discuss about the structure and using the
                site at all, so{" "}
                <span className={css.project_description_bold}>
                  we came to the final version of the site
                </span>{" "}
                before give it to the developer.
              </p>
            </div>

            <div className={css.workflow_stage_block}>
              <span className={css.workflow_stage_title_maven}>
                Development stage
              </span>
            </div>
            <div className={css.project_img_block}>
              <Image
                className={css.project_img_12 + " " + css.development_1}
                alt=""
                width="1080"
                height="419"
                src="/desktop/maven/development-1.png"
              />
            </div>

            <div className={css.project_description_block}>
              <p className={css.project_description}>
                At this stage,{" "}
                <span className={css.project_description_bold}>
                  I actively communicated with the developer
                </span>{" "}
                and together we solved certain problems and tasks that arose
                during the creation of the site, so I got a great experience of
                cooperation with the developer.
              </p>
            </div>

            <div className={css.about}>
              <div className={css.about_title_block}>
                <h3 className={css.about_title}>Outcome</h3>
                <svg
                  className={css.about_title_svg}
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 15L36 57"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M57 36L36 57L15 36"
                    stroke="#FBF8F8"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={css.about_text_block}>
                <p className={css.about_text}>
                  In this project, the most important thing was{" "}
                  <span className={css.about_text_span}>
                    to meet the needs of the business regarding their website
                  </span>
                  , to build proper and effective communication with the
                  customer and the developer{" "}
                  <span className={css.about_text_span}>
                    for a cool final result.{" "}
                  </span>
                </p>
              </div>
            </div>

            <div className={css.footer_links}>
              <Link href="/" className={css.footer_link}>
                <svg
                  className={css.footer_link_svg_left}
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
                <p className={css.footer_link_text}>Homepage</p>
              </Link>
              <Link href="/vibook" className={css.footer_link}>
                <p className={css.footer_link_text}>Next case</p>
                <svg
                  className={css.footer_link_svg_right}
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
