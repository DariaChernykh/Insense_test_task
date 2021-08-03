import React from "react";
import styled from 'styled-components'

export const Tabs = ({tabs}) => {
    return (
        <TabsWrapper>
            {tabs.map((tab) => <Tab active={tab.active} key={tab.name} onClick={() => tab.onClick()}>{tab.name}</Tab>)}
        </TabsWrapper>
    );
}

const TabsWrapper = styled.div`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #404040;`

const Tab = styled.button`
  padding: 8px 0;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  & + & {
    margin-left: 40px;
  }

  box-shadow: ${props => props.active ? 'inset 0px -3px 0px #4E42E4' : 'none'};
`
