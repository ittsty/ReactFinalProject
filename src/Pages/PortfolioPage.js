import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import PortItem from "../Components/PortItem";
import { BsGithub,BsYoutube} from 'react-icons/bs';

const PortfolioPage = () => {
  return (
    <MainLayout>
      <ProtStyle>
        <InnerLayout>
          <Title title={"Portfolio"} span={"Portfolio"} />
          <PortItem
            iframe={
              <iframe
                width="480"
                height="269"
                src="https://www.youtube.com/embed/pMJABem6BYs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            }
            Title={"Run for project"}
            P={'Position : Programer'}
            Desc={'my first programing project using Unity my main job is make a whole coding part and make things run'}
            link={'https://github.com/ittsty/RunForProject'}
            c={'icon i-github'}
            icon={<BsGithub size='40'/>}
          />
          <PortItem
            iframe={
              <iframe
                width="480"
                height="269"
                src="https://www.youtube.com/embed/3GtWboFEbdM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            }
            Title={"F standing"}
            P={'Position : Editor'}
            Desc={'Palody from famous game "Death standing" my job is editing everything and make some color grading'}
            link={'https://www.youtube.com/watch?v=3GtWboFEbdM'}
            c={'icon i-youtube'}
            icon={<BsYoutube size='40'/>}
          />
          <PortItem
            iframe={
              <iframe
                width="480"
                height="269"
                src="https://www.youtube.com/embed/ZV54RWz-VD4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            }
            Title={"Mysterie Letter"}
            Desc={'my first animation project using Adobe animate CC'}
            link={'https://www.youtube.com/watch?v=ZV54RWz-VD4'}
            c={'icon i-youtube'}
            icon={<BsYoutube size='40'/>}
          />
        </InnerLayout>
      </ProtStyle>
    </MainLayout>
  );
}

const ProtStyle = styled.div`
`
export default PortfolioPage