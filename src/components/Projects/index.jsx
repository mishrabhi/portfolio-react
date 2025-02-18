import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "./ProjectStyle";

import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "frontend" ? (
            <ToggleButton
              active
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              FRONTEND
            </ToggleButton>
          ) : (
            <ToggleButton
              value="frontend"
              onClick={() => setToggle("frontend")}
            >
              FRONTEND
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full stack" ? (
            <ToggleButton
              active
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          ) : (
            <ToggleButton
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
