import React from "react";
import styled from 'styled-components'
import {ShadowContainer} from "./ShadowContainer";

export const Answers = ({answers}) => {
    return (
        <AnswersWrapper>
            {answers.titles.map((title, index) => (
                <ShadowContainer key={index}>
                    <Answer>
                        <Image>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
                                    fill="#404040"/>
                                <path
                                    d="M10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 10.5737 13.8466 10.8379 13.6307 11.0784C13.4952 11.2295 13.3269 11.3768 13.0877 11.5796L13.0365 11.6229C12.8195 11.8067 12.5566 12.0292 12.2929 12.2929C11.6707 12.9151 11.3446 13.5541 11.1763 14.0588C11.0928 14.3094 11.0488 14.5248 11.0257 14.6867C11.0141 14.7677 11.0077 14.8358 11.0042 14.8886C11.0024 14.915 11.0014 14.9376 11.0008 14.9563L11.0002 14.9812L11 14.9914L11 14.9959L11 14.999C11 14.9995 11 15 12 15L11 14.999C11 15.5513 11.4477 16 12 16C12.5453 16 12.9887 15.5635 12.9998 15.0209C13.0002 15.0144 13.0017 14.9968 13.0056 14.9695C13.0137 14.9127 13.0322 14.8156 13.0737 14.6912C13.1554 14.4459 13.3293 14.0849 13.7071 13.7071C13.9099 13.5043 14.1136 13.3317 14.3394 13.1404L14.381 13.1052C14.6106 12.9105 14.8798 12.681 15.1193 12.4142C15.6534 11.819 16 11.0831 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 10.5523 8.44771 11 9 11C9.55229 11 10 10.5523 10 10Z"
                                    fill="#404040"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                                      fill="#404040"/>
                            </svg>
                        </Image>
                        <Content>
                            <Title>{title}</Title>
                            <Body>{answers.content}</Body>
                        </Content>
                    </Answer>
                </ShadowContainer>
            ))}
        </AnswersWrapper>
    );
}

const AnswersWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 380px 380px 380px;
  width: 100%;
  padding-top: 32px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  color: #404040;
`
const Answer = styled.div`
  display: flex;
  gap: 12px;
`
const Image = styled.div`
  flex: 0 0 24px;
`
const Title = styled.div`
  font-weight: bold;
`
const Content = styled.div``
const Body = styled.div`
  margin-top: 8px;
`
