import React from "react";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import { BsFacebook, BsGithub, BsDiscord } from "react-icons/bs";
import styled from "styled-components";

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactStyle>
        <InnerLayout>
          <Title title={"Contact"} span={"Contact"} />
          <div className="row">
            <div className="column">
              <h5>Patchara Poonsawat</h5>
            </div>
            <div className="column">
              <h5>itsty#8570</h5>
            </div>
            <div className="column">
              <h5>ittsty</h5>
            </div>
          </div>
          <div className="icons">
            <a
              href="https://web.facebook.com/patchara.poonsawat/"
              className="icon i-facebook"
            >
              <BsFacebook size="50%" />
            </a>
            <a
              href="https://discordapp.com/users/224574667589943296"
              className="icon i-dis"
            >
              <BsDiscord size="50%" />
            </a>
            <a href="https://github.com/ittsty" className="icon i-github">
              <BsGithub size="50%" />
            </a>
          </div>
        </InnerLayout>
      </ContactStyle>
    </MainLayout>
  );
};

const ContactStyle = styled.div`
  .row {
    margin-top: 2.5rem;
    display: flex;
    height: 3rem;
    padding: 1.5rem;
    justify-content: center;
  }
  .column {
    float: left;
    width: 13rem;
    text-align: center;
  }
  .icons {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    .icon {
      width: 10rem;
      height: 10rem;
      border: 7px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      &:hover {
        border: 7px solid var(--primary-color);
        color: var(--primary-color);
      }
      &:not(:last-child) {
        margin-right: 3rem;
      }
      svg {
        margin: 0.5rem;
      }
    }
    .i-dis {
      &:hover {
        border: 7px solid #5865f2;
        color: #5865f2;
      }
    }
    .i-github {
      &:hover {
        border: 7px solid #5f4687;
        color: #5f4687;
      }
    }
  }
`;
export default ContactPage;
