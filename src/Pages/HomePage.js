import React from 'react'
import styled from "styled-components"
import Facebook from '@material-ui/icons/Facebook'
import GitHub from '@material-ui/icons/GitHub'
import YouTube from '@material-ui/icons/YouTube'

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className='typography'>
        <h1>Hi I'm <span>Patchara Poonsawat</span></h1>
        <p>WORK PLAY & LELAX</p>
        <div className='icons'>
          <div className='icon i-facebook'><Facebook/></div>
          <div className='icon i-github'><GitHub/></div>
          <div className='icon i-youtube'><YouTube/></div>
        </div>
      </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage