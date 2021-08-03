import React from "react";
import styled from 'styled-components'
import {Modal} from "./Modal";
import {Input} from "./Input";

export const AddAlbumModal = ({onClick}) => {
    return (
        <Modal
            onClick={onClick}
        >
            <Title>Add album</Title>
            <Input name={'title'} title={'Title'}/>
            <Input name={'description'} title={'Description'}/>
            <SendButton>Send</SendButton>
        </Modal>
    );
}

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
`
const SendButton = styled.button`
  width: 100%;
  margin-top: 40px;
  padding: 16px;
  background: #4E42E4;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;
`
