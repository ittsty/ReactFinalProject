import React from 'react'
import Title from '../Components/Title'
import {MainLayout,InnerLayout} from '../styles/Layout'
import styled from "styled-components";
import ProgressBar from '../Components/ProgressBar'
import SmallTitle from '../Components/SmallTitle';
import ResumeItem from '../Components/Resume-item';
import SchoolIcon from "@material-ui/icons/School"

const ResumePage = () => {

  const school = <SchoolIcon />

  return (

    <MainLayout>
      <InnerLayout>
        {/* <Title title={"Resume"} span={"Resume"} /> */}
        <SkillsStyled>
          <Title title={"My Skills"} span={"my skills"} />
          <InnerLayout>
            <div className="skills">
              <ProgressBar title={"HTML5"} width={"100%"} text={"70%"} />
              <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
              <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
              <ProgressBar title={"JAVA"} width={"60%"} text={"60%"} />
              <ProgressBar title={"PYTHON"} width={"95%"} text={"95%"} />
              <ProgressBar title={"React JS"} width={"75%"} text={"75%"} />
              <ProgressBar title={"UNITY"} width={"75%"} text={"75%"} />
            </div>
          </InnerLayout>
        </SkillsStyled>

        <MainRoleStyle >
          <Title title={"My MainRole"} span={"My MainRole"} />
          <InnerLayout>
            <div className='row'>
                <div className="column green">
                  <h1>A</h1>
                </div>
              <div className="column blue">
                <h1>C</h1>
              </div>
              <div className="column red"> 
                <h1>B</h1>
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
                        year={'2019 - Present'} 
                        title={'Thai-Nichi Institute of Technology'}
                        subTitle={"bachelor's degree"}
                    />
                    <ResumeItem 
                        year={'2016 - 2019'} 
                        title={'Bodindecha (Sing Singhaseni)2 School'}
                        subTitle={'High School'}
                        text={'Mathematics-Science'}
                    />
                    <ResumeItem 
                        year={'2014 - 2016'} 
                        title={'Bodindecha (Sing Singhaseni)2 School'}
                        subTitle={'Middle School'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
      </InnerLayout>

    </MainLayout>
  );
}

const MainRoleStyle = styled.section`
.row{
  height: 5rem;
  padding: 1.5rem;
}
.column {
  float: left;
  width: 33.33%;
  text-align: center ;
}
.red { color: red; background: pink; }
.blue { color: blue; background: lightblue; }
.green { color: green; background: lightgreen; }
`

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default ResumePage