import React from 'react'
import styled from 'styled-components';

function ProgressBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.25rem;
        }
        .progress{
            position: relative;
            width: 70%;
            height: .4rem;
            background-color: var(--border-color);
            border-radius: 15px;
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color);
                border-radius: inherit;
                animation-name: animationProgress;
                animation-duration: 1s;
            }
        }
    }
    @keyframes animationProgress{
        from{
            width: 0;
        }
    }
`;

export default ProgressBar;
