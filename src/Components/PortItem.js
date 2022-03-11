import React from "react";
import styled from "styled-components";
import { BsFacebook,BsGithub,BsYoutube} from 'react-icons/bs';


function PortItem({iframe,Title,P,Desc,link,c,icon}){
  return (
      <ProtStyle>
          <div className="row">
            <div className="Left-content">
                {iframe}
            </div>
            <div className="Right-content">
              <h1>{Title}</h1>
              <h2>{P}</h2>
              <p>{Desc}</p>
              <div className="link">
              <a href={link} className={c}>{icon}</a>
              </div>
            </div>
          </div>
      </ProtStyle>
  )
}

const ProtStyle = styled.div`
  .row {
    width: 95%;
    height: 15rem;
    margin-top: 2rem;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(11px);
    -webkit-backdrop-filter: blur(11px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    .Left-content {
      display: flex;
      float: left;
      width: 50%;
      justify-content: center;
    }
    .Right-content {
      float: right;
      width: 50%;
      height: inherit;
      .link {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          color: var(--primary-color);
        }
      }
      .i-youtube {
        &:hover {
          color: red;
        }
      }
      .i-github {
        &:hover {
          color: #5f4687;
        }
      }
      }
    }
  }
  h1 {
    font-size: 2.5rem;
  }
  p {
    margin-top: 1.5rem;
  }
`;
export default PortItem