import React from "react";
import styled from 'styled-components'

export const Modal = ({onClick, full = false, children}) => {
    return (
        <Wrapper>
            <Layout onClick={onClick}/>
            <CloseButton onClick={onClick}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.7071 0.292895C14.0976 0.68342 14.0976 1.31658 13.7071 1.70711L8.41418 7.00001L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3165 14.0976 12.6834 14.0976 12.2928 13.7071L6.99997 8.41422L1.70711 13.7071C1.31658 14.0976 0.683415 14.0976 0.292892 13.7071C-0.0976319 13.3165 -0.0976304 12.6834 0.292895 12.2928L5.58575 7.00001L0.292893 1.70715C-0.0976311 1.31663 -0.0976311 0.683462 0.292893 0.292937C0.683418 -0.097587 1.31658 -0.097587 1.70711 0.292937L6.99997 5.5858L12.2929 0.292892C12.6834 -0.0976318 13.3166 -0.0976304 13.7071 0.292895Z"
                        fill="white"/>
                </svg>
            </CloseButton>
            {full ? <>{children}</> : (
                <Box>
                    {children}
                </Box>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`
const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
`
const CloseButton = styled.button`
  position: absolute;
  width: 80px;
  height: 80px;
  right: 0;
  top: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.5;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 520px;

  background: #FFFFFF;
  border-radius: 4px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
`
