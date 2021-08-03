import React from "react";
import styled from 'styled-components'
import User from "./pages/User";
import Feed from "./pages/Feed";
import FAQ from "./pages/FAQ";
import Header from "./components/Header";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Container>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Feed}/>
                        <Route exact path="/faq" component={FAQ}/>
                        <Route exact path="/user" component={User}/>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

export default App;

const Container = styled.div`
  box-sizing: border-box;
  min-width: 1240px;
  width: 1240px;
  padding: 110px 30px 80px;
  margin: 0 auto;
`
