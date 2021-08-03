import React, {useState} from "react";
import styled from 'styled-components'
import {Modal} from "./Modal";

export const PhotosModal = ({photos, onClick}) => {
    const [slide, setSlide] = useState(0)
    return (
        <Wrapper>
            <Modal
                full={true}
                onClick={onClick}
            >
                <Box>
                    <Arrow onClick={() => slide > 0 && setSlide(slide - 1)}>
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M13.4142 0.585786C14.1953 1.36684 14.1953 2.63317 13.4142 3.41421L4.82843 12L13.4142 20.5858C14.1953 21.3668 14.1953 22.6332 13.4142 23.4142C12.6332 24.1953 11.3668 24.1953 10.5858 23.4142L0.585786 13.4142C-0.195263 12.6332 -0.195262 11.3668 0.585786 10.5858L10.5858 0.585786C11.3668 -0.195262 12.6332 -0.195262 13.4142 0.585786Z"
                                  fill="white"/>
                        </svg>
                    </Arrow>
                    <PhotoBox>
                        <Inner slide={slide}>
                            {photos.data.map((photo) => (
                                <>
                                    <Container>
                                        <Image src={photo.url} alt={photo.title}/>
                                        <Title>{photo.title}</Title>
                                    </Container>
                                </>
                            ))}
                        </Inner>
                    </PhotoBox>
                    <Arrow onClick={() => slide < photos.data.length && setSlide(slide + 1)}>
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0.585786 0.585786C-0.195262 1.36684 -0.195262 2.63317 0.585787 3.41421L9.17157 12L0.585787 20.5858C-0.195261 21.3668 -0.195261 22.6332 0.585787 23.4142C1.36684 24.1953 2.63317 24.1953 3.41421 23.4142L13.4142 13.4142C14.1953 12.6332 14.1953 11.3668 13.4142 10.5858L3.41421 0.585786C2.63317 -0.195262 1.36683 -0.195262 0.585786 0.585786Z"
                                  fill="white"/>
                        </svg>
                    </Arrow>

                    <Link target="_blank" href={photos.data[slide].url}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 15C12 13.3431 13.3431 12 15 12H17C17.5523 12 18 12.4477 18 13C18 13.5523 17.5523 14 17 14H15C14.4477 14 14 14.4477 14 15V25C14 25.5523 14.4477 26 15 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 26.4477 22 27 22C27.5523 22 28 22.4477 28 23V25C28 26.6569 26.6569 28 25 28H15C13.3432 28 12 26.6569 12 25V15Z"
                                fill="white"/>
                            <path
                                d="M26 15.4142L18.7071 22.7071C18.3166 23.0976 17.6834 23.0976 17.2929 22.7071C16.9024 22.3166 16.9024 21.6834 17.2929 21.2929L24.5858 14H22C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12H27C27.5523 12 28 12.4477 28 13V18C28 18.5523 27.5523 19 27 19C26.4477 19 26 18.5523 26 18V15.4142Z"
                                fill="white"/>
                        </svg>
                    </Link>
                </Box>
            </Modal>
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
const Box = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: calc(100% - 120px);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  margin: 60px 0;
`

const Arrow = styled.div`
  flex: 0 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;
`
const PhotoBox = styled.div`
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  position: relative;
`
const Inner = styled.div`
  display: flex;
  transform: translateX(-${props => props.slide * 600}px);
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Image = styled.img`
  margin-bottom: 40px;
  width: auto;
  height: auto;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  margin-top: 20px;
  align-self: center;
`

const Link = styled.a`
  width: 80px;
  height: 80px;
  text-align: center;
  vertical-align: center;
  font-size: 20px;
  line-height: 28px;
  display: inline-block;
  margin-left: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.5;
`

