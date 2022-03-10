import React from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { BsFillDice6Fill, BsFillBrushFill } from "react-icons/bs";
import { GiGamepad } from "react-icons/gi";
import styled from "styled-components";
import About from "../img/About.png";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyle>
        <InnerLayout>
          <Title title={"About me"} span={"About me"} />
          <div className="row">
            <div className="Left">
              <img src={About} alt=""></img>
            </div>
            <div className="Right">
              <h1>
                I'm <span>Patchara Poonsawat</span>
              </h1>
              <p>
                I'm currently studying <br />
                Bachelor of Science (Multimedia Technology) <br />
                at thai-nichi institute of technology
                <br />
                I'm interest in <span>coding</span> especially in{" "}
                <span>game industry</span> <br />
                (e.g Game devoloper, Game Designer)
                <br />
                I'm looking forward to have worked and gained experience in Game
                industry.
              </p>
            </div>
          </div>
          <AboutFreeTimeStyle>
            <InnerLayout>
              <div>
                <Title title={"My Hobby"} span={"My Hobby"} />
                <div className="row">
                  <div className="column">
                    <BsFillDice6Fill size={60} />
                    <h3>BoardGame</h3>
                  </div>
                  <div className="column">
                    <GiGamepad size={65} />
                    <h3>Play Games</h3>
                  </div>
                  <div className="column">
                    <BsFillBrushFill size={60} />
                    <h3>Drawing</h3>
                  </div>
                </div>
              </div>
            </InnerLayout>
          </AboutFreeTimeStyle>
        </InnerLayout>
      </AboutStyle>
    </MainLayout>
  );
};

const AboutStyle = styled.section`
  .row {
    height: 18rem;
    padding: 0.5rem;
  }
  .Left {
    height: inherit;
    float: left;
    justify-content: center;
    padding-top: 2.5rem;
    margin-left: 1rem;
    width: 35%;
    text-align: center;
    img {
      max-height: 16rem;
      border-radius: 35px;
      border: 4px solid var(--border-color);
    }
  }
  .Right {
    height: inherit;
    float: right;
    justify-content: center;
    padding-top: 2.5rem;
    margin-left: 1rem;
    width: 60%;
    text-align: left;
    h1 {
      font-size: 1.75rem;
      color: var(--white-color);
      span {
        font-size: 1.75rem;
      }
    }
    p {
      margin-top: 28px;
    }
  }
`;
const AboutFreeTimeStyle = styled.section`
  .row {
    height: 8rem;
    padding: 0.5rem;
    margin-top: 3rem;
  }
  .column {
    height: 10rem;
    float: left;
    justify-content: center;
    padding-top: 2.5rem;
    margin-left: 1.5rem;
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
export default AboutPage;
