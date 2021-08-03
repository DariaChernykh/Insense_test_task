import React from "react";
import styled from "styled-components";
import {Input} from "../components/Input"


import {Query} from "react-apollo";
import {GET_USER} from "../queries/queries";

export default () => {
    return (
        <div>
            <Query query={GET_USER}>
                {({loading, error, data}) => {
                    if (loading)
                        return (
                            // loader
                            <p>Loading...</p>
                        );
                    if (error) return <h3> `Error!: ${error}`</h3>;
                    return (
                        <Container>
                            <ImageBlock>
                                <Image src={'https://via.placeholder.com/180/afc5c2'} alt={data.user.name}/>
                            </ImageBlock>
                            <DataBlock>
                                <Input name={'profile_name'} title={'Profile name'} value={data.user.username}/>
                                <Input name={'description'} title={'Description'} value={data.user.name}
                                       type={'textarea'} rows="10"/>

                                <Input name={'email'} title={'Email'} value={data.user.email} type={'email'}/>
                                <Input name={'website'} title={'Web site'} value={data.user.website} type={'url'}/>
                                <Input name={'company_name'} title={'Company name'} value={data.user.company.name}/>
                                <Input name={'phone'} title={'Phone'} value={data.user.phone} type={'tel'}/>
                                <Input name={'address'} title={'Address'} value={data.user.address.city}/>
                            </DataBlock>
                        </Container>
                    );
                }}
            </Query>
        </div>
    );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
  gap: 40px;
`

const ImageBlock = styled.div``
const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
`

const DataBlock = styled.div``
