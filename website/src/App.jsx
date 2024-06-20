import React, { useState, useEffect } from "react";
// import { SlideDown } from "react-slidedown";
import {
  Gameoflife,
  Skillstrainer,
  DebateHouse,
  //  WeSense
} from "./projects";
// import "./Components/Background";

// import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropUpLine } from "react-icons/ri";
// import { analytics } from "./firebase";
import "./App.css";
import "./index.css";
import {
  convertTimestampToDate,
  endsWithAny,
  // formatText,
  // generateWidthStyles,
} from "./helper";
import blog, { sortBlogPostsByDate } from "./blog";
// import { round } from "mathjs";
const imageFileTypes = ["jpg", "jpeg", "png", "gif"];

const audioFileTypes = ["mp3", "wav", "aiff", "m4a"];

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      <span className="title-name">
        <span className="highlight">[about]</span>
        <span className="title-name-name">AKSHAT SINGHANIA</span>
      </span>

      <span className="highlight aboutme">
        16 year old full stack engineer
        <br />
        loves computer science
        <br />
        competitive programmer
        <br />
        also loves physics and maths
        <br />
        recently dabbling in microcontrollers and hardware
        <br />
        experimenting with solidworks and design
        <br />
        enjoys speedcubing and basketball
        <br />
      </span>
    </div>
  );
};
const ContactMe = () => {
  return (
    <div className="contact-container">
      <span className="contact-title highlight">
        I can be reached through <RightwardArrow />
      </span>
      {[
        {
          name: "singhaniaakshat[at]gmail.com",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/akshat-singhania-2702781b4",
        },
        { name: "dev.to", link: "https://dev.to/akshatsinghania" },
        {
          name: "discord//akshatsinghania",
        },
      ].map((v) => (
        <div className="contact-item highlight">
          <a
            href={v.link}
            target="_blank"
            className=" hover-underline-animation"
            rel="noopener noreferrer"
          >
            {v.name}
          </a>
          {v.info && <p>{v.info}</p>}
        </div>
      ))}
    </div>
  );
};
const Navbar = () => {
  return (
    <div class="slider -fast">
      <div className="slider-primary">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#blog">BLOG</a>
        <a>WESENSE</a>
        <a>SKILLSTRAINER</a>
        <a>ACADEMICS</a>
        <a>HONOURS</a>
      </div>
      <div className="slider-secondary ">
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#blog">BLOG</a>
        <a>WESENSE</a>
        <a>SKILLSTRAINER</a>
        <a>ACADEMICS</a>
        <a>HONOURS</a>
      </div>
    </div>
  );
};

const App = () => {
  // const [moreInfo, setmoreInfo] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const handleMouseMove = (e) => {
    const body = document.body;
    const doc = document.documentElement;
    const scrollLeft =
      (doc && doc.scrollLeft) || (body && body.scrollLeft) || 0;
    const scrollTop = (doc && doc.scrollTop) || (body && body.scrollTop) || 0;
    const clientLeft =
      (doc && doc.clientLeft) || (body && body.clientLeft) || 0;
    const clientTop = (doc && doc.clientTop) || (body && body.clientTop) || 0;

    const x = e.clientX + scrollLeft - clientLeft;
    const y = e.clientY + scrollTop - clientTop;

    setCursorPosition({ left: x - 100, top: y - 150 });
  };

  const [userData, setUserData] = useState(blog.posts);
  useEffect(() => {
    setUserData(sortBlogPostsByDate(blog.posts));
  }, [blog]);

  return (
    <div onMouseMove={handleMouseMove} className="index">
      <Navbar />
      <div className="app">
        <div className="column-container first-column">
          <AboutMe />
          <ContactMe />
        </div>
        <div>
          <Projects cursorPosition={cursorPosition} />
          <RecentBlogSection items={userData} amount={1000} />
        </div>
      </div>
    </div>
  );
};

export default App;
// RecentBlogSection.js

const RightwardArrow = () => {
  return (
    <>
      <span className="contact-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 32 32"
          height="32"
          width="32"
          part="svg"
          draggable="true"
          className="contact-icon"
        >
          <path
            part="base-color"
            fill="currentColor"
            d="M 3.96 17.12 L 3.96 14.88 L 21.25 14.88 L 24.17 15.01 L 21.81 12.99 L 17.45 8.70 L 18.98 7.16 L 28.04 15.99 L 18.98 24.84 L 17.45 23.28 L 21.84 19.00 L 24.18 16.97 L 21.25 17.12 L 3.96 17.12 Z"
          ></path>
        </svg>
      </span>
    </>
  );
};

