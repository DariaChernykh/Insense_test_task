import React from "react";
import styled from 'styled-components'

export const Input = ({name, title, value, type, ...restProps}) => {
    return (
        <Label htmlFor={name}>
            <LabelText>{title}</LabelText>
            {type !== 'textarea' ? <CustomInput name={name} value={value} type={type} {...restProps} /> :
                <TextArea name={'name'} value={value} {...restProps} />
            }

        </Label>
    );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 32px;
  }
`

const CustomInput = styled.input`
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: #404040;
`

const LabelText = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #AFAFAF;
  margin: 0 4px;
`

const TextArea = styled.textarea`
  margin-top: 8px;
  padding: 8px 12px;
  border: 1px solid #DBDBDB;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: #404040;
`
