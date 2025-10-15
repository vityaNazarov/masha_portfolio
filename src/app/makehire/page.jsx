"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import css from "./makehire.module.css";

const leftAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

const rightAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

const topAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

const bottomAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    // transition: { delay: custom * 0.3 },
  }),
};

export default function page() {
  return (
    <main>
      <motion.section
        className={css.ezygo__section}
        initial="hidden"
        whileInView="visible"
      >
        <div className={css.container}>
          <div className={css.ezygo}>
            <motion.div
              transition={{ delay: 0.9, duration: 0.7 }}
              variants={leftAnimation}
            >
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
            </motion.div>
            <div className={css.main_img_block}>
              <motion.div
                transition={{ delay: 0.3, duration: 0.7 }}
                variants={topAnimation}
              >
                <Image
                  src="/desktop/makehire/makehire-main.png"
                  alt=""
                  width="804"
                  height="461"
                />
              </motion.div>

              <motion.h2
                className={css.main_img_name}
                transition={{ delay: 0.6, duration: 0.7 }}
                variants={topAnimation}
              >
                Makehire.ai
              </motion.h2>
            </div>
            <div className={css.submain_img_block}>
              <motion.p
                className={css.submain_img_name}
                transition={{ delay: 0.6, duration: 0.7 }}
                variants={topAnimation}
              >
                *The product is under NDA, so it is presented in a limited way
              </motion.p>
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
                  <span className={css.about_text_span}>Makehire.ai</span> is an{" "}
                  <span className={css.about_text_span}>
                    AI-based ATS system
                  </span>{" "}
                  for the hiring process that helps to build high-performing
                  tech teams faster.
                </p>
                <p className={css.about_text}>
                  This is the{" "}
                  <span className={css.about_text_span}>MVP version</span> of
                  the product, which includes many features and functionality
                  &#40;such as{" "}
                  <span className={css.about_text_span}>
                    Intelligent Resume Analysis, AI-Powered Interview Guides,
                    Interview Analysis, Data-Driven Candidate Comparisons,
                    AI-Assisted Hiring Decisions
                  </span>
                  &#41; to effectively close the needs of the target audience.
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
                  First - is to create an MVP version of the AI-based product to{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    significantly reduce the time spent by HR specialists
                  </span>{" "}
                  and at the same time{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    increase the efficiency of searching for potential
                    candidates.
                  </span>{" "}
                </p>
                <p className={css.problem_and_solution_text}>
                  Second - develop the MVP version to a{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    competitive level in its niche
                  </span>
                  , develop and implement new features, develop and{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    add AI features to differentiate the product
                  </span>{" "}
                  in the market.
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
                  Creating of a{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    web-based version
                  </span>{" "}
                  of the product using a{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    design system with customization of the local UI system
                  </span>{" "}
                  and{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    detailed research
                  </span>
                  , which helped to fully understand the scope of work required
                  and{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    shorten some stages of the workflow.
                  </span>
                </p>
                <p className={css.problem_and_solution_text}>
                  Implementation and refinement of AI tools and scenarios to{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    increase product efficiency
                  </span>
                  . Work on detailed documentation for the development
                  department to{" "}
                  <span className={css.problem_and_solution_text_bold}>
                    reduce product development time.
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className={css.section_role}>
              <motion.div
                className={css.role_imgs}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.08, once: true }}
              >
                <ul className={css.role_imgs_list}>
                  <motion.li
                    className={css.role_imgs_item}
                    variants={bottomAnimation}
                    // custom={1}
                    transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="680"
                      height="391"
                      src="/desktop/makehire/makehire-role.png"
                    />
                  </motion.li>
                  {/* <motion.li
                    className={css.role_imgs_item}
                    variants={bottomAnimation}
                    // custom={1}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <Image
                      className={css.role_img}
                      alt=""
                      width="225"
                      height="488"
                      src="/desktop/maven/maven-role-2.png"
                    />
                  </motion.li> */}
                </ul>
              </motion.div>
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

                <p className={css.product_designer}>Product Designer</p>
              </div>
            </div>
            <div className={css.workflow_stages}>
              <h3 className={css.workflow_title}>Workflow Stages</h3>
              <p className={css.workflow_text}>
                The most important point in the development of this product was
                to{" "}
                <span className={css.workflow_text_bold}>
                  in-depth research the niche of AI-based products and products
                  for the recruitment
                </span>{" "}
                and their capabilities. The key to the desired result was a{" "}
                <span className={css.workflow_text_bold}>
                  clear teamwork and close cooperation with all its members
                </span>
                , such as CEO, PM, engineers, etc.
              </p>
              <p className={css.workflow_text}>
                The{" "}
                <span className={css.workflow_text_bold}>
                  iterativeness of the workflow
                </span>{" "}
                on my part, as a designer, brought the team{" "}
                <span className={css.workflow_text_bold}>
                  to the desired outcome faster across all scenarios and the
                  functionality
                </span>{" "}
                in them.
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
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  Onboarding & Product Research
                </span>
              </motion.div>

              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={
                    css.project_img_24 + " " + css.research_and_moodboard_1
                  }
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-onboarding-1.png"
                />
                <Image
                  className={
                    css.project_img_24 + " " + css.research_and_moodboard_2
                  }
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-onboarding-2.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Since the project was started by another designer, it was
                  necessary to understand what had been done, think{" "}
                  <span className={css.project_description_bold}>
                    how to refine it and create a full-fledged logic of the
                    whole product.
                  </span>{" "}
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>
                    Solution: Detailed analysis
                  </span>{" "}
                  of existing project concept and{" "}
                  <span className={css.project_description_bold}>
                    in-depth discussion with senior management
                  </span>{" "}
                  on requirements and product idea helps to{" "}
                  <span className={css.project_description_bold}>
                    fully understand the future workflows and built efficient
                    and “streamlined” plan for upcoming work.
                  </span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  Competitive and User analysis
                </span>
              </motion.div>

              {/* <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
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
              </motion.div> */}
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Learn about the{" "}
                  <span className={css.project_description_bold}>
                    functionality and approaches
                  </span>{" "}
                  of various{" "}
                  <span className={css.project_description_bold}>
                    competing products
                  </span>
                  . Gain a better understanding of the{" "}
                  <span className={css.project_description_bold}>
                    pain points and needs of the target audience
                  </span>{" "}
                  for products of a similar purpose.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>
                    Solution: Researched and used
                  </span>{" "}
                  competing products as a user for better understanding of{" "}
                  <span className={css.project_description_bold}>
                    their core features and key flows. Conducted user interviews
                    and user analysis
                  </span>{" "}
                  with the team to{" "}
                  <span className={css.project_description_bold}>
                    built insights that become a strong base
                  </span>{" "}
                  for the future product functionality.
                </p>
              </motion.div>
            </motion.div>
            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  Roadmaping, Estimating and Userflows
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.wireframing_1}
                  alt=""
                  width="534"
                  height="301"
                  src="/desktop/makehire/makehire-roadmaping-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.wireframing_1}
                  alt=""
                  width="534"
                  height="301"
                  src="/desktop/makehire/makehire-roadmaping-2.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Give the company an{" "}
                  <span className={css.project_description_bold}>
                    interim job estimate, project work plan
                  </span>
                  and create userflows to{" "}
                  <span className={css.project_description_bold}>
                    define and validate functionality.
                  </span>{" "}
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Created a{" "}
                  <span className={css.project_description_bold}>
                    project roadmap with timelines
                  </span>{" "}
                  that helps to{" "}
                  <span className={css.project_description_bold}>
                    make and manage future work for all the team
                  </span>
                  . Created{" "}
                  <span className={css.project_description_bold}>
                    full userflows map
                  </span>{" "}
                  - consist of main&#40;base&#41; and secondary userflows -
                  helped to{" "}
                  <span className={css.project_description_bold}>
                    identify the main path for developing the MVP version
                  </span>{" "}
                  for quick launch and understand the scope of tasks for the
                  future.
                </p>
              </motion.div>
            </motion.div>
            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>UI stage</span>
              </motion.div>
              <motion.div
                className={css.project_img_block + " " + css.ui_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_1}
                  alt=""
                  width="351"
                  height="229"
                  src="/desktop/makehire/ui-stage-1.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_2}
                  alt=""
                  width="351"
                  height="229"
                  src="/desktop/makehire/ui-stage-2.png"
                />
                <Image
                  className={css.project_img_24 + " " + css.ui_stage_3}
                  alt=""
                  width="348"
                  height="229"
                  src="/desktop/makehire/ui-stage-3.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Reproduce all{" "}
                  <span className={css.project_description_bold}>
                    user flows into finished screens
                  </span>{" "}
                  while maintaining{" "}
                  <span className={css.project_description_bold}>
                    consistency
                  </span>{" "}
                  and create a{" "}
                  <span className={css.project_description_bold}>
                    project style based on the company's brandbook.
                  </span>
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Since it was decided at previous stages to{" "}
                  <span className={css.project_description_bold}>
                    skip wireframing stage
                  </span>{" "}
                  in order to speed up the launch of the MVP, I used a
                  ready-made design system to{" "}
                  <span className={css.project_description_bold}>
                    create a personalized UI system
                  </span>{" "}
                  and, using an atomic approach,{" "}
                  <span className={css.project_description_bold}>
                    created full-fledged design elements
                  </span>
                  , which{" "}
                  <span className={css.project_description_bold}>
                    accelerated the process of completing the MVP
                  </span>{" "}
                  and{" "}
                  <span className={css.project_description_bold}>
                    significantly reduced the number of iterations
                  </span>{" "}
                  and{" "}
                  <span className={css.project_description_bold}>
                    reduced rework for developers.
                  </span>
                </p>
              </motion.div>
            </motion.div>
            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  UI-System
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block + " " + css.adaptation_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_24 + " " + css.adaptation_1}
                  alt=""
                  width="1080"
                  height="325"
                  src="/desktop/makehire/ui-system.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  The design system used in the project{" "}
                  <span className={css.project_description_bold}>
                    did not fully meet functional and visual requirements
                  </span>
                  . Some{" "}
                  <span className={css.project_description_bold}>
                    difficulties
                  </span>{" "}
                  were encountered{" "}
                  <span className={css.project_description_bold}>
                    by developers
                  </span>{" "}
                  when working with this design system.
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : Using the design system as a basis, I created an{" "}
                  <span className={css.project_description_bold}>
                    adapted and customized UI System
                  </span>{" "}
                  for the project, added atomic components, as well as fully
                  developed UI elements.{" "}
                  <span className={css.project_description_bold}>
                    Tailwind CSS
                  </span>{" "}
                  &#40;also customized for this project&#41; was chosen to{" "}
                  <span className={css.project_description_bold}>
                    simplify and accelerate development
                  </span>
                  , and align the team with the system which{" "}
                  <span className={css.project_description_bold}>
                    improved consistency across the interface and reduced the
                    handoff time for developers.
                  </span>
                </p>
              </motion.div>
            </motion.div>
            {/* // */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  Creation of documentation &#40;specification&#41;
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.prototyping_1}
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-specification-1.png"
                />
                <Image
                  className={css.project_img_12 + " " + css.prototyping_2}
                  alt=""
                  width="532"
                  height="295"
                  src="/desktop/makehire/makehire-specification-2.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Problem</span>:
                  Since the product is complex, with a large number of features
                  and logic, the developers had{" "}
                  <span className={css.project_description_bold}>
                    many questions and doubts, which slowed down the entire
                    development process in the initial stages.
                  </span>
                </p>
                <p className={css.project_description}>
                  <span className={css.project_description_bold}>Solution</span>
                  : I created a{" "}
                  <span className={css.project_description_bold}>
                    comprehensive product specification
                  </span>{" "}
                  for the development department,{" "}
                  <span className={css.project_description_bold}>
                    covering all user scenarios and interactions
                  </span>{" "}
                  with the product to ensure accurate communication with
                  developers. This{" "}
                  <span className={css.project_description_bold}>
                    almost completely eliminated any doubts or misunderstandings{" "}
                  </span>{" "}
                  between design and development,{" "}
                  <span className={css.project_description_bold}>
                    increased the speed of work, and accelerated the product's
                    release to market.{" "}
                  </span>{" "}
                  {/* was made describing{" "}
                  <span className={css.project_description_bold}>
                    all the logic and technical nuances
                  </span>{" "}
                  based on the{" "}
                  <span className={css.project_description_bold}>
                    Tailwind document
                  </span>
                  , which I also{" "}
                  <span className={css.project_description_bold}>
                    customized for this project.
                  </span> */}
                </p>
              </motion.div>
            </motion.div>
            {/* // */}
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.08, once: true }}
            >
              <motion.div
                className={css.workflow_stage_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <span className={css.workflow_stage_title_maven}>
                  Development stage
                </span>
              </motion.div>
              <motion.div
                className={css.project_img_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <Image
                  className={css.project_img_12 + " " + css.development_1}
                  alt=""
                  width="1080"
                  height="419"
                  src="/desktop/maven/development-1.png"
                />
              </motion.div>
              <motion.div
                className={css.project_description_block}
                variants={bottomAnimation}
                // custom={1}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className={css.project_description}>
                  At this stage,{" "}
                  <span className={css.project_description_bold}>
                    I actively communicated with the developer
                  </span>{" "}
                  and together we solved certain problems and tasks that arose
                  during the creation of the site, so I got a great experience
                  of cooperation with the developer.
                </p>
              </motion.div>
            </motion.div> */}
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
                  <span className={css.about_text_span}>In just 3 months</span>,
                  starting almost from scratch,{" "}
                  <span className={css.about_text_span}>
                    I led the design of an MVP for an AI-driven hiring assistant{" "}
                  </span>{" "}
                  — a product that streamlines the recruitment process and{" "}
                  <span className={css.about_text_span}>
                    stands out in its niche with unique functionality{" "}
                  </span>{" "}
                  not available on the market.
                </p>

                <p className={css.about_text}>
                  Together with a multifunctional team,{" "}
                  <span className={css.about_text_span}>
                    we carried out deep research of the niche, competitors, and
                    users’ needs, and built a product with strong usability and
                    a polished visual system
                  </span>
                  . After launch, we iteratively enhanced existing flows and
                  added new scenarios{" "}
                  <span className={css.about_text_span}>
                    to strengthen our market positioning
                  </span>
                  . The{" "}
                  <span className={css.about_text_span}>
                    active integration of AI{" "}
                  </span>{" "}
                  into both the product and its processes{" "}
                  <span className={css.about_text_span}>
                    gave us a significant competitive advantage{" "}
                  </span>
                  and positioned the solution as a scalable, future-proof tool
                  with{" "}
                  <span className={css.about_text_span}>
                    high growth potential.
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
              <Link href="/ezygo" className={css.footer_link}>
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
      </motion.section>
    </main>
  );
}
