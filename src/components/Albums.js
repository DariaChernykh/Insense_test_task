import React, {useState} from "react";
import styled from "styled-components";
import {AddAlbumModal} from "./AddAlbumModal";
import {DeleteAlbumModal} from "./DeleteAlbumModal";
import {PhotosModal} from "./PhotosModal";
import {ShadowContainer} from "./ShadowContainer";

import {Query} from "react-apollo";
import {GET_ALL_ALBUMS} from "../queries/queries";


export const Albums = () => {
    const state = {
        "options": {
            "paginate": {
                "page": 1,
                "limit": 20
            }
        }
    }

    const [menuOpen, setMenuOpen] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [currentPhotos, setCurrentPhotos] = useState([])
    const [currentAlbum, setCurrentAlbum] = useState('')
    const [photosModalOpen, setPhotosModalOpen] = useState(false)

    return (
        <div>
            <Query query={GET_ALL_ALBUMS} variables={state}>
                {({loading, error, data}) => {
                    if (loading)
                        return (
                            // loader
                            <p>Loading...</p>
                        );
                    if (error) return <h3> `Error!: ${error}`</h3>;
                    return (
                        <Wrapper>
                            {addModalOpen && <AddAlbumModal onClick={() => setAddModalOpen(false)}/>}
                            {deleteModalOpen &&
                            <DeleteAlbumModal id={currentAlbum} onClick={() => setDeleteModalOpen(false)}/>}
                            {photosModalOpen &&
                            <PhotosModal photos={currentPhotos} onClick={() => setPhotosModalOpen(false)}/>}

                            <EmptyAlbum onClick={() => setAddModalOpen(true)}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 11V5H11.5V11H5.5V13H11.5V19H13.5V13H19.5V11H13.5Z" fill="#AFAFAF"/>
                                </svg>
                                <AddText>Add album</AddText>
                            </EmptyAlbum>

                            {data.albums.data.map((item, index) => (
                                <ShadowContainer key={item.title}>
                                    <Album key={item.title}>
                                        <Image
                                            src={item.photos.data[0].thumbnailUrl}
                                            alt={item.photos.data[0].title}
                                            onClick={() => {
                                                setCurrentPhotos(item.photos)
                                                setPhotosModalOpen(true)
                                            }}
                                        />
                                        <Content>
                                            <Menu onClick={() => setMenuOpen(!menuOpen)}>
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10ZM19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z"/>
                                                </svg>
                                                {menuOpen && (
                                                    <List>
                                                        <ShadowContainer small={true}>
                                                            <Item onClick={() => {
                                                                setCurrentAlbum(item.id)
                                                                setDeleteModalOpen(true)
                                                            }
                                                            }>
                                                                Delete
                                                            </Item>
                                                        </ShadowContainer>
                                                    </List>
                                                )}
                                            </Menu>
                                            <Author>{item.user.username}</Author>
                                            <Title>{item.title}</Title>
                                        </Content>
                                    </Album>
                                </ShadowContainer>
                            ))}
                        </Wrapper>
                    );
                }}
            </Query>
        </div>
    );
};
const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, minmax(380px, 1fr));
  width: 100%;
  padding-top: 32px;

  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  color: #404040;
`
const EmptyAlbum = styled.div`
  padding: 20px;
  border: 1px dashed #AFAFAF;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`
const Album = styled.div`
  display: flex;
  gap: 20px;
`
const Image = styled.img`
  font-size: 12px;
  flex: 0 0 64px;
  height: 64px;
  border-radius: 50%;
  cursor: pointer;
`
const AddText = styled.span`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #AFAFAF;
`

const Content = styled.div`
  flex: 1 1 auto;
`
const Menu = styled.div`
  width: 24px;
  height: 24px;
  margin-left: auto;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  & svg {
    fill: #AFAFAF;
  }

  & svg:hover {
    fill: #404040;
  }
`

const List = styled.div`
  position: absolute;
  min-width: 180px;
  right: 0;
  top: 100%;
  background-color: #FFFFFF;
`

const Item = styled.div`
  padding: 12px 20px;

  &:hover {
    background: #F2F2F2;
  }
`

const Author = styled.div`
  margin-top: -12px;
  font-size: 12px;
  line-height: 16px;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`
