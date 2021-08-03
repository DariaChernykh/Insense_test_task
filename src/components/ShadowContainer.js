import React from "react";
import styled from 'styled-components'

export const ShadowContainer = ({small = false, children}) => {
    return (
        <Container small={small}>
            {children}
        </Container>
    );
}

const Container = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: ${(props) => props.small ? '8px 0' : '20px'};
`
