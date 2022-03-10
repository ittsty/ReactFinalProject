import React from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import styled from "styled-components";
import { FaGamepad, FaPhotoVideo, FaPencilRuler } from "react-icons/fa";
import ProgressBar from "../Components/ProgressBar";
import SmallTitle from "../Components/SmallTitle";
import ResumeItem from "../Components/Resume-item";
import SchoolIcon from "@material-ui/icons/School";

const ResumePage = () => {
  const school = <SchoolIcon />;
  return (
    <MainLayout>
      <InnerLayout>
        <SkillsStyled>
          <Title title={"My Skills"} span={"my skills"} />
          <InnerLayout>
            <div className="skills">
              <ProgressBar
                title={"HTML5"}
                width={"60%"}
                text={"Intermediate"}
              />
              <ProgressBar title={"JAVASCRIPT"} width={"25%"} text={"Basic"} />
              <ProgressBar title={"CSS3"} width={"60%"} text={"Intermediate"} />
              <ProgressBar title={"JAVA"} width={"20%"} text={"Basic"} />
              <ProgressBar
                title={"UNITY"}
                width={"70%"}
                text={"Intermediate"}
              />
              <ProgressBar title={"React JS"} width={"20%"} text={"Basic"} />
            </div>
          </InnerLayout>
          <Title title={"Language Skill"} span={"Language Skill"} />
          <InnerLayout>
            <div className="l_skills">
              <h4>Thai | Native</h4>
              <ProgressBar title={""} width={"100%"} />
              <h4>English | Toeic Score 640</h4>
              <ProgressBar title={""} width={"64%"} />
              <h4>Japanese | Beginner</h4>
              <ProgressBar title={""} width={"30%"} />
            </div>
          </InnerLayout>
        </SkillsStyled>

        <MainRoleStyle>
          <Title title={"My MainRole"} span={"My MainRole"} />
          <InnerLayout>
            <div className="row">
              <div className="column">
                <FaGamepad size={60} />
                <h3>Game Devoloper</h3>
              </div>
              <div className="column">
                <FaPencilRuler size={60} />
                <h3>designer</h3>
              </div>
              <div className="column">
                <FaPhotoVideo size={60} />
                <h3>Video Editor</h3>
              </div>
            </div>
          </InnerLayout>
        </MainRoleStyle>

        <ResumeStyled>
          <Title title={"Personal"} span={"Personal"} />
          <InnerLayout>
            <div className="small-title u-small-title">
              <SmallTitle icon={school} title={"Educational Qualifications"} />
            </div>
            <div className="resume-content ">
              <ResumeItem
                year={"2019 - Present"}
                title={"Thai-Nichi Institute of Technology"}
                subTitle={"bachelor's degree"}
              />
              <ResumeItem
                year={"2016 - 2019"}
                title={"Bodindecha (Sing Singhaseni)2 School"}
                subTitle={"High School"}
                text={"Mathematics-Science"}
              />
              <ResumeItem
                year={"2014 - 2016"}
                title={"Bodindecha (Sing Singhaseni)2 School"}
                subTitle={"Middle School"}
              />
            </div>
          </InnerLayout>
        </ResumeStyled>
      </InnerLayout>
    </MainLayout>
  );
};

const MainRoleStyle = styled.section`
  .row {
    height: 10rem;
    padding: 0.5rem;
  }
  .column {
    height: 10rem;
    float: left;
    justify-content: center;
    padding-top: 2.5rem;
    margin-left: 1rem;
    width: 25%;
    text-align: center;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    h3 {
      margin-top: 0.25rem;
    }
  }
`;

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .l_skills {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default ResumePage;