const RecentBlogSection = ({ items, amount, handleClick }) => {
  return (
    <div className="blog" id="blog">
      <span className="projects-heading">
        Here's what I've been up to recently
      </span>
      {items.slice(0, amount).map((item) => (
        <div className="blog-content" key={item?.id}>
          <p>
            <b>{convertTimestampToDate(item?.postedAt)}</b>
          </p>
          <p dangerouslySetInnerHTML={{ __html: item?.text }} />
          <p className="attachments">
            {item?.attachments
              .filter((a) => endsWithAny(imageFileTypes, a))
              .map((attachment) => {
                console.log(attachment);
                return (
                  <img
                    key={attachment}
                    className="post-image"
                    src={attachment}
                    style={{
                      maxHeight: "50vh",
                      borderRadius: "1%",
                      maxWidth: "40%",
                      margin: "1%",
                    }}
                    loading="lazy"
                    alt=""
                  />
                );
              })}
            {item?.attachments
              .filter((a) => endsWithAny(audioFileTypes, a))
              .map((attachment) => (
                <audio
                  key={attachment}
                  src={attachment}
                  controls
                  preload="metadata"
                />
              ))}
            {item?.mux.map((attachment) => (
              <Video
                key={attachment}
                mux={attachment}
                style={{ maxHeight: "50vh", borderRadius: "1%" }}
              />
            ))}
          </p>
          <hr />
        </div>
      ))}
      You seem to have reached the end...
      {amount < items.length ? (
        <span className="load-more" onClick={handleClick}>
          show more
        </span>
      ) : (
        "have a great day :D"
      )}
    </div>
  );
};
const Video = ({ mux }) => {
  return (
    <video width="100%" controls>
      <source
        src={mux}
        type="video/mp4"
        style={{ maxHeight: "50vh", borderRadius: "1%" }}
      />
      Your browser does not support the video tag.
    </video>
  );
};
const Projects = ({ cursorPosition }) => {
  const [projects, setProjects] = useState([
    {
      title: "Skillstrainer",
      img: Skillstrainer,
      description:
        "Intern+Junior Engineer, helped scale SkillsTrainer to over 1 million active users",
      info: [
        {
          time: "Jul 2021 - Nov 2021",
          description:
            "Worked as an intern at Skillstrainer, Unifier's flagship learning management system",
        },
        {
          time: "Nov 2021 - May 2022",
          description: `Worked a junior developer at Skillstrainer, I was able to gain valuable hands-on experience working on the company's flagship learning management system. I had the opportunity to collaborate with a team of talented engineers, and together we were able to ship code that could handle scale and was being used by over 1 million users. This was a challenging but rewarding experience, as I was able to develop my skills in problem-solving and efficient code development. I also had the chance to work in a high growth startup environment, which allowed me to learn about the unique challenges and opportunities that come with working in a fast-paced, rapidly evolving company. Overall, my time at Skillstrainer was a great learning experience that helped me to grow both personally and professionally.`,
          link: "https://www.skillstrainer.in",
        },
      ],
    },
    {
      title: "DebateHouse",
      img: DebateHouse,
      description: "platform for organized discussed power by AI ✨",
      info: [
        {
          description:
            "Debatehouse provides a platform for organized discussions on various topics. The goal is to allow people to consider multiple perspectives on a topic and come to a resolution through discussion. After the discussion is over, a summary of the debate is made available in the debate feed for others to learn from. The aim is to provide a larger perspective on the issue made available by the thoughtful discussion.",
          time: 2021,
          link: "https://www.youtube.com/watch?v=jXEDxppCj1g&ab_channel=AkshatSinghania",
        },
      ],
    },
    {
      title: "Game Of Life",
      description:
        "Conway's simulation showing the evolution of a population of cell",
      img: Gameoflife,
      info: [
        {
          description: `A website that simulates the Conway's Game of Life, a
    mathematical model that shows the evolution of a
    population of cells according to predetermined rules.
    Users can set up the initial configuration of cells on a
    grid and watch as the cells interact and evolve.`,
          time: 2022,
          link: `https://conwayss-game-of-life.web.app`,
        },
      ],
    },
    // {
    //   title: "WeSense",
    //   description: "AI Powered Glasses for the blind",
    //   img: WeSense,
    // },
  ]);

  const handleEnter = (index) => {
    var newprojects = projects;
    newprojects[index]["show"] = true;
    setProjects([...newprojects]);
  };
  const handleLeave = (index) => {
    var newprojects = projects;
    newprojects[index]["show"] = false;
    setProjects([...newprojects]);
  };
  // const handleClick = (index) => {
  //   var newprojects = projects;
  //   if (newprojects[index].expand) newprojects[index].expand = false;
  //   else newprojects[index].expand = true;
  //   setProjects(newprojects);
  // };

  return (
    <div className="projects-container" id="projects">
      <span className="projects-heading"> cool stuff i do</span>

      <div className="media-row">
        {projects.map((project, index) => (
          <div
            className="project__media-container"
            key={index}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
          >
            <img
              src={project.img}
              alt={project.title}
              className="project__media"
            />
            <div
              className="project__info"
              style={{
                ...cursorPosition,
                display: projects[index]?.show ? "block" : "none",
                position: "absolute",
              }}
            >
              <span className="project__title">{project.title}</span>
              <hr className="horizontal-line" />
              <span className="project__description">
                {project.description}
              </span>
              {/* <hr className="horizontal-line" />
            {project.info.map((info, i) => (
              <div key={i}>
                <p className="project__time">{info.time}</p>
                <p className="project__description">{info.description}</p>
                {info.link && (
                  <a href={info.link} className="project__link">
                    {info.link}
                  </a>
                )}
              </div>
            ))} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
