import React from "react";
import styled from "styled-components";
import {ShadowContainer} from "./ShadowContainer";

import {GET_POSTS} from "../queries/queries";
import {Query} from "react-apollo";

export const Posts = () => {
    const state = {
        "options": {
            "paginate": {
                "page": 1,
                "limit": 20
            }
        }
    }
    return (
        <PostsWrapper>
            <Query query={GET_POSTS} variables={state}>
                {({loading, error, data}) => {
                    if (loading)
                        return (
                            // loader
                            <p>Loading...</p>
                        );
                    if (error) return <h3> `Error!: ${error}`</h3>;
                    return (
                        <Content>
                            {data.posts.data.map((item) => (
                                <ShadowContainer key={item.id}>
                                    <div>{item.user.username}</div>
                                    <Title>Title</Title>
                                    <div>{item.body}</div>
                                </ShadowContainer>
                            ))}
                        </Content>
                    );
                }}
            </Query>
        </PostsWrapper>
    );
};

const PostsWrapper = styled.div``

const Content = styled.div`
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

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`
