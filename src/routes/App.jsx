import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../Pages/Login";

import CreateAccount from "../Pages/CreateAccount";
import Home from "../Pages/Home";
import NewPassword from "../Pages/NewPassword";
import NotFound from "../Pages/NotFound";
import '../styles/global.scss'
import PasswordRecovery from "../Pages/PasswordRecovery";
import MyAccount from "../Pages/MyAccount";
import SendEmail from "../Pages/SendEmail";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/password-recovery" component={PasswordRecovery} />
                    <Route exact path="/create-account" component={CreateAccount} /> 
                    <Route exact path="/new-password" component={NewPassword} />
                    <Route exact path="/my-account" component={MyAccount} />
                    <Route exact path="/send-email" component={SendEmail} />
                    <Route component={NotFound} />

                </Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default App;