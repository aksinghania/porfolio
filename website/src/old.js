 {/* {projects.map((project, index) => (
              <div className="project" key={project.title}>
                <h1
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                  className="project-title"
                  onClick={() => handleClick(index)}
                >
                  {project.title}

                  {!project.expand ? (
                    <RiArrowDropDownLine className="title-text-arrow" />
                  ) : (
                    <RiArrowDropUpLine className="title-text-arrow" />
                  )}
                </h1>

                <img
                  alt="A preview screenshot of the application/program/website"
                  className="project-img"
                  style={{
                    ...cursorPosition,
                    display: `${project.show && !project.expand ? "block" : "none"
                      }`,
                  }}
                  src={project.img}
                />
                <div>
                  {project.expand && (
                    <div className="project-info">
                      <img
                        alt="A bigger version of the preview screenshot"
                        src={project.img}
                      />
                      {project.info.map((info) => (
                        <div className="project-info-text">
                          <span>{info.time}</span>
                          <span>
                            {info.description}
                            <br /> <br />
                            {info.link && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={info.link}
                                className="project-info-link"
                              >
                                VISIT THE SITE
                              </a>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))} */}