import React, {useState} from "react";
import styled from 'styled-components'
import {withRouter} from 'react-router'
import {Link} from "react-router-dom";

const LINKS = [{url: '/', text: 'Feed page'}, {url: '/faq', text: 'FAQ page'}, {url: '/user', text: 'User page'}]

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Container>
                <Avatar onClick={() => setMenuOpen(!menuOpen)}/>
                {menuOpen && (
                    <Menu>
                        {
                            LINKS.map((link) => (
                                <LinkItem key={link.text}>
                                    <Link to={link.url}>{link.text}</Link>
                                </LinkItem>
                            ))
                        }
                    </Menu>
                )}
            </Container>
        </HeaderWrapper>
    );
}

export default withRouter(Header)

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  height: 64px;
  left: 0;
  right: 0;
  top: 0;
  background: #FFFFFF;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.08);
`

const Container = styled.div`
  box-sizing: border-box;
  padding: 12px 30px;
  width: 1240px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: red;
`

const Menu = styled.ul`
  margin: 0;
  list-style: none;
  min-width: 180px;
  padding: 8px 0;
  position: absolute;
  right: 30px;
  top: 60px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.05), 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: #FFFFFF;
  z-index: 1;
`
const LinkItem = styled.li`
  & * {
    display: block;
    padding: 12px 20px;
    cursor: pointer;
    color: #404040;
    text-decoration: none;

    &:hover {
      background: #F2F2F2;
    }
  }
}
`
