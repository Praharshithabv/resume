/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typed from "typed.js";
import { RiHeartPulseFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import explode from "../utilities/explode";
// import toast, { Toaster } from "react-hot-toast";

// import emailjs from "@emailjs/browser";

const HomePage = () => {
  // const [nameInput, setNameInput] = useState("");
  // const [emailInput, setEmailInput] = useState("");
  // const [messageInput, setMessageInput] = useState("");
  // // const [successMessage, setSuccessMessage] = useState('');

  // const notify = (toastInput: any) =>
  //   toast.error(toastInput, { duration: 3000, position: "bottom-center" });

  // const notifySuccess = (toastInput: any) =>
  //   toast.success(toastInput, { duration: 3000, position: "bottom-center" });

  const el = useRef(null);
  // const form: any = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Analyzing data with Power BI",
        "Querying databases with SQL",
        "Creating data visualizations",
        "Managing and modeling data",
        "Utilizing data analytics tools",
        "Coordinating data-driven projects",
      ], // Strings to display
      // Speed settings, try diffrent values until you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    document
      ?.querySelector(".aboutme-section-photo")
      ?.addEventListener("mouseover", (e: any) => explode(e.pageX, e.pageY));

    document
      ?.querySelector(".aboutme-section-photo")
      ?.addEventListener("ontouchstart", (e: any) => explode(e.pageX, e.pageY));

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  // const sendEmail = (e: any) => {
  //   e.preventDefault();

  //   if (nameInput === "") {
  //     notify("Please enter a valid name");
  //     return;
  //   }

  //   const pattern = /^\S+@\S+\.\S+$/;
  //   const isValidEmail = pattern.test(emailInput);

  //   if (!isValidEmail) {
  //     notify("Please enter a valid email id");
  //     return;
  //   }

  //   if (messageInput === "") {
  //     notify("Please enter a valid message");
  //     return;
  //   }

  //   emailjs
  //     .sendForm(
  //       "service_qd3p5ys",
  //       "template_5vymobo",
  //       form.current,
  //       "LjLsiWNpLdOowCNc6"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         notifySuccess("Message has been sent successfully");
  //         setEmailInput("");
  //         setMessageInput("");
  //         setNameInput("");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         notifySuccess("Message has been sent successfully");
  //         setEmailInput("");
  //         setMessageInput("");
  //         setNameInput("");
  //       }
  //     );
  // };

  return (
    <>
      {/* <Toaster /> */}
      <main className="main">
        <div className="main-container">
          {/* Hero Section */}
          <section className="main-header-section fadeInUp">
            <div className="main-header-blobs">
              <svg
                className="cl-ak shape cl_af"
                style={{ color: "#FBE5F1" }}
                viewBox="0 0 312 303"
                width="312"
                height="303"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M139.7 8.8c37.8 2.8 76.4 1.8 106.6 24.9C280.7 59.9 307.9 97 311.4 140c3.9 46.3-12 94-45.8 125.8-33 31.2-80.6 39.6-126 36.5-42-3-83-20-109.5-52.9-24.1-30-18.6-70.8-20.9-109.4-2.5-42.7-23.1-92.8 7-123.2C46.5-13.5 97 5.7 139.8 9z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                className="cl-al shape cl_af"
                style={{ color: "#ddebf8" }}
                viewBox="0 0 388 307"
                width="388"
                height="307"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M187.4 6.4c54.2-4 114.7-19.1 154 18.6C384.8 66.7 397.5 134.2 381 192c-15.6 55-64 95.4-118.7 111.6-46.2 13.6-88-18.1-131.9-37.5-47.3-21-110.4-27.1-126.2-76.5C-12.2 138.3 21.9 84.4 60 46.2 93.1 13 140.7 9.9 187.4 6.4z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div className="main-header-section--left">
              <img src="./programmer_working.svg" alt="Programmer Working" />
            </div>
            <div className="main-header-section--right">
              <p className="greeting">Hello! My Name is</p>
              <h1 className="main-header-myname">Praharshitha</h1>
              <p className="titles-header">
                I <RiHeartPulseFill />
              </p>
              <div className="titles">
                <span ref={el}></span> &nbsp;
              </div>
              <a
                className="main-header-contactme"
                target="_blank"
                href="./Resume.pdf"
              >
                RESUME&nbsp; <TfiWrite />
              </a>
            </div>
          </section>

          {/* About me section */}
          <div className="swipe-through-here" id="aboutme"></div>
          <br />
          <br />
          <br />
          <br />
          <section className="aboutme">
            <div className="aboutme-container">
              <div className="aboutme-content-container">
                <div className="aboutme-section--content">
                  <div className="aboutme-section--left">
                    <div className="aboutme-heading--container">
                      <h2 className="aboutme-heading">About Me</h2>
                      <span></span>
                    </div>
                    <p>
                      Hola! My name is{" "}
                      <span
                        className="highlight"
                        style={{
                          cursor: "url('../assets/Ajay_image.ico'), auto",
                        }}
                      >
                        Praharshitha
                      </span>{" "}
                      and I'm currently based in{" "}
                      <span className="highlight">BANGALORE</span>, with a deep
                      passion for data and analytics. My journey into the world
                      of data began in 2022 while working at{" "}
                      <span className="highlight">Travellers</span>, where I
                      first explored customizing internal dashboards. What
                      started as a simple initiative soon evolved into a
                      full-fledged interest, leading me to build strong
                      expertise in{" "}
                      <span className="highlight">SQL, Power BI</span>, and
                      data-driven storytelling.
                    </p>
                    <p>
                      Fast-forward to today, I've had the opportunity to gain
                      meaningful experience across diverse settings, including
                      my time at <span className="highlight">Accenture</span>.
                      At present, I'm focused on leveraging data to drive
                      impactful decisions and build insightful analytics
                      solutions at{" "}
                      <span className="highlight">GND Solutions</span>. I work
                      closely with a variety of stakeholders to transform
                      complex data into clear, actionable insights. ̰
                    </p>
                    <p>
                      Here are some of the key tools and technologies I've been
                      actively working with in recent times:
                    </p>
                    <ul className="aboutme-technologylist">
                      <li>SQL</li>
                      <li>Power BI</li>
                      <li>Excel</li>
                      <li>Data Modeling</li>
                      <li>ETL</li>
                      <li>DAX</li>
                    </ul>
                  </div>
                  <div className="aboutme-section--right">
                    <div className="aboutme-section-photo-container">
                      <img
                        className="aboutme-section-photo"
                        src="./Harshi.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* myWork */}
          <div className="swipe-through-here" id="mywork"></div>
          <br />
          <br />
          <br />
          <br />
          <section className="mywork">
            <div className="mywork-container">
              <div className="mywork-header-container">
                <h2 className="mywork-heading">My Journey</h2>
                <span></span>
              </div>
              <div className="mywork-content-container">
                <div className="mywork-content-accenture mywork-content-company">
                  <div className="mywork-content-accenture--left">
                    <img src="./accenture_logo.png" alt="Accenture" />
                  </div>
                  <div className="mywork-content-accenture--right">
                    <h3
                      style={{
                        color: "#343434",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Accenture (2022 - 2024)
                    </h3>
                    <p>
                      Developed and maintained data models and dashboards for
                      in-house and client projects at Accenture, primarily using
                      Power BI, DAX, and SQL for data modeling. Collaborated on
                      diverse projects, mastering data analytics and
                      visualization patterns. Delivered precise documentation
                      for the data development and reporting process.
                    </p>
                  </div>
                </div>
                <div className="mywork-content-gnd mywork-content-company">
                  <div className="mywork-content-gnd--left">
                    <img src="./GND_Solutions.png" alt="GND" />
                  </div>
                  <div className="mywork-content-gnd--right">
                    <h3
                      style={{
                        color: "#343434",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      GND Solutions (2024 - Present)
                    </h3>
                    <p>
                      Engaged in collaborative interactions with skilled
                      professionals at GND, contributing to innovative data
                      solutions using Power BI, DAX, and data modeling.
                      Specialized in leveraging Power BI to create visually
                      appealing and customized dashboards. Proficiently tasked
                      with developing advanced visualizations and calculations
                      using DAX, Power BI, and SQL. Responsible for the seamless
                      deployment of data models and reports through efficient
                      project workflows.
                    </p>
                  </div>
                </div>
                {/* <div className="mywork-content-techm mywork-content-company">
                  <div className="mywork-content-techm--left">
                    <img src="./Tech_Mahindra_Logo.png" alt="TechM" />
                  </div>
                  <div className="mywork-content-techm--right">
                    <h3
                      style={{
                        color: "#343434",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Tech Mahindra (2021 - 2023)
                    </h3>
                    <p>
                      Write modern, performant, maintainable code for diverse
                      array of clients and internal projects. Work with a
                      variety of different languages, platforms, frameworks,
                      content management systems like ReactJS, HTML, CSS, D365
                      Ecomm, Typescript, NodeJS, Javascript. Communicate with
                      multi-disciplinary teams of engineers, designer and
                      clients on daily basis.
                    </p>
                  </div>
                </div>
                <div className="mywork-content-bosch mywork-content-company">
                  <div className="mywork-content-bosch--left">
                    <img src="./Bosch_Logo.jpg" alt="Bosch" />
                  </div>
                  <div className="mywork-content-bosch--right">
                    <h3
                      style={{
                        color: "#343434",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Bosch (2023 - Present)
                    </h3>
                    <p>
                      Engaged in collaborative interactions with skilled
                      professionals at GND, contributing to innovative data
                      solutions using Power BI, DAX, and data modeling.
                      Specialized in leveraging Power BI to create visually
                      appealing and customized dashboards. Proficiently tasked
                      with developing advanced visualizations and calculations
                      using DAX, Power BI, and SQL. Responsible for the seamless
                      deployment of data models and reports through efficient
                      project workflows.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Projects */}
          <div className="swipe-through-here" id="projects"></div>
          <br />
          <br />
          <br />
          <br />
          <section className="projects">
            <div className="projects-container">
              <div className="projects-header-container">
                <h2 className="projects-heading">My Projects</h2>
                <span></span>
              </div>
              <div className="projects-grid">
                <div
                  className="project-card"
                  onClick={() => window.open("./pdf/project1.pdf", "_blank")}
                >
                  <div className="project-image">
                    <img src="./Sales_Performance.png" alt="Sales Dashboard" />
                    <div className="project-overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>Sales Analytics Dashboard</h3>
                    <p>
                    Power BI dashboard for analyzing sales performance, revenue trends, and customer insights.
                    </p>
                    <div className="project-tags">
                      <span>Power BI</span>
                      <span>DAX</span>
                      <span>SQL</span>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card"
                  onClick={() => window.open("./pdf/project2.pdf", "_blank")}
                >
                  <div className="project-image">
                    <img src="./Adventure_work.png" alt="Adventure Work" />
                    <div className="project-overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>Brand Market System</h3>
                    <p>Power BI dashboard for company market trends and profit analysis for brands.</p>
                    <div className="project-tags">
                      <span>ETL</span>
                      <span>Power BI</span>
                      <span>Excel</span>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card"
                  onClick={() => window.open("./pdf/project3.pdf", "_blank")}
                >
                  <div className="project-image">
                    <img src="./HR_Analytics.png" alt="HR Financial Analytics" />
                    <div className="project-overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>HR Analytics Dashboard</h3>
                    <p>Power BI dashboard for HR metrics and workforce insights.</p>
                    <div className="project-tags">
                      <span>Data Modeling</span>
                      <span>Power BI</span>
                      <span>DAX</span>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card"
                  onClick={() => window.open("./pdf/project4.pdf", "_blank")}
                >
                  <div className="project-image">
                    <img src="./Road_accident_survey.png" alt="Road Accident Survey" />
                    <div className="project-overlay">
                      <span>View Project</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3>Road Accident Analysis</h3>
                    <p>dashboard for analyzing road conditions, traffic patterns, and maintenance insights.</p>
                    <div className="project-tags">
                      <span>SQL</span>
                      <span>Power BI</span>
                      <span>Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Me */}
          {/* <div className="swipe-through-here" id="contactme"></div>
          <br />
          <br />
          <br />
          <br /> */}
          {/* <section className="contactme">
            <div className="contactme-container">
              <div className="contactme-heading-container">
                <h2 className="contactme-heading">Contact Me</h2>
                <span></span>
              </div>
              <div className="contactme-content-container">
                <div className="contactme-content--left">
                  {/* <h3>Send me a message</h3> 
                  <p style={{ marginBottom: "1rem" }}>
                    Please feel free to contact me for any queries
                  </p>
                  <form
                    ref={form}
                    className="contactme-form"
                    onSubmit={sendEmail}
                  >
                    <div className="contactme-form-inputs">
                      <input
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        type="text"
                        name="from_name"
                        placeholder="Enter Your Name"
                      />
                      <input
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        type="text"
                        name="from_email"
                        placeholder="Enter Your Email"
                      />
                      <textarea
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        name="message"
                        id=""
                        placeholder="Enter Your Message"
                      ></textarea>
                    </div>
                    <div className="contactme-form-btn-container">
                      <button type="submit" value="submit">
                        SEND NOW
                      </button>
                      <a
                        href={`mailto:praharshitha.bv@gmail.com?subject=Reaching%20out%20to%20you%20&body=${messageInput
                          .split(" ")
                          .join("%20")}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        SEND EMAIL
                      </a>
                    </div>
                  </form>
                </div>
                <div className="contactme-content--right">
                  <div className="contactme-details-container">
                    <div className="contactme-details--address contactme-details--icons">
                      <FaMapMarkerAlt size={20} />
                      <h3>Address</h3>
                      <p>Yelachenahalli, Bangalore</p>
                    </div>
                    <div className="contactme-details--phone contactme-details--icons">
                      <FaPhoneAlt size={20} />
                      <h3>Phone</h3>
                      <p>+91 7981263843</p>
                    </div>
                    <div className="contactme-details--email contactme-details--icons">
                      <HiMail size={25} />
                      <h3>Email</h3>
                      <p>praharshitha.bv@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </main>
    </>
  );
};

export default HomePage;
